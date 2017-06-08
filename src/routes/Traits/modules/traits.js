import { allTraits } from '../../../resources/traits'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_TRAITS = 'LOAD_TRAITS'
export const UPDATE_FILTER = 'UPDATE_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function loadTraits () {
  return {
    type : LOAD_TRAITS
  }
}

export function updateFilter (filter = '') {
  return {
    type : UPDATE_FILTER,
    filter: filter
  }
}

export const actions = {
  loadTraits,
  updateFilter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_TRAITS]    : (state, action) => {
    state.allTraits = allTraits
    state.visibleTraits = [...allTraits]
    state.filter = ''
    return state
  },
  [UPDATE_FILTER] : (state, action) => {
    let filter = action.filter
    let lowerFilter = action.filter.toLowerCase()
    let newTraits = state.allTraits.reduce((traits, trait) => {
      if (trait.name.toLowerCase().indexOf(lowerFilter) !== -1 || trait.rule.toLowerCase().indexOf(lowerFilter) !== -1) {
        traits.push(trait)
      } else if (trait.grants.length > 0) {
        trait.grants.forEach((grantTraitName) => {
          if (grantTraitName.toLowerCase().indexOf(lowerFilter) !== -1) {
            traits.push(trait)
          }
        })
      }
      return traits
    }, [])

    return Object.assign({}, state, {
      visibleTraits: newTraits,
      filter: filter
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  allTraits: allTraits,
  visibleTraits: [...allTraits],
  filter: ''
}
export default function traitsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
