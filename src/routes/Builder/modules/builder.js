import characterSelected from './crewRulesEngine'
import loadAllResources from './loadResources'
import { sortCharacters } from './common'

// Constants
export const SELECT_CREW_UNCONFIRMED = 'SELECT_CREW_UNCONFIRMED'
export const SELECT_CREW = 'SELECT_CREW'
export const SELECT_CHARACTER = 'SELECT_CHARACTER'
export const LOAD_RESOURCES = 'LOAD_RESOURCES'
export const ADD_ALL_CHARACTERS = 'ADD_ALL_CHARACTERS'

// Actions

/* The SELECT_CREW reducer is used to do choose which crew the user currently
has selected. This can be destructive as if there is a current crew
selected with characters selected inside of it, they will be wiped out. */
export function selectCrew (selectedCrew = 'default') {
  return {
    type: SELECT_CREW,
    crew: selectedCrew
  }
}

/* The SELECT_CHARACTER reducer is used to add or remove a character from the
currently built band. */
export function selectCharacter (characterAlias = 'default') {
  console.log('Selected character: ' + characterAlias)
  return {
    type: SELECT_CHARACTER,
    characterAlias: characterAlias
  }
}

export function loadResources () {
  return {
    type: LOAD_RESOURCES
  }
}

export function addAllCharacters () {
  return {
    type: ADD_ALL_CHARACTERS
  }
}

export const actions = {
  selectCrew,
  selectCharacter,
  loadResources
}

export const selectCrewAction = (state, action) => {
  let crewName = action.crew.name
  let charFilter = (characters, character) => {
    if (character.crews.includes(action.crew.id) ||
    (character.crews.includes('*') && !character.hates.includes(action.crew.id))) {
      if (typeof (character.rank) === 'object') {
        characters.push(
          Object.assign({}, character, {
            rank : character.rank.find((rank) => (rank.crew === action.crew.id || rank.crew === '*')).rank
          })
        )
      } else {
        characters.push(character)
      }
    }
    return characters
  }
  let resultAvail
  if (action.crew.roster === undefined) {
    resultAvail = state.allCharacters.reduce(charFilter, [])
  } else {
    let allCharacters = state.allCharacters
    resultAvail = action.crew.roster.reduce((characters, rosterEntry) => {
      let characterMatches = allCharacters.filter((character) => character.alias.indexOf(rosterEntry.name) !== -1)
      if (characterMatches.length > 0) {
        let rankedMatches = characterMatches.map((character) => {
          return Object.assign({}, character, {
            rank: (rosterEntry.boss === 'always' ? 'Boss' : (rosterEntry.boss === 'yes' ? 'Optional' : 'No'))
          })
        })
        return characters.concat(rankedMatches)
      } else {
        return characters
      }
    }, [])
  }
  resultAvail.sort(sortCharacters)
  return Object.assign({}, state, {
    crewName: crewName,
    availableCharacters : resultAvail,
    characters : [],
    hiddenCharacters : [],
    reputation: 0,
    funding: 0,
    leaders: 0,
    sidekicks: 0,
    freeAgents: 0
  })
}

export const addAllCharactersAction = (state, action) => {
  if (state.crewName === 'default') {
    console.log('Received a default crew. Skipping.')
    return state
  }
  return Object.assign({}, state, {
    availableCharacters : [],
    hiddenCharacters : [],
    characters: [...state.characters, ...state.hiddenCharacters, ...state.availableCharacters]
  })
}

// Action Handlers
const ACTION_HANDLERS = {
  [SELECT_CREW] : (state, action) => {
    return selectCrewAction(state, action)
  },
  [SELECT_CHARACTER]: (state, action) => {
    return characterSelected(state, action)
  },
  [LOAD_RESOURCES] : (state, action) => {
    return loadAllResources(state, action)
  },
  [ADD_ALL_CHARACTERS]: (state, action) => {
    return addAllCharactersAction(state, action)
  }
}

const initialState = {
  crewName : 'default',
  characters: [],
  availableCharacters: [],
  allCharacters: [],
  allTraits: [],
  allCrews: [],
  hiddenCharacters: [],
  reputation: 0,
  funding: 0,
  leaders: 0,
  sidekicks: 0,
  freeAgents: 0
}
export default function builderReducer (state = initialState, action) {
  let result = state
  const handler = ACTION_HANDLERS[action.type]
  result = handler ? handler(state, action) : state
  return result
}
