import { allEquipment } from '../../../resources/equipment'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_EQUIPMENT = 'LOAD_EQUIPMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function loadEquipment () {
  return {
    type : LOAD_EQUIPMENT
  }
}

export const actions = {
  loadEquipment
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_EQUIPMENT]    : (state, action) => {
    state.allEquipment = allEquipment
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function equipmentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
