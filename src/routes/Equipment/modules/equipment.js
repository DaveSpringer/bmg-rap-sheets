import { allEquipment } from '../../../resources/equipment'
import { allCrews } from '../../../resources/crews'
import { allTraits } from '../../../resources/traits'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_EQUIPMENT = 'LOAD_EQUIPMENT'
export const SELECT_CREW = 'SELECT_CREW'

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

export const actions = {
  loadEquipment,
  selectCrew
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_EQUIPMENT]    : (state, action) => {
    let fullCrews = [ DEFAULT_CREW, ...allCrews ]
    return Object.assign({}, state, {
      allEquipment: allEquipment,
      equipment: allEquipment,
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
