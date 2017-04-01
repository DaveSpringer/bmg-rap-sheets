const dumbCharFinder = (charArray, charAlias) => {
  for (var i = 0; i < charArray.length; i++) {
    console.log(`Checking ${charArray[i].alias} vs ${charAlias}`)
    if (charArray[i].alias !== undefined && charArray[i].alias === charAlias) {
      return charArray[i]
    }
  }
}

const removeCharacter = (state, action, char) => {
  // This is the case where the current character is in the selected
  // characters.
  let index = state.characters.indexOf(char)
  let leaders = state.leaders, sidekicks = state.sidekicks, freeAgents = state.freeAgents

  if (char.rank === 'Leader') {
    leaders = state.leaders - 1
  } else if (char.rank === 'Sidekick') {
    sidekicks = state.sidekicks - 1
  } else if (char.rank === 'Free Agent') {
    freeAgents = state.freeAgents - 1
  }

  let newCharacters = [...state.characters.slice(0, index), ...state.characters.slice(index + 1)]
  let hiddenCharactersToAdd = state.hiddenCharacters.reduce((repopCharacters, character) => {
    let sameName = character.name === char.name
    let repopLeader = char.rank === 'Leader' && (character.rank === 'Leader' || (character.rank === 'Sidekick' && sidekicks === 1))
    let repopSidekick = char.rank === 'Sidekick' && (character.rank === 'Sidekick' || (sidekicks === 1 && character.rank === 'Leader'))
    if (sameName || repopLeader || repopSidekick) {
      repopCharacters.push(character)
    }
    debugger
    return repopCharacters
  }, [])
  let newAvailChars = [...state.availableCharacters, char, ...hiddenCharactersToAdd]
  let hiddenCharacters = state.hiddenCharacters.reduce((characters, character) => {
    if (hiddenCharactersToAdd.find((findChar) => character.alias === findChar.alias) === undefined) {
      return characters.push(character)
    } else {
      return characters
    }
  }, [])
  return createFinalState(state, newCharacters, newAvailChars, hiddenCharacters, leaders, sidekicks, freeAgents)
}

const addCharacter = (state, action) => {
  let char = dumbCharFinder(state.availableCharacters, action.characterAlias)
  if (char === undefined) {
    console.log("Failed to find the provided character: " + action.characterAlias)
    return state;
  }

  let index = state.availableCharacters.indexOf(char)
  let leaders = state.leaders, sidekicks = state.sidekicks, freeAgents = state.freeAgents

  if (char.rank === 'Leader') {
    leaders = state.leaders + 1
  } else if (char.rank === 'Sidekick') {
    sidekicks = state.sidekicks + 1
  } else if (char.rank === 'Free Agent') {
    freeAgents = state.freeAgents + 1
  }

  let newCharacters = [...state.characters, char]
  // TODO: Determine if this is changing the state tree...
  let newAvailChars = state.availableCharacters.reduce((newAvailCharacters, character) => {
    let sameName = character.name === char.name && character.alias === char.alias
    let leaderHide = char.rank === 'Leader' && (character.rank === 'Leader' || (character.rank === 'Sidekick' && sidekicks === 1))
    let sidekickHide = char.rank === 'Sidekick' && ((character.rank === 'Sidekick' && leaders + sidekicks === 2 || (character.rank === 'Leader' && sidekicks == 2)))
    if (!sameName && !leaderHide && !sidekickHide) {
      newAvailCharacters.push(character)
    }
    return newAvailCharacters
  }, [])
  let charactersToHide = state.availableCharacters.reduce((hidingCharacters, character) => {
    let sameName = character.name === char.name && character.alias !== char.alias
    let leaderHide = char.rank === 'Leader' && (character.rank === 'Leader' || (character.rank === 'Sidekick' && sidekicks === 1))
    let sidekickHide = char.rank === 'Sidekick' && ((character.rank === 'Sidekick' && leaders + sidekicks === 2) || (character.rank === 'Leader' && sidekicks == 2))
    if (character.alias !== char.alias && (sameName || leaderHide || sidekickHide)) {
      hidingCharacters.push(character)
    }
    return hidingCharacters
  }, [])
  let hiddenCharacters = [...state.hiddenCharacters, ...charactersToHide]
  return createFinalState(state, newCharacters, newAvailChars, hiddenCharacters, leaders, sidekicks, freeAgents)
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
    freeAgents : freeAgents
  })
}

const characterSelected = (state, action) => {
  let newCharacters = state.characters
  let newAvailChars = state.availableCharacters
  let index = undefined
  let hiddenCharacters = []
  let leaders = state.leaders;
  let sidekicks = state.sidekicks;
  let freeAgents = state.freeAgents;

  const charFinder = (character) => {
    return character !== undefined && action !== undefined && character.alias === action.characterAlias
  }

  let char = dumbCharFinder(state.characters, action.characterAlias)

  if (char !== undefined) {
    return removeCharacter(state, action, char)
  } else {
    // The selected character is in the available characters.
    return addCharacter(state, action)
  }
  return state
}



export default characterSelected
