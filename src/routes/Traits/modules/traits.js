import { allTraits } from '../../../resources/traits'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_TRAITS = 'LOAD_TRAITS'

// ------------------------------------
// Actions
// ------------------------------------
export function loadTraits () {
  return {
    type : LOAD_TRAITS
  }
}

export const actions = {
  loadTraits
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_TRAITS]    : (state, action) => {
    state.allTraits = allTraits
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function traitsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
