let KEY_COL = 1,
NAME_COL = 2,
DAMAGE_COL = 3,
ROF_COL = 4,
AMMO_COL = 5,
SPECIAL_1_COL = 6,
SPECIAL_2_COL = 7,
SPECIAL_3_COL = 8,
SPECIAL_4_COL = 9,
SPECIAL_5_COL = 10,
SPECIAL_6_COL = 11,
TRAITS_COL = 12

let fs = require('fs')

let data = fs.readFileSync('../resources/bmg-weapons-0_8_4_7.tsv', 'utf8')

let inputWeapons = data.split('\r\n')

let parseNumber = function(number) {
  let resultNumber = parseInt(number)
  if (isNaN(resultNumber)) {
    resultNumber = number
  }
  return resultNumber
}

let parsedWeapons = inputWeapons.reduce(function(weapons, weapon) {
  let splitWeapons = weapon.split('\t')
  if (splitWeapons[KEY_COL] === undefined || splitWeapons[KEY_COL].length === 0) {
    return weapons
  }
  weapons.push({
    key: splitWeapons[KEY_COL],
    name: splitWeapons[NAME_COL],
    damage: splitWeapons[DAMAGE_COL],
    rof: parseNumber(splitWeapons[ROF_COL]),
    ammo: parseNumber(splitWeapons[AMMO_COL]),
    traits: splitWeapons[TRAITS_COL]
  })

  return weapons
}, [])

let sortedWeapons = parsedWeapons.sort(function(a, b) {
  if (a.key.toUpperCase() > b.key.toUpperCase()) {
    return 1
  } else {
    return -1
  }
})

let re = /"/g
let sortedWeaponJson = 'export const allWeapons = ' + JSON.stringify(sortedWeapons, null, 2).replace(/'/g, '\\\'').replace(re, "'")

fs.writeFile('targets/result-weapons.js', sortedWeaponJson, 'utf8')
