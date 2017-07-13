import { sortCharacters } from './common'
import { default as characterRulesReducer } from './characterRules'

// TODO - I have severe concerns over this method of finding a character.
// It is effectively using a non-unique key for the find.  This is bad.
const dumbCharFinder = (charArray, charKey) => {
  return charArray[dumbCharIndexer(charArray, charKey)]
}

const dumbCharIndexer = (charArray, charKey) => {
  for (var i = 0; i < charArray.length; i++) {
    if (charArray[i].key !== undefined && charArray[i].key === charKey) {
      return i
    }
  }
}

const removeCharacter = (state, action, char) => {
  // This is the case where the current character is in the selected
  // characters.
  let index = state.characters.indexOf(char)
  let leaders = state.leaders
  let sidekicks = state.sidekicks

  if (char.rank === 'Leader') {
    leaders = state.leaders - 1
  } else if (char.rank === 'Sidekick') {
    sidekicks = state.sidekicks - 1
  }

  let newAvailEquip
  if (char.equipment !== undefined) {
    newAvailEquip = [...state.availableEquipment, ...char.equipment]
    char.equipment = undefined
  } else {
    newAvailEquip = [...state.availableEquipment]
  }
  newAvailEquip = newAvailEquip.reduce((equipList, equip) => {
      if (equip.requires !== undefined) {
        if (typeof equip.requires === 'string') {
          if (char.name.indexOf(equip.requires) !== -1 || char.alias.indexOf(equip.requires) !== -1) {
            return equipList
          }
        } else {
          console.log('TODO!!!!!!!!!!!!!!!!!!!!')
        }
      }
      equipList.push(equip)
      return equipList
  }, [])

  let newAvailChars = [...state.availableCharacters, char]
  let newCharacters = [...state.characters]
  newCharacters.splice(index, 1)
  let newHiddenChars = [...state.hiddenCharacters]
  let intermediateState = state

  newCharacters.forEach((newChar) => {
    if (newChar.equipment !== undefined) {
      newChar.equipment = newChar.equipment.reduce((equipList, equip) => {
        debugger
        if (char.name.indexOf(equip.requires) === -1 && char.alias.indexOf(equip.requires) === -1) {
          equipList.push(equip)
        }
        return equipList
      }, [])
    }
    if (newChar.equipment !== undefined && newChar.equipment.length === 0) {
      newChar.equipment = undefined
    }
  })

  if (state.followRules) {
    // Struggling with the implementation of the algorithm here.
    // Is it best to iterate over every element and so some work to determine
    // what should happen to the characte, then have additional functions that do
    // the actual movement?  Or, have a bunch of different iterators?
    // Going with the first approach.

    // First, invoke the character rules.
    if (char.onRemove !== undefined) {
      intermediateState = Object.assign({}, state, {
        availableCharacters: newAvailChars,
        characters: newCharacters
      })
      intermediateState = characterRulesReducer(intermediateState, char.onRemove)
      newAvailChars = intermediateState.availableCharacters
      newCharacters = intermediateState.characters
    }

    // Using a classic, ugly iterator for more control as well. This is less
    // "functional" than it could be.
    newHiddenChars = newHiddenChars.reduce((result, curChar) => {
      if (curChar.key === char.key) {
        return result
      }
      if (curChar.name === char.name && curChar.name !== 'Unknown') {
        newAvailChars.push(curChar)
        return result
      }
      if (leaders === 0 && sidekicks !== 2) {
        if (curChar.rank === 'Leader') {
          newAvailChars.push(curChar)
          return result
        } else if (curChar.rank === 'Sidekick' && sidekicks === 0) {
          newAvailChars.push(curChar)
          return result
        }
      }
      if (sidekicks !== 2 && leaders !== 1) {
        if (curChar.rank === 'Sidekick') {
          newAvailChars.push(curChar)
          return result
        }
      }
      result.push(curChar)
      return result
    }, [])
  }

  return createFinalState(intermediateState, newCharacters, newAvailChars, newHiddenChars, newAvailEquip)
}

