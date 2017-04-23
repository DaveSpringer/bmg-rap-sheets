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
  SHOP_DESC_COL = 40,
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

let data = fs.readFileSync('./resources/bmg-crew-gen-0_8_4_7.tsv', 'utf8')

let inputChars = data.split('\n')
inputChars = inputChars.slice(2, inputChars.length + 1)

let cleanupTrait = function(trait) {
  let resultTrait = trait
  if (resultTrait.indexOf('#N/A') !== -1) {
    return undefined
  }
  if (resultTrait.trim().lastIndexOf('C)') !== -1 || resultTrait.lastIndexOf('/P)') !== -1) {
    resultTrait = trait.split(' (')[0]
  }
  if (resultTrait.lastIndexOf('Armour') !== -1) {
    resultTrait = resultTrait.replace('Armour', 'Armor')
  }
  if (resultTrait.lastIndexOf('(MD)') !== -1) {
    resultTrait = resultTrait.split('(M')[0].trim()
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
  } else if (resultTrait.toUpperCase().indexOf('DEATHLY STRIKE') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    if (resultTrait.indexOf(': ') !== -1) {
      let splitTrait = resultTrait.split(': ')
      resultTrait = {
        name: 'Deathly Strike with',
        weapon: splitTrait[1]
      }
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('CAN YOU SOLVE THIS') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split(' ')
    resultTrait = {
      name: 'Can you Solve this?',
      weapon: splitTrait[3]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('WEAPON MASTER') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    if (resultTrait.indexOf(': ') !== -1) {
      let splitTrait = resultTrait.split(': ')
      resultTrait = {
        name: 'Weapon Master With',
        weapon: splitTrait[1]
      }
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('IMMUN') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait
    if (resultTrait.indexOf(' to ') !== -1) {
      splitTrait = resultTrait.split(' to ')
    } else {
      splitTrait = resultTrait.split(' ')
    }
    resultTrait = {
      name: 'Immune to',
      element: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('INVULNERABILITY') !== -1 ||
            resultTrait.toUpperCase().indexOf('INVUNERABILITY') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split('/')
    resultTrait = {
      name: 'Invulnerability',
      counter: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('VULNERABILITY') !== -1 ||
            resultTrait.toUpperCase().indexOf('VULNERABLE TO') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split(' ')
    resultTrait = {
      name: 'Vulnerability',
      element: splitTrait[2]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('TRUE LOVE') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split(': ')
    resultTrait = {
      name: 'True Love',
      love: splitTrait[1]
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('VENOM DOSE') !== -1) {
    console.log('*Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split(' ')
    resultTrait = {
      name: 'Venom Dose',
      count: parseInt(splitTrait[0])
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('TITAN DOSE') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split('x')
    resultTrait = {
      name: 'Titan Dose',
      count: parseInt(splitTrait[1])
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('ASSASSIN') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split(' ')
    resultTrait = {
      name: 'Assassin',
      points: parseInt(splitTrait[1])
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.toUpperCase().indexOf('SCHEMING') !== -1) {
    console.log('Found a character with functional trait: ' + trait)
    let splitTrait = resultTrait.split('/')
    resultTrait = {
      name: 'Scheming',
      count: parseInt(splitTrait[1])
    }
    console.log('Resulting trait: ' + JSON.stringify(resultTrait))
  } else if (resultTrait.indexOf('Hook Arrow') !== -1) {
    resultTrait = 'Hook Arrow'
  } else if (resultTrait.toUpperCase().indexOf('ARM') !== -1 && resultTrait.indexOf('Bat') !== -1) {
    console.log('Checking out Bat Armor' + trait)
    let splitTrait = resultTrait.split('MK')
    if (resultTrait.indexOf('Mk') !== -1) {
      splitTrait = resultTrait.split('Mk')
    } else {
      splitTrait = resultTrait.split('MK')
    }
    let mark = splitTrait[1].trim()
    resultTrait = 'Bat-Armor MK ' + mark
  } else if (resultTrait.indexOf('Bipolar') !== -1) {
    resultTrait = 'Bipolar'
  } else if (resultTrait.indexOf('Paranoid') !== -1) {
    resultTrait = 'Paranoid'
  } else if (resultTrait.indexOf('Pyromania') !== -1) {
    resultTrait = 'Pyromania'
  } else if (resultTrait.indexOf('Obsessive') !== -1) {
    resultTrait = 'Obsessive'
  } else if (resultTrait.indexOf('Aggressive Schizophrenia') !== -1) {
    resultTrait = 'Aggressive Schizophrenia'
  } else if (resultTrait.indexOf('Discipline') !== -1) {
    resultTrait = 'Self-Discipline'
  } else if (resultTrait.indexOf('Disipline') !== -1) {
    resultTrait = 'Self-Discipline'
  } else if (resultTrait.indexOf('Blood') !== -1 && resultTrait.toUpperCase().indexOf('THIRSTY') !== -1) {
    resultTrait = 'Bloodthirsty'
  } else if (resultTrait.indexOf('360') !== -1 && resultTrait.toUpperCase().indexOf('ATTACK') !== -1) {
    resultTrait = '360 Attack'
  } else if (resultTrait.indexOf('One') !== -1 && resultTrait.indexOf('Armed') !== -1) {
    resultTrait = 'One-Armed'
  } else if (resultTrait.indexOf('Daddy') !== -1 && resultTrait.indexOf('rrrl') !== -1) {
    resultTrait = 'Daddy\'s Grrrrl'
  } else if (resultTrait.indexOf('Follow') !== -1 && resultTrait.indexOf('Me') !== -1) {
    resultTrait = 'Follow Me!'
  } else if (resultTrait.indexOf('Dirty') !== -1 && resultTrait.indexOf('Fight') !== -1) {
    resultTrait = 'Dirty Fighter'
  } else if (resultTrait.indexOf('Take') !== -1) {
    resultTrait = 'Take Cover!!'
  } else if (resultTrait.toUpperCase().indexOf('UNDERCOVER') !== -1) {
    resultTrait = 'Undercover'
  } else if (resultTrait.indexOf('The Voices') !== -1) {
    resultTrait = 'The Voices'
  } else if (resultTrait.indexOf('Death Marks') !== -1) {
    resultTrait = 'Deathmarks'
  } else if (resultTrait.indexOf('Persuassive') !== -1) {
    resultTrait = 'Persuasive'
  } else if (resultTrait.indexOf('Night vision') !== -1) {
    resultTrait = 'Night Vision'
  } else if (resultTrait.indexOf('Magic Tatoos') !== -1) {
    resultTrait = 'Magic Tattoos'
  } else if (resultTrait.indexOf('Let') !== -1 && resultTrait.indexOf('Go') !== -1) {
    resultTrait = 'Let\'s Go!'
  } else if (resultTrait.indexOf('Demential Laughter') !== -1) {
    resultTrait = 'Demential Laugh'
  } else if (resultTrait.indexOf('Catcher') !== -1) {
    resultTrait = 'Catcher Gear'
  } else if (resultTrait.indexOf('I know what I') !== -1) {
    resultTrait = 'I know what I\'m doing'
  } else if (resultTrait.indexOf('Save Hands') !== -1) {
    resultTrait = 'Safe Hands'
  } else if (resultTrait.indexOf('Outlaw Commander') !== -1) {
    resultTrait = 'Outlaw Field Commander'
  } else if (resultTrait.indexOf('Biker Jacket') !== -1) {
    resultTrait = 'Biker Jacket'
  } else if (resultTrait.indexOf('Get\'em') !== -1) {
    resultTrait = 'Get \'Em!'
  } else if (resultTrait.indexOf('Death or Exile') !== -1) {
    resultTrait = 'Death or Exile!'
  } else if (resultTrait.indexOf('Kill them') !== -1) {
    resultTrait = 'Kill Them!'
  } else if (resultTrait.indexOf('Subliminal Suggestion') !== -1) {
    resultTrait = 'Subliminal Suggestion'
  } else if (resultTrait.indexOf('Climbing Rope') !== -1) {
    resultTrait = 'Climbing Rope'
  } else if (resultTrait.indexOf('Control Pheremones') !== -1) {
    resultTrait = 'Control Pheromones'
  } else if (resultTrait.indexOf('Master Mind') !== -1) {
    resultTrait = 'Mastermind'
  } else if (resultTrait.indexOf('Hokey Gear') !== -1) {
    resultTrait = 'Hockey Gear'
  } else if (resultTrait.indexOf('Arcobat') !== -1) {
    resultTrait = 'Acrobat'
  } else if (resultTrait.indexOf('Schooter') !== -1) {
    resultTrait = 'Shooter'
  } else if (resultTrait.indexOf('Kill Them') !== -1) {
    resultTrait = 'Kill Them!'
  } else if (resultTrait.indexOf('Light Armored') !== -1) {
    resultTrait = 'Light Armor'
  } else if (resultTrait.indexOf('Plant Special Traits') !== -1) {
    resultTrait = 'Plant'
  } else if (resultTrait.indexOf('Criminial') !== -1) {
    resultTrait = 'Criminal'
  } else if (resultTrait.indexOf('Attorney') !== -1) {
    resultTrait = 'Attourney\'s Allegation'
  } else if (resultTrait.toUpperCase().indexOf('PUZZLES EVERYWHERE') !== -1) {
    resultTrait = 'Objectives? Puzzles Everywhere!'
  } else if (resultTrait.indexOf('Puzzlemaster') !== -1) {
    resultTrait = 'Puzzle Master'
  } else if (resultTrait.indexOf('Desesitized') !== -1) {
    resultTrait = 'Desensitized'
  } else if (resultTrait.indexOf('Fear Master') !== -1) {
    resultTrait = 'Fear Master'
  } else if (resultTrait.indexOf('Assault') !== -1) {
    resultTrait = 'Assault'
  } else if (resultTrait.indexOf('Counter') !== -1 && resultTrait.toUpperCase().indexOf('ATTACK') !== -1) {
    resultTrait = 'Counter Attack'
  }
  return resultTrait
}

let parseTraits = function( t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12 ) {
  let traitArray = [ t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12 ]
  return traitArray.reduce(function(newTraits, trait) {
    if (trait !== undefined && trait !== '-' && trait.length > 0) {
      let resultTrait = cleanupTrait(trait)
      if (resultTrait !== undefined) {
        newTraits.push(resultTrait)
      }
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
  let resultRank = rank.replace(/\"/g, '')
  if (rank.indexOf('/') !== -1 && rank.indexOf('Vehicle') === -1) {
    console.log('Looking into split rank: ' + rank)
    let splitRank = resultRank.split('/')
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
        if (crewString.indexOf(',') !== -1) {
          crewString.split(',').forEach(function(subCrew) {
            finalRank.push({
              crew: parseCrew(subCrew),
              rank: factionRanks[0].trim()
            })
          })
        } else {
          finalRank.push({
            crew: parseCrew(crewString),
            rank: factionRanks[0].trim()
          })
        }
      }
      return finalRank
    }, [])
    resultRank = resultRank.sort(function(a, b) {
      if (a.rank === 'Free Agent') {
        return 1
      }
    })
  }
  if (resultRank === 'Minion') {
    resultRank = 'Henchman'
  }
  return resultRank
}

let cleanName = function(charName) {
  let resultName = charName
  if (resultName.indexOf('"') !== -1) {
    resultName = resultName.replace(/\"/g, '')
  }
  return resultName
}

let cleanAlias = function(charAlias) {
  let resultAlias = charAlias
  if (resultAlias.indexOf('"') !== -1) {
    resultAlias = resultAlias.replace(/\"/g, '')
  }
  if (resultAlias.indexOf('SSqS') !== -1) {
    resultAlias = resultAlias.replace('SSqS', 'Suicide Squad')
  }
  return resultAlias
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
      name: cleanName(charColumns[NAME_COL]),
      alias: cleanAlias(charColumns[ALIAS_COL]),
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
      spc: parseInt(charColumns[SPECIAL_COL]),
      shop: charColumns[SHOP_DESC_COL]
    }
}

let charColumns, name, alias, skippedChars = []
let reduceInputChars = function(newChars, char) {
  charColumns = char.split('\t')
  if (charColumns[NAME_COL] === undefined || (charColumns[NAME_COL].length === 0 && charColumns[ALIAS_COL].length === 0)) {
    // console.log("Found a row to skip: " + char)
    return newChars
  }
  if (charColumns[RANK_COL].indexOf('Vehicle') !== -1) {
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
