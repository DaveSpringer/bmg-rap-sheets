let loadedCharacters = require('./characters')

let NAME_COL = 2,
  ALIAS_COL = 3,
  RANK_COL = 4,
  CREW_COL = 5,
  AFFINITY_COL = 6,
  HATES_COL = 8,
  REP_COL = 14,
  FUNDING_COL = 15,
  WILLPOWER_COL = 16,
  STRENGTH_COL = 17,
  MOVEMENT_COL = 18,
  ATTACK_COL = 19,
  DEFENSE_COL = 20,
  ENDURANCE_COL = 21,
  SPECIAL_COL = 22,
  WEAPON_1_COL = 23,
  WEAPON_2_COL = 24,
  WEAPON_3_COL = 25,
  WEAPON_4_COL = 26,
  WEAPON_5_COL = 27,
  TRAIT_1_COL = 28,
  TRAIT_2_COL = 29,
  TRAIT_3_COL = 30,
  TRAIT_4_COL = 31,
  TRAIT_5_COL = 32,
  TRAIT_6_COL = 33,
  TRAIT_7_COL = 34,
  TRAIT_8_COL = 35,
  TRAIT_9_COL = 36,
  TRAIT_10_COL = 37,
  TRAIT_11_COL = 38,
  TRAIT_12_COL = 39,
  AFFILIATE_1_COL = 42,
  AFFILIATE_2_COL = 43,
  AFFILIATE_3_COL = 44,
  AFFILIATE_4_COL = 45

let fs = require('fs')

let characterAliases = loadedCharacters.loadedCharacters.reduce(function(chars, char) {
  if (char.alias !== 'None' && char.alias !== 'Unknown') {
    chars.push(char.alias.toUpperCase())
  }
  return chars
}, [])
console.log(characterAliases)

let nameToRepMap = loadedCharacters.loadedCharacters.reduce(function(nameToRep, char) {
  let upperName = char.name.toUpperCase()
  if (upperName === 'UNKNOWN' || upperName === 'NONE' || upperName === '') {
    return nameToRep
  }
  // let currentName = nameToRep.get(upperName)
  let currentName = nameToRep[upperName]
  if (currentName === undefined) {
    // nameToRep.set(char.name.toUpperCase(), [ char.rep ])
    nameToRep[upperName] = [ `${char.reputation}` ]
  } else {
    currentName.push(`${char.reputation}`)
    // nameToRep.set(char.name.toUpperCase(), currentName)
    nameToRep[upperName] = currentName
  }
  return nameToRep
}, {})

console.log(JSON.stringify(nameToRepMap))

console.log('\n\n***********  Setup Complete **************\n\n')

let data = fs.readFileSync('./resources/bmg-crew-gen-0_8_4_5.csv', 'utf8')

let inputChars = data.split('\n')
inputChars = inputChars.slice(2, inputChars.length + 1)

let cleanupTrait = function(trait) {
  let resultTrait = trait
  if (trait.lastIndexOf('C)') !== -1 || trait.lastIndexOf('/P)') !== -1) {
    resultTrait = trait.split(' (')[0]
  }
  if (resultTrait.toUpperCase().indexOf('PRIMARY TARGET') !== -1) {
    console.log('Found a character with Primary Target: ' + trait)
  } else if (resultTrait.toUpperCase().indexOf('TEAMWORK') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
  } else if (resultTrait.toUpperCase().indexOf('ELITE BOSS') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
  } else if (resultTrait.toUpperCase().indexOf('COMBO WITH') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
  }
  return resultTrait
}

let parseTraits = function( t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12 ) {
  let traitArray = [ t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12 ]
  return traitArray.reduce(function(newTraits, trait) {
    if (trait !== undefined && trait !== '-' && trait.length > 0) {
      newTraits.push(cleanupTrait(trait))
    }
    return newTraits
  }, [])
}

