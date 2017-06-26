// Constants
export const ASSIGN_EQUIPMENT = 'ASSIGN_EQUIPMENT'

// Actions
export function assignEquipment (equipment = { key: 'unknown', name: 'unknown' }, characterKey = '') {
  return {
    type: ASSIGN_EQUIPMENT,
    equipment: equipment,
    characterKey: characterKey
  }
}

export function assignEquipmentAction (state, action) {
  let equipment = action.equipment
  let characterKey = action.characterKey

  // Bomb if no equipment was actually assigned.
  if (equipment === undefined || equipment.name === undefined || equipment.name === 'unknown') {
    console.log('ERROR: Invalid equipment assigned.')
    return state
  }

  // Bomb if no character was selected.
  if (characterKey === undefined || characterKey.length === 0) {
    console.log('ERROR: Invalid character key provided.')
  }

  let newEquipment = [...state.availableEquipment]
  newEquipment.splice(state.availableEquipment.indexOf(equipment), 1)

  let foundChar = state.validEquipChars.find((char) => {
    return (char.key === characterKey)
  })

  if (foundChar === undefined) {
    console.log('ERROR: Selected character is no longer in valid chars.')
    return state
  }

  let newCharacters = [...state.characters]

  let selectedChar = newCharacters.find((char) => {
    return (char.key === characterKey)
  })

  if (selectedChar === undefined) {
    console.log('ERROR: A valid character is no longer in the selected characters.')
    return state
  }

  if (foundChar.equipment === undefined) {
    foundChar.equipment = [ equipment ]
  } else {
    foundChar.equipment.push(equipment)
  }

  return Object.assign({}, state, {
    validEquipChars: [],
    equipment : [...state.equipment, equipment],
    availableEquipment : newEquipment,
    characters: newCharacters
  })
}
