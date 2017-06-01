let loadedCharacters = require('./temp/characters')

let fs = require('fs')

let data = fs.readFileSync('../resources/km-all.json', 'utf8')

let jsonData = JSON.parse(data)

console.log('Received ' + jsonData.length + ' items.  GLHF!')

let charactersNotFound = []

jsonData.forEach(function(character) {
  if (character.picture.indexOf('DC') !== -1) {
    let splitKey = character.picture.split('DC')
    let nameKey = character.name.split(' [')[0].split(' (BOSS)')[0]
    if (nameKey.indexOf('Origin') !== -1) {
      nameKey = nameKey.split(' Origin')[0] + ' (AO)'
    }
    if (nameKey.indexOf('TAS') !== -1) {
      nameKey = nameKey.split(' TAS')[0] + ' (TAS)'
    }
    if (nameKey.indexOf('MK') !== -1) {
      nameKey = nameKey.split(' MK')[0] + ' Mk ' + nameKey.split(' MK')[1]
    }
    if (nameKey.indexOf('Inmate ') !== -1) {
      nameKey = nameKey.split('nmate ')[1]
    }
    if (nameKey.indexOf('(comic') !== -1) {
      nameKey = nameKey.split('(comic')[0] + '(Comic)'
    }
    if (nameKey.indexOf(' Comic') !== -1) {
      nameKey = nameKey.split(' Comic')[0] + '(Comic)'
    }
    if (nameKey.indexOf('(Frank Miller)') !== -1) {
      nameKey = nameKey.split('(Frank Miller')[0] + '(TDKR)'
    }
    if (nameKey.indexOf(' AC') !== -1) {
      nameKey = nameKey.split(' AC')[0] + '(AC)'
    }
    if (nameKey.indexOf(' AK') !== -1) {
      nameKey = nameKey.split(' AK')[0] + '(AK)'
    }
    if (nameKey.indexOf(' Animated') !== -1) {
      nameKey = nameKey.split(' Animated')[0] + '(TAS)'
    }
    if (nameKey.indexOf(' Classic') !== -1) {
      nameKey = nameKey.split(' Classic')[0] + '(Classic)'
    }
    if (nameKey.indexOf(' classic') !== -1) {
      nameKey = nameKey.split(' classic')[0] + '(Classic)'
    }
    if (nameKey.indexOf('The Penguin Gotham') !== -1) {
      nameKey = 'The Penguin (Gotham)'
    }
    if (nameKey.indexOf('Connell') !== -1) {
      nameKey = 'Agent O\'Connell'
    }
    if (nameKey.indexOf(' DKR') !== -1) {
      nameKey = nameKey.split(' DKR')[0] + '(DKR)'
    }
    if (nameKey.indexOf('Malley') !== -1) {
      console.log('We got one of those Malleys!')
      nameKey = 'O\'Malley\'s' + nameKey.split('Malley\'')[1]
    }
    if (nameKey.indexOf('Blue Penguin') !== -1) {
      let splitNameKey = nameKey.split('lue Penguin')
      if (splitNameKey[1].indexOf('shield') !== -1) {
        nameKey = 'Blue Penguin'
      } else if (splitNameKey[1].indexOf('machette') !== -1) {
        nameKey = 'Blue Penguin 1'
      } else {
        nameKey = 'Blue Penguin 2'
      }
      nameKey = 'Robin (Carrie Kelley)'
    }
    if (nameKey.indexOf('Carrie Kelly') !== -1) {
      nameKey = 'Robin (Carrie Kelley)'
    }
    if (nameKey.indexOf('Arrow TV') !== -1) {
      nameKey = 'ARROW'
    }
    nameKey = nameKey.replace(/ /g, '').toUpperCase()
    if (splitKey[0] !== '35') {
      console.log('Character ' + character.name + ' has a key that does not start with 35. ' + character.picture + ' Be careful.')
      return
    }
    let foundChar = loadedCharacters.loadedCharacters.find(function(findChar) {
      let modCharName = findChar.name.toUpperCase().replace(/ /g, '')
      let modCharAlias = findChar.alias.toUpperCase().replace(/ /g, '')
      if (modCharName.indexOf(nameKey) !== -1 || modCharAlias.indexOf(nameKey) !== -1 ) {
        return true
      }
      return false
    })

    if (foundChar === undefined) {
      console.log('Could not find existing character for name: ' + nameKey + ', Key: ' + splitKey[1])
      charactersNotFound.push(character)
    } else {
      foundChar.key = splitKey[1]
    }

  }
})

console.log('There are still ' + charactersNotFound.length + ' of ' + jsonData.length + ' characters to be corrolated.')

let re = /"/g
let finalJson = 'export const loadedCharacters = ' + JSON.stringify(loadedCharacters.loadedCharacters, null, 2).replace(/'/g, '\\\'').replace(re, "'")
fs.writeFile('targets/final-characters.js', finalJson, 'utf8')