let parseCrews = function(crewsString) {
  let splitCrews = crewsString.split(' / ')
  return splitCrews.reduce(function(crews, crew) {
    switch (crew.trim()) {
      case 'Batman': crews.push('bt'); break;
      case 'Law Forces':
      case 'LAW Forces': crews.push('lf'); break;
      case 'Green Arrrow':
      case 'Green Arrow': crews.push('ga'); break;
      case 'Joker & Harley':
      case 'Joker': crews.push('jk'); break;
      case 'Bane': crews.push('bn'); break;
      case 'Black Mask': crews.push('bm'); break;
      case 'League of Shadow':
      case 'LoS': crews.push('ls'); break;
      case 'The Court of Owls': crews.push('co'); break;
      case 'Scarecrow': crews.push('sc'); break;
      case 'Penguin': crews.push('pn'); break;
      case 'Two-Face':
      case 'Two Face': crews.push('tf'); break;
      case 'Poison Ivy': crews.push('pi'); break;
      case 'Riddler': crews.push('rd'); break;
      case 'Watchmen': crews.push('wm'); break;
      case 'Wonderland Gang': crews.push('wg'); break;
      case 'Mr. Freeze': crews.push('mf'); break;
      case 'OC':
      case 'Organised Crime':
      case 'Organized Crime': crews.push('oc'); break;
      case 'Unknown':
      case '':
        break;
      default:
        throw 'Unexpected crew ' + crew
    }
    return crews
  }, [])
}

let populateChar = function(charColumns) {
  return {
      name: charColumns[NAME_COL],
      alias: charColumns[ALIAS_COL],
      rank: charColumns[RANK_COL],
      reputation: parseInt(charColumns[REP_COL]),
      funding: parseInt(charColumns[FUNDING_COL]),
      crews: parseCrews(charColumns[CREW_COL]),
      hates: parseCrews(charColumns[HATES_COL]),
      traits: parseTraits(charColumns[TRAIT_1_COL],
                          charColumns[TRAIT_2_COL],
                          charColumns[TRAIT_3_COL],
                          charColumns[TRAIT_4_COL],
                          charColumns[TRAIT_5_COL],
                          charColumns[TRAIT_6_COL],
                          charColumns[TRAIT_7_COL],
                          charColumns[TRAIT_8_COL],
                          charColumns[TRAIT_9_COL],
                          charColumns[TRAIT_10_COL],
                          charColumns[TRAIT_11_COL],
                          charColumns[TRAIT_12_COL]),
      wp: parseInt(charColumns[WILLPOWER_COL]),
      str: parseInt(charColumns[STRENGTH_COL]),
      mov: parseInt(charColumns[MOVEMENT_COL]),
      att: parseInt(charColumns[ATTACK_COL]),
      def: parseInt(charColumns[DEFENSE_COL]),
      end: parseInt(charColumns[ENDURANCE_COL]),
      spc: parseInt(charColumns[SPECIAL_COL])
    }
}

let charColumns, name, alias, skippedChars = []
let reduceInputChars = function(newChars, char) {
  charColumns = char.split(',')
  if (charColumns[NAME_COL].length === 0 && charColumns[ALIAS_COL].length === 0) {
    console.log("Found a row to skip: " + char)
    return newChars
  }
  if (characterAliases.includes(`${charColumns[ALIAS_COL]}`.toUpperCase())) {
    console.log("Character " + charColumns[ALIAS_COL] + "-" + charColumns[NAME_COL] + " already exists. Skipping.")
    skippedChars.push(populateChar(charColumns))
    return newChars
  }
  if (nameToRepMap[charColumns[NAME_COL].toUpperCase()] !== undefined) {
    let candidateReps = nameToRepMap[charColumns[NAME_COL].toUpperCase()]
    if (candidateReps.includes(charColumns[REP_COL])) {
      console.log("Character " + charColumns[ALIAS_COL] + "-" + charColumns[NAME_COL] + " seems to already exist due to name and rep match. Skipping.")
      skippedChars.push(populateChar(charColumns))
      return newChars
    }
  }
  try {
    newChars.push(populateChar(charColumns))
  } catch (err) {
    console.log(err)
    console.log('Skipping character ' + charColumns[NAME_COL] + '-' + charColumns[ALIAS_COL] + ' due to error.')
  }
  return newChars
}
let outputChars = inputChars.reduce(reduceInputChars, [])

var outputJson = JSON.stringify(outputChars, null, '  ')

fs.writeFile('new-characters.json', outputJson, 'utf8');

console.log('\n\n******* beginning cleanup of current chars *******\n\n')

let cleanupOldChars = loadedCharacters.loadedCharacters.reduce(function(chars, char) {

}, [])

// console.log(JSON.stringify(outputChars, null, 1))
