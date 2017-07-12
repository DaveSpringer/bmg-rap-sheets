// Constants
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const ADD_AVAILABLE_CHARACTER = 'ADD_AVAILABLE_CHARACTER'
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'
export const REMOVE_AVAILABLE_CHARACTER = 'REMOVE_AVAILABLE_CHARACTER'

// Actions
export const addCharacterAction = (state, action) => {
  let resultState = state
  if (action.actions !== undefined && action.actions.length > 0) {
    let newCharacters = action.actions.reduce((poppedChars, charAction) => {
      let resultChars = populateChar(charAction, state.allCharacters)
      let finalChars = poppedChars
      if (resultChars !== undefined) {
        finalChars = poppedChars.concat(resultChars)
      }
      return finalChars
    }, [])
    if (newCharacters.length > 0) {
      resultState = Object.assign({}, resultState, {
        characters : [...state.characters, ...newCharacters]
      })
    } else {
      console.log('Unexpected failure to populate with additional characters.')
    }
  }
  return resultState
}

export const addAvailableCharacterAction = (state, action) => {
  let resultState = state
  if (action.actions !== undefined && action.actions.length > 0) {
    let newCharacters = action.actions.reduce((poppedChars, charAction) => {
      let resultChars = populateChar(charAction, state.allCharacters)
      let finalChars = poppedChars
      if (resultChars !== undefined) {
        finalChars = poppedChars.concat(resultChars)
      }
      return finalChars
    }, [])
    if (newCharacters.length > 0) {
      resultState = Object.assign({}, resultState, {
        availableCharacters : [...state.availableCharacters, ...newCharacters]
      })
    } else {
      console.log('Unexpected failure to populate with additional available characters.')
    }
  }
  return resultState
}

export const removeCharacterAction = (state, action) => {
  let resultState = state
  if (action.actions !== undefined && action.actions.length > 0) {
    let newAvailChars = [...state.availableCharacters]
    let newChars = [...state.characters]
    action.actions.forEach((charAction) => {
      newAvailChars = removeCharFromArray(charAction, newAvailChars)
      newChars = removeCharFromArray(charAction, newChars)
    })

    resultState = Object.assign({}, state, {
      characters: newChars,
      availableCharacters: newAvailChars
    })
  }
  return resultState
}

export const removeAvailableCharacterAction = (state, action) => {
  let resultState = state
  if (action.actions !== undefined && action.actions.length > 0) {
    let newAvailChars = [...state.availableCharacters]
    let newChars = [...state.characters]
    action.actions.forEach((charAction) => {
      newAvailChars = removeCharFromArray(charAction, newAvailChars)
      newChars = removeCharFromArray(charAction, newChars)
    })

    resultState = Object.assign({}, state, {
      characters: newChars,
      availableCharacters: newAvailChars
    })
  }
  return resultState
}

// Common functions
const populateChar = (charAction, allCharacters) => {
  if (charAction.key !== undefined) {
    // Find the character to add.
    let foundChar = allCharacters.find(findCharByKey(charAction.key))

    if (foundChar === undefined) {
      console.log('Failed to find character for charAction: ' + JSON.stringify(charAction))
    }

    let resultChar
    if (charAction.props !== undefined) {
      resultChar = Object.assign({}, foundChar, charAction.props)
    } else {
      // Default to adding a new character as a Free Agent unless the props override.
      resultChar = Object.assign({}, foundChar, { rank: 'Free Agent' })
    }
    return [ resultChar ]
  } else if (charAction.filter !== undefined) {
    let foundChars = allCharacters.filter(charAction.filter)

    if (charAction.props !== undefined) {
      foundChars = foundChars.map((char) => Object.assign({}, char, charAction.props))
    } else {
      foundChars = foundChars.map((char) => Object.assign({}, char, { rank: 'Free Agent' }))
    }
    return foundChars
  }
}

const removeCharFromArray = (charAction, charArray) => {
  let resultArray = charArray

  if (charAction.key !== undefined) {
    let foundIndex = resultArray.findIndex((findChar) => findChar.key === charAction.key)
    if (foundIndex !== -1) {
      resultArray.splice(foundIndex, 1)
    }
  } else if (charAction.filter !== undefined) {
    resultArray = resultArray.filter((char) => !charAction.filter(char))
  }
  return resultArray
}

// Curry to allow the key to be provided as an argument.
const findCharByKey = (key) => (char) => char.key === key

// Action Handlers
const ACTION_HANDLERS = {
  [ADD_CHARACTER] : (state, action) => {
    return addCharacterAction(state, action)
  },
  [ADD_AVAILABLE_CHARACTER] : (state, action) => {
    return addAvailableCharacterAction(state, action)
  },
  [REMOVE_CHARACTER] : (state, action) => {
    return removeCharacterAction(state, action)
  },
  [REMOVE_AVAILABLE_CHARACTER] : (state, action) => {
    return removeAvailableCharacterAction(state, action)
  }
}

// Default reducer.
export default function characterRulesReducer (state = {}, action) {
  let result = state
  const handler = ACTION_HANDLERS[action.type]
  if (handler) {
    result = handler(state, action)
  }
  return result
}
