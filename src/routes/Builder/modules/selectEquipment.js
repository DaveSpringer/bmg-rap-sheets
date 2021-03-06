// Constants
export const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT'

// Actions
export function selectEquipment (equipment = { key: 'unknown', name: 'unknown' }) {
  return {
    type: SELECT_EQUIPMENT,
    equipment: equipment
  }
}

export function selectEquipmentAction (state, action) {
  let equipment = action.equipment

  // Bomb if no equipment was actually selected.
  if (equipment === undefined || equipment.name === undefined || equipment.name === 'unknown') {
    console.log('ERROR: Invalid equipment selected.')
    return state
  }

  // Filter down to the valid selected characters.
  // NOTE: I wish I understood React/Redux better. I think that temporal elements
  // should not be added to the state of the application. Yet I am going to.
  let validEquipChars = state.characters.reduce((resultChars, char) => {
    if (equipment.targetFunc !== undefined) {
      if (equipment.targetFunc(char)) {
        resultChars.push(char)
        return resultChars
      }
    } else if (typeof equipment.target === 'string') {
      if (equipment.target === char.rank ||
          char.alias.indexOf(equipment.target) > -1 ||
          char.name.indexOf(equipment.target) > -1) {
        resultChars.push(char)
        return resultChars
      }
    } else if (Array.isArray(equipment.target)) {
      equipment.target.forEach((subTarget) => {
        if (subTarget === char.rank ||
          char.alias.indexOf(subTarget) > -1 ||
          char.name.indexOf(subTarget) > -1) {
          resultChars.push(char)
          return resultChars
        }
      })
    } else {
      let key = Object.keys(equipment.target)[0]
      let value = equipment.target[key]
      if (key === 'trait') {
        char.traits.forEach((trait) => {
          if (trait === value) {
            resultChars.push(char)
            return resultChars
          }
        })
      } else if (key === 'notTrait') {
        if (char.rank !== 'Henchman') {
          return resultChars
        }
        let skipCharacter = false
        char.traits.forEach((trait) => {
          if (trait === value) {
            skipCharacter = true
          }
        })
        if (!skipCharacter) {
          resultChars.push(char)
        }
        return resultChars
      }
    }
    return resultChars
  }, [])

  return Object.assign({}, state, {
    validEquipChars: validEquipChars,
    equipment : equipment
  })
}
