import { sortCharacters } from './common'

// TODO - I have severe concerns over this method of finding a character.
// It is effectively using a non-unique key for the find.  This is bad.
const dumbCharFinder = (charArray, charAlias) => {
  return charArray[dumbCharIndexer(charArray, charAlias)]
}

const dumbCharIndexer = (charArray, charAlias) => {
  for (var i = 0; i < charArray.length; i++) {
    if (charArray[i].alias !== undefined && charArray[i].alias === charAlias) {
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
  let freeAgents = state.freeAgents

  if (char.rank === 'Leader') {
    leaders = state.leaders - 1
  } else if (char.rank === 'Sidekick') {
    sidekicks = state.sidekicks - 1
  } else if (char.rank === 'Free Agent') {
    freeAgents = state.freeAgents - 1
  }

  let newAvailChars = [...state.availableCharacters, char]
  let newCharacters = [...state.characters]
  newCharacters.splice(index, 1)
  let newHiddenChars = [...state.hiddenCharacters]

  if (state.followRules) {
    // Struggling with the implementation of the algorithm here.
    // Is it best to iterate over every element and so some work to determine
    // what should happen to the characte, then have additional functions that do
    // the actual movement?  Or, have a bunch of different iterators?
    // Going with the first approach.

    // Using a classic, ugly iterator for more control as well. This is less
    // "functional" than it could be.
    newHiddenChars = newHiddenChars.reduce((result, curChar) => {
      if (curChar.name === char.name && curChar.alias === char.alias) {
        return result
      }
      if (curChar.name === char.name && curChar.name !== 'Unknown') {
        newAvailChars.push(curChar)
        return result
      }
      if (leaders === 0) {
        if (curChar.rank === 'Leader') {
          newAvailChars.push(curChar)
          return result
        } else if (curChar.rank === 'Sidekick' && sidekicks === 0) {
          newAvailChars.push(curChar)
          return result
        }
      }
      if (sidekicks !== 2) {
        if (curChar.rank === 'Sidekick') {
          newAvailChars.push(curChar)
          return result
        }
      }
      result.push(curChar)
      return result
    }, [])
  }

  return createFinalState(state, newCharacters, newAvailChars, newHiddenChars, leaders, sidekicks, freeAgents)
}

const addCharacter = (state, action) => {
  let char = dumbCharFinder(state.availableCharacters, action.characterAlias)
  if (char === undefined) {
    console.log('Failed to find the provided character: ' + action.characterAlias)
    return state
  }

  let leaders = state.leaders
  let sidekicks = state.sidekicks
  let freeAgents = state.freeAgents

  if (char.rank === 'Leader') {
    leaders = state.leaders + 1
  } else if (char.rank === 'Sidekick') {
    sidekicks = state.sidekicks + 1
  } else if (char.rank === 'Free Agent') {
    freeAgents = state.freeAgents + 1
  }

  let newCharacters = [...state.characters, char]
  let newAvailChars = [...state.availableCharacters]
  let newHiddenChars = [...state.hiddenCharacters]

  if (state.followRules) {
    // Struggling with the implementation of the algorithm here.
    // Is it best to iterate over every element and so some work to determine
    // what should happen to the characte, then have additional functions that do
    // the actual movement?  Or, have a bunch of different iterators?
    // Going with the first approach.

    // Using a classic, ugly iterator for more control as well. This is less
    // "functional" than it could be.
    newAvailChars = newAvailChars.reduce((result, curChar) => {
      if (curChar.name === char.name && char.alias === curChar.alias) {
        // Just skip this case.
        return result
      }
      if (curChar.name === char.name
        && curChar.name !== 'Unknown'
        && curChar.name !== 'Classified') {
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
  } else {
    // Remove the selected from the availableCharacters.
    let location = dumbCharIndexer(state.availableCharacters, action.characterAlias)

    newAvailChars.splice(location, 1)
  }
  return createFinalState(state, newCharacters, newAvailChars, newHiddenChars, leaders, sidekicks, freeAgents)
}

const createFinalState = (
  state,
  newCharacters,
  newAvailChars,
  hiddenCharacters,
  leaders,
  sidekicks,
  freeAgents
) => {
  let crewCode = newCharacters.reduce((curStr, char) => { return curStr + '+' + char.key }, state.crewId + '-')
  newAvailChars.sort(sortCharacters)
  newCharacters.sort(sortCharacters)
  let newRep = newCharacters.reduce((repSum, character) => repSum + character.reputation, 0)
  let newFunding = newCharacters.reduce((fundSum, character) => fundSum + character.funding, 0)
  return Object.assign({}, state, {
    characters : newCharacters,
    availableCharacters : newAvailChars,
    reputation : newRep,
    funding : newFunding,
    hiddenCharacters : hiddenCharacters,
    leaders : leaders,
    sidekicks : sidekicks,
    freeAgents : freeAgents,
    crewCode: crewCode
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
      return addCharacter(interimState, { characterAlias : character.alias })
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
  let char = dumbCharFinder(state.characters, action.characterAlias)

  if (char !== undefined) {
    return removeCharacter(state, action, char)
  } else {
    // The selected character is in the available characters.
    return addCharacter(state, action)
  }
}
