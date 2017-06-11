import { allTraits } from '../../../resources/traits'
import { allCrews } from '../../../resources/crews'
import { loadedCharacters as allCharacters } from '../../../resources/characters'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_TRAITS = 'LOAD_TRAITS'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const SELECT_CREW = 'SELECT_CREW'

export const DEFAULT_CREW = { id: 'al', name: 'All' }
export const ALL_FREE_AGENTS = { id: '*', name: 'Free Agents' }

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

export function selectCrew (crew = DEFAULT_CREW) {
  return {
    type : SELECT_CREW,
    crew : crew
  }
}

export const actions = {
  loadTraits,
  updateFilter,
  selectCrew
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_TRAITS]    : (state, action) => {
    let fullCrews = [ DEFAULT_CREW, ALL_FREE_AGENTS, ...allCrews ]
    return Object.assign({}, state, {
      allTraits : allTraits,
      visibleTraits : [...allTraits],
      filter : '',
      allCrews : fullCrews,
      allCharacters : allCharacters
    })
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
  },
  [SELECT_CREW] : (state, action) => {
    let characterList = state.allCharacters
    if (action.crew.id !== 'al') {
      characterList = state.allCharacters.reduce((resultChars, char) => {
        if (char.crews.indexOf(action.crew.id) !== -1) {
          resultChars.push(char)
        }
        return resultChars
      }, [])

      let findTrait = (traitName) => {
        let retrievedTrait = {
          name : traitName,
          phase : 'Unknown',
          rule : 'Unknown',
          page : 'Unknown',
          cost : ''
        }
        // Coward's Reward is a problematic trait. This is a hack. I wish I had a better solution.
        if (traitName.indexOf('Coward') !== -1) {
          retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === 'Coward\'s Reward'))
        } else {
          retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === traitName))
        }
        return retrievedTrait
      }

      let sortTraits = (a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      }

      // Trying to be crafty and use the Object.values method to get all of
      // the traits while avoiding dupes.
      let traitObject = {}
      characterList.forEach((char) => {
        char.traits.forEach((trait) => {
          if (typeof trait === 'string') {
            if (traitObject[trait] === undefined) {
              traitObject[trait] = findTrait(trait)
            }
          } else if (traitObject[trait.name] === undefined) {
            traitObject[trait.name] = findTrait(trait.name)
          }
        })
      })

      return Object.assign({}, state, {
        filter: '',
        visibleTraits : Object.values(traitObject).sort(sortTraits),
        crew: action.crew
      })
    } else {
      return Object.assign({}, state, {
        filter: '',
        visibleTraits: allTraits,
        crew: action.crew
      })
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  allTraits: allTraits,
  visibleTraits: [...allTraits],
  allCrews: [DEFAULT_CREW, ALL_FREE_AGENTS, ...allCrews],
  filter: '',
  crew: DEFAULT_CREW,
  allCharacters: allCharacters
}
export default function traitsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
