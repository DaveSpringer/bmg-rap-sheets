import { allStrategies } from '../../../resources/strategies'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_STRATEGIES = 'LOAD_STRATEGIES'

// ------------------------------------
// Actions
// ------------------------------------
export function loadStrategies () {
  return {
    type : LOAD_STRATEGIES
  }
}

export const actions = {
  loadStrategies
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_STRATEGIES]    : (state, action) => {
    state.allStrategies = allStrategies
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function strategiesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
