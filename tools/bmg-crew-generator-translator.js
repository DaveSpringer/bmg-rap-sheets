let loadedCharacters = require('./characters')

let NAME_COL = 2,
  ALIAS_COL = 3,
  RANK_COL = 4,
  CREW_COL = 5,
  AFFINITY_COL = 6,
  HATES_COL = 8,
  ELITE_COL = 10,
  ELITE_BOSS_COL = 11,
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
  if (trait.lastIndexOf('Armour') !== -1) {
    resultTrait = trait.replace('Armour', 'Armor')
  }
  if (resultTrait.toUpperCase().indexOf('PRIMARY TARGET') !== -1) {
    console.log('Found a character with Primary Target: ' + trait)
    let splitTrait = resultTrait.split(': ')
    resultTrait = {
      name: splitTrait[0],
      target: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('TEAMWORK') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait
    let firstTrait
    if (resultTrait.lastIndexOf(': ') !== -1) {
      splitTrait = resultTrait.split(': ')
      firstSplit = splitTrait[0].split(' ')
    } else {
      splitTrait = resultTrait.split(' ')
      firstSplit = splitTrait[0].split('/')
    }
    resultTrait = {
      name: firstSplit[0],
      counter: firstSplit[1],
      target: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('COMBO') !== -1) {
    let splitTrait = resultTrait.split(': ')
    resultTrait = {
      name: 'Combo with',
      weapon: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('SPEEDSTER') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait
    if (resultTrait.indexOf(' ') !== -1) {
      splitTrait = resultTrait.split(' ')
    } else {
      splitTrait = resultTrait.split('/')
    }
    resultTrait = {
      name: 'Speedster',
      tokens: parseInt(splitTrait[1])
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('VENOM DOSE') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
  } else if (resultTrait.toUpperCase().indexOf('WEAPON MASTER') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    if (trait.indexOf(': ') !== -1) {
      let splitTrait = trait.split(': ')
      resultTrait = {
        name: 'Weapon Master With',
        weapon: splitTrait[1]
      }
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('VULNERABILITY') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = trait.split(' ')
    resultTrait = {
      name: 'Vulnerability',
      element: splitTrait[2]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('TRUE LOVE') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = trait.split(': ')
    resultTrait = {
      name: 'True Love',
      love: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('SCHEMING') !== -1) {
    console.log('*Found a character with functional trait: ' + trait)
    let splitTrait = trait.split('/')
    resultTrait = {
      name: 'Scheming',
      count: parseInt(splitTrait[1])
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (trait.indexOf('Hook Arrow') !== -1) {
    resultTrait = 'Hook Arrow'
  } else if (trait.toUpperCase().indexOf('ARM') !== -1 && trait.indexOf('Bat') !== -1) {
    console.log('Checking out Bat Armor' + trait)
    let splitTrait = trait.split('MK')
    if (trait.indexOf('Mk') !== -1) {
      splitTrait = trait.split('Mk')
    } else {
      splitTrait = trait.split('MK')
    }
    let mark = splitTrait[1].trim()
    resultTrait = 'Bat-Armor MK ' + mark
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

let parseCrew = function(crew) {
    let resultCrew
    switch (crew.trim()) {
      case 'Batman': resultCrew = 'bt'; break;
      case 'LAW':
      case 'Law Forces':
      case 'LAW Forces': resultCrew = 'lf'; break;
      case 'Green Arrrow':
      case 'Green Arrow': resultCrew = 'ga'; break;
      case 'Joker & Harley':
      case 'Joker': resultCrew = 'jk'; break;
      case 'Bane': resultCrew = 'bn'; break;
      case 'Black Mask': resultCrew = 'bm'; break;
      case 'League of Shadow':
      case 'LoS': resultCrew = 'ls'; break;
      case 'The Court of Owls': resultCrew = 'co'; break;
      case 'Scarecrow': resultCrew = 'sc'; break;
      case 'Penguin': resultCrew = 'pn'; break;
      case 'Two-Face':
      case 'Two Face': resultCrew = 'tf'; break;
      case 'Poison Ivy': resultCrew = 'pi'; break;
      case 'Riddler': resultCrew = 'rd'; break;
      case 'Watchmen': resultCrew = 'wm'; break;
      case 'Wonderland Gang': resultCrew = 'wg'; break;
      case 'Mr. Freeze': resultCrew = 'mf'; break;
      case 'OC':
      case 'Organised Crime':
      case 'Organized Crime': resultCrew = 'oc'; break;
      case 'Unknown': resultCrew = '*'; break;
      case '': break;
      default:
        throw 'Unexpected crew ' + crew
    }
    return resultCrew
}

let parseCrews = function(crewsString) {
  let splitCrews = crewsString.split(' / ')
  return splitCrews.reduce(function(crews, crew) {
    let parsedCrew = parseCrew(crew)
    if (parsedCrew !== undefined) {
      crews.push(parseCrew(crew))
    }
    return crews
  }, [])
}

let parseRank = function(rank) {
  let resultRank = rank
  if (rank.indexOf('/') !== -1 && rank.indexOf('Vehicle') === -1) {
    console.log('Looking into split rank: ' + rank)
    let splitRank = rank.split('/')
    let factionRanks
    resultRank = splitRank.reduce(function(finalRank, curRank) {
      console.log('Current rank: ' + curRank)
      if (curRank.indexOf('(') === -1) {
        if (curRank.indexOf('Free Agent') !== -1) {
          finalRank.push({
            crew: '*',
            rank: 'Free Agent'
          })
        } else {
          throw 'Found a character lacking a crew associated with their selectable rank. Please check CSV for: ' + curRank
        }
      } else {
        factionRanks = curRank.split('(')
        let crewString = factionRanks[1].trim()
        let closePeren = (crewString.indexOf(')') === -1 ? crewString.length : crewString.indexOf(')'))
        crewString = crewString.substring(0, closePeren)
        finalRank.push({
          crew: parseCrew(crewString),
          rank: factionRanks[0].trim()
        })
      }
      return finalRank
    }, [])
  }
  if (resultRank === 'Minion') {
    resultRank = 'Henchman'
  }
  return resultRank
}

let populateChar = function(charColumns) {
  let traits = parseTraits(charColumns[TRAIT_1_COL],
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
                           charColumns[TRAIT_12_COL])
  if (charColumns[ELITE_COL].length > 0) {
    traits.push({ name: 'Elite', type: charColumns[ELITE_COL]})
  }
  if (charColumns[ELITE_BOSS_COL].length > 0) {
    traits.push({ name: 'Elite Boss', type: charColumns[ELITE_COL]})
  }

  return {
      name: charColumns[NAME_COL],
      alias: charColumns[ALIAS_COL],
      rank: parseRank(charColumns[RANK_COL]),
      reputation: parseInt(charColumns[REP_COL]),
      funding: parseInt(charColumns[FUNDING_COL]),
      crews: parseCrews(charColumns[CREW_COL]),
      hates: parseCrews(charColumns[HATES_COL]),
      traits: traits,
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
  if (charColumns[NAME_COL] === undefined || (charColumns[NAME_COL].length === 0 && charColumns[ALIAS_COL].length === 0)) {
    // console.log("Found a row to skip: " + char)
    return newChars
  }
  if (characterAliases.includes(`${charColumns[ALIAS_COL]}`.toUpperCase())) {
    // console.log("Character " + charColumns[ALIAS_COL] + "-" + charColumns[NAME_COL] + " already exists. Skipping.")
    skippedChars.push(populateChar(charColumns))
    return newChars
  }
  if (nameToRepMap[charColumns[NAME_COL].toUpperCase()] !== undefined) {
    let candidateReps = nameToRepMap[charColumns[NAME_COL].toUpperCase()]
    if (candidateReps.includes(charColumns[REP_COL])) {
      // console.log("Character " + charColumns[ALIAS_COL] + "-" + charColumns[NAME_COL] + " seems to already exist due to name and rep match. Skipping.")
      skippedChars.push(populateChar(charColumns))
      return newChars
    }
  }
  try {
    newChars.push(populateChar(charColumns))
  } catch (err) {
    console.log(err)
    // console.log('Skipping character ' + charColumns[NAME_COL] + '-' + charColumns[ALIAS_COL] + ' due to error.')
  }
  return newChars
}
let outputChars = inputChars.reduce(reduceInputChars, [])

var outputJson = JSON.stringify(outputChars, null, '  ')

fs.writeFile('targets/new-characters.json', outputJson, 'utf8');

var skippedJson = 'export const loadedCharacters = ' + JSON.stringify(skippedChars, null, 1)

fs.writeFile('targets/skipped-characters.js', skippedJson, 'utf8')

let finalChars = outputChars.concat(skippedChars)
let re = /"/g
let finalJson = 'export const loadedCharacters = ' + JSON.stringify(finalChars, null, 2).replace(/'/g, '\\\'').replace(re, "'")
fs.writeFile('targets/final-characters.js', finalJson, 'utf8')
// console.log(JSON.stringify(outputChars, null, 1))