const addCharacter = (state, action) => {
  let char = dumbCharFinder(state.availableCharacters, action.characterKey)
  if (char === undefined) {
    console.log('Failed to find the provided character: ' + action.characterKey)
    return state
  }

  let leaders = state.leaders
  let sidekicks = state.sidekicks

  if (char.rank === 'Leader') {
    leaders = state.leaders + 1
  } else if (char.rank === 'Sidekick') {
    sidekicks = state.sidekicks + 1
  }

  let newCharacters = [...state.characters, char]
  let newAvailChars = [...state.availableCharacters]
  let newHiddenChars = [...state.hiddenCharacters]
  let newAvailEquip = [...state.availableEquipment]
  let intermediateState = state

  if (state.followRules) {
    // Struggling with the implementation of the algorithm here.
    // Is it best to iterate over every element and so some work to determine
    // what should happen to the characte, then have additional functions that do
    // the actual movement?  Or, have a bunch of different iterators?
    // Going with the first approach.

    // Perform anything that needs to be done on add.
    if (char.onAdd !== undefined) {
      intermediateState = Object.assign({}, state, {
        characters: newCharacters
      })
      intermediateState = characterRulesReducer(intermediateState, char.onAdd)
      newAvailChars = intermediateState.availableCharacters
      newCharacters = intermediateState.characters
    }

    // Using a classic, ugly iterator for more control as well. This is less
    // "functional" than it could be.
    newAvailChars = newAvailChars.reduce((result, curChar) => {
      if (char.key === curChar.key) {
        // Just skip this case.
        return result
      }
      if (curChar.name === char.name &&
        curChar.name !== 'Unknown' &&
        curChar.name !== 'Classified' &&
        !curChar.multiples) {
        newHiddenChars.push(curChar)
        return result
      }
      if (leaders === 1) {
        if (curChar.rank === 'Leader') {
          newHiddenChars.push(curChar)
          return result
        } else if (curChar.rank === 'Sidekick' && sidekicks > 0) {
          newHiddenChars.push(curChar)
          return result
        }
      }
      if (sidekicks === 2) {
        if (curChar.rank === 'Sidekick') {
          newHiddenChars.push(curChar)
          return result
        }
        if (curChar.rank === 'Leader') {
          newHiddenChars.push(curChar)
          return result
        }
      }
      result.push(curChar)
      return result
    }, [])

    let extraEquip = state.crewEquipment.reduce((resultEquips, equip) => {
      if (equip.requires !== undefined) {
        if (typeof equip.requires === 'string') {
          if (char.name.indexOf(equip.requires) !== -1 || char.alias.indexOf(equip.requires) !== -1) {
            resultEquips.push(equip)
          }
        } else {
          console.log('TODO!!!!!!!!!!!!!!!!!!!!')
        }
      }
      return resultEquips
    }, [])
    newAvailEquip = [...state.availableEquipment, ...extraEquip]
  } else {
    // Remove the selected from the availableCharacters.
    let location = dumbCharIndexer(state.availableCharacters, action.characterKey)

    newAvailChars.splice(location, 1)
  }
  return createFinalState(intermediateState, newCharacters, newAvailChars, newHiddenChars, newAvailEquip)
}

const createFinalState = (
  state,
  newCharacters,
  newAvailChars,
  hiddenCharacters,
  newAvailEquip
) => {
  let crewCode = newCharacters.reduce((curStr, char) => { return curStr + '+' + char.key }, state.crewId)
  newAvailChars.sort(sortCharacters)
  newCharacters.sort(sortCharacters)
  let newRep = newCharacters.reduce((repSum, character) => {
    let equipSum = 0
    if (character.equipment !== undefined) {
      equipSum = character.equipment.reduce((repSum, equip) => {
        return repSum + (equip.rep ? equip.rep : 0)
      }, 0)
    }
    return repSum + character.reputation + equipSum
  }, 0)
  let newFunding = newCharacters.reduce((fundSum, character) => {
    let equipSum = 0
    if (character.equipment !== undefined) {
      equipSum = character.equipment.reduce((fundSum, equip) => {
        return fundSum + (equip.funding ? equip.funding : 0)
      }, 0)
    }
    return fundSum + character.funding + equipSum
  }, 0)
  let countRank = (rank) => (rankCount, char) => {
    if (rank === char.rank) {
      return rankCount + 1
    }
    return rankCount
  }
  return Object.assign({}, state, {
    characters : newCharacters,
    availableCharacters : newAvailChars,
    reputation : newRep,
    funding : newFunding,
    hiddenCharacters : hiddenCharacters,
    leaders : newCharacters.reduce(countRank('Leader'), 0),
    sidekicks : newCharacters.reduce(countRank('Sidekick'), 0),
    freeAgents : newCharacters.reduce(countRank('Free Agent'), 0),
    crewCode: crewCode,
    availableEquipment: newAvailEquip
  })
}

export const toggleFollowRules = (state, action) => {
  let newHiddenChars = state.hiddenCharacters
  let newAvailChars = state.availableCharacters

  if (action.followRules) {
    if (state.leaders > 1 ||
        (state.leaders === 1 && state.sidekicks > 1) ||
        state.sidekicks > 2) {
      console.log('Failed to flip to valid rules.')
      return state
    }

    let oldCharacters = [...state.characters]

    let resetState = Object.assign({}, state, {
      characters : [],
      availableCharacters : [...state.availableCharacters].concat(state.characters),
      reputation : 0,
      funding : 0,
      hiddenCharacters : [],
      leaders : 0,
      sidekicks : 0,
      freeAgents : 0,
      followRules: action.followRules
    })

    let resultState = oldCharacters.reduce((interimState, character) => {
      console.log('Current counts. Leaders: ' + interimState.leaders + '. sidekicks: ' + interimState.sidekicks + '. Free Agents: ' + interimState.freeAgents)
      return addCharacter(interimState, { characterKey : character.key })
    }, resetState)

    return resultState
  } else {
    newAvailChars = newAvailChars.concat(newHiddenChars)
    newAvailChars.sort(sortCharacters)
    newHiddenChars = []
  }
  return Object.assign({}, state, {
    hiddenCharacters : newHiddenChars,
    availableCharacters : newAvailChars,
    followRules: action.followRules
  })
}

export const characterSelected = (state, action) => {
  let char = dumbCharFinder(state.characters, action.characterKey)

  if (char !== undefined) {
    return removeCharacter(state, action, char)
  } else {
    // The selected character is in the available characters.
    return addCharacter(state, action)
  }
}
