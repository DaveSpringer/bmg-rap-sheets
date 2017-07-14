import { allStrategies } from '../../../resources/strategies'
import { allCrews } from '../../../resources/crews'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_STRATEGIES = 'LOAD_STRATEGIES'
export const SELECT_CREW = 'SELECT_CREW'
export const UPDATE_FILTER = 'UPDATE_FILTER'

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

export function updateFilter (filter = '') {
  return {
    type: UPDATE_FILTER,
    filter: filter
  }
}

export const actions = {
  loadStrategies,
  selectCrew,
  updateFilter
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
  },
  [UPDATE_FILTER]: (state, action) => {
    let filter = action.filter
    let lowerFilter = filter.toLowerCase()

    let newStrategies = state.allStrategies.reduce((resultStrategies, strategy) => {
      if (strategy.name.toLowerCase().indexOf(lowerFilter) !== -1 || strategy.text.toLowerCase().indexOf(lowerFilter) !== -1) {
        resultStrategies.push(strategy)
      }
      return resultStrategies
    }, [])

    let searchParams = new URLSearchParams()
    searchParams.append('filter', filter)
    history.pushState({}, '', location.origin + location.pathname + '?' + searchParams)

    return Object.assign({}, state, {
      strategies: newStrategies,
      crew: DEFAULT_CREW
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
