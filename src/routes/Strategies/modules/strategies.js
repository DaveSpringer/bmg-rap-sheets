import { allStrategies } from '../../../resources/strategies'
import { allCrews } from '../../../resources/crews'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_STRATEGIES = 'LOAD_STRATEGIES'
export const SELECT_CREW = 'SELECT_CREW'

export const DEFAULT_CREW = { id: 'al', name: 'All' }

// ------------------------------------
// Actions
// ------------------------------------
export function loadStrategies () {
  return {
    type : LOAD_STRATEGIES
  }
}

export function selectCrew (crew = DEFAULT_CREW) {
  return {
    type : SELECT_CREW,
    crew : crew
  }
}

export const actions = {
  loadStrategies,
  selectCrew
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_STRATEGIES]    : (state, action) => {
    let fullCrews = [ DEFAULT_CREW, ...allCrews ]
    return Object.assign({}, state, {
      allStrategies: allStrategies,
      strategies: allStrategies,
      allCrews: fullCrews,
      crew: fullCrews[0]
    })
  },
  [SELECT_CREW] : (state, action) => {
    let crew = action.crew
    if (typeof (crew) === 'string') {
      if (crew.length === 0) {
        console.log('Invalid crew string provided. Length was 0.')
        return state
      }
      try {
        crew = JSON.parse(crew)
      } catch (e) {
        console.log('Invalid crew string provided. Error: ' + e.msg)
        console.log(e)
        return state
      }
    }
    if (crew === undefined) {
      crew = DEFAULT_CREW
    }
    let crewId = crew.id
    let resultStrategies
    if (crewId !== 'al') {
      resultStrategies = state.allStrategies.reduce((result, strat) => {
        if (strat.crews !== undefined) {
          if (strat.crews.indexOf(crewId) !== -1) {
            result.push(strat)
          }
        } else {
          result.push(strat)
        }
        return result
      }, [])
    } else {
      resultStrategies = [...state.allStrategies]
    }
    return Object.assign({}, state, {
      crew: crew,
      strategies: resultStrategies
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  allStrategies: allStrategies,
  strategies: allStrategies,
  allCrews: [ DEFAULT_CREW, ...allCrews ],
  crew: DEFAULT_CREW
}
export default function strategiesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
