import { allEquipment } from '../../../resources/equipment'
import { allCrews } from '../../../resources/crews'
import { allTraits } from '../../../resources/traits'
import { populateEquipment } from '../../../modules/loadResources'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_EQUIPMENT = 'LOAD_EQUIPMENT'
export const SELECT_CREW = 'SELECT_CREW'
export const UPDATE_FILTER = 'UPDATE_FILTER'

export const DEFAULT_CREW = { id: 'al', name: 'All' }

// ------------------------------------
// Actions
// ------------------------------------
export function loadEquipment () {
  return {
    type : LOAD_EQUIPMENT
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
  loadEquipment,
  selectCrew,
  updateFilter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_EQUIPMENT]    : (state, action) => {
    let fullCrews = [ DEFAULT_CREW, ...allCrews ]
    let poppedEquipment = allEquipment.reduce(populateEquipment, [])
    return Object.assign({}, state, {
      allEquipment: allEquipment,
      equipment: poppedEquipment,
      allCrews: fullCrews,
      crew: fullCrews[0],
      allTraits: allTraits
    })
  },
  [SELECT_CREW]: (state, action) => {
    let resultEquipment
    if (action.crew.id === DEFAULT_CREW.id) {
      resultEquipment = [...allEquipment]
    } else {
      resultEquipment = allEquipment.reduce((equips, equip) => {
        if (equip.crew === action.crew.id) {
          equips.push(equip)
        }
        return equips
      }, [])
    }
    return Object.assign({}, state, {
      equipment: resultEquipment,
      crew: action.crew
    })
  },
  [UPDATE_FILTER]: (state, action) => {
    let filter = action.filter
    let lowerFilter = filter.toLowerCase()

    let newEquipment = state.allEquipment.reduce((resultEquipment, equip) => {
      if (equip.name.toLowerCase().indexOf(lowerFilter) !== -1 || equip.rule.toLowerCase().indexOf(lowerFilter) !== -1) {
        resultEquipment.push(equip)
      }
      return resultEquipment
    }, [])

    let searchParams = new URLSearchParams()
    searchParams.append('filter', filter)
    history.pushState({}, '', location.origin + location.pathname + '?' + searchParams)

    return Object.assign({}, state, {
      equipment: newEquipment,
      crew: DEFAULT_CREW
    })
  }
}

// ------------------------------------
// Reducer
// --------------
const initialState = {
  allEquipment: allEquipment,
  equipment: allEquipment,
  allCrews: [ DEFAULT_CREW, ...allCrews ],
  crew: DEFAULT_CREW,
  allTraits: allTraits
}
export default function equipmentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
