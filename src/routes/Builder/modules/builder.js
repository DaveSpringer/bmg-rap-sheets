import { characterSelected, toggleFollowRules } from './crewRulesEngine'
import loadAllResources from './loadResources'
import { sortCharacters } from './common'

// Constants
export const SELECT_CREW_UNCONFIRMED = 'SELECT_CREW_UNCONFIRMED'
export const SELECT_CREW = 'SELECT_CREW'
export const SELECT_CHARACTER = 'SELECT_CHARACTER'
export const LOAD_RESOURCES = 'LOAD_RESOURCES'
export const ADD_ALL_CHARACTERS = 'ADD_ALL_CHARACTERS'
export const FOLLOW_CREW_RULES = 'FOLLOW_CREW_RULES'
export const RESET_CREW = 'RESET_CREW'

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

export function followCrewRules (followRules = true) {
  return {
    type: FOLLOW_CREW_RULES,
    followRules: followRules
  }
}

export function resetCrew () {
  return {
    type: RESET_CREW
  }
}

export const actions = {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew
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
    crewId: action.crew.id,
    availableCharacters : resultAvail,
    characters : [],
    hiddenCharacters : [],
    reputation: 0,
    funding: 0,
    leaders: 0,
    sidekicks: 0,
    freeAgents: 0,
    crewCode: '' + action.crew.id + '-'
  })
}

export const addAllCharactersAction = (state, action) => {
  if (state.crewName === 'default') {
    console.log('Received a default crew. Skipping.')
    return state
  }
  let opState = state
  if (state.followRules) {
    opState = followRules(state, { followRules : false })
  }
  let newCharacters = [...opState.characters, ...opState.hiddenCharacters, ...opState.availableCharacters]
  let leaders = 0
  let sidekicks = 0
  let freeAgents = 0

  newCharacters.forEach((newChar) => {
    if (newChar.rank === 'Leader') {
      ++leaders
    } else if (newChar.rank === 'Sidekick') {
      ++sidekicks
    } else if (newChar.rank === 'Free Agent') {
      ++freeAgents
    }
  })

  return Object.assign({}, opState, {
    availableCharacters : [],
    hiddenCharacters : [],
    characters: newCharacters,
    leaders: leaders,
    sidekicks: sidekicks,
    freeAgents: freeAgents
  })
}

export const followRules = (state, action) => {
  if (state.followRules === action.followRules) {
    return state
  }
  return toggleFollowRules(state, action)
}

export const resetCurrentCrew = (state, action) => {
  if (state.crewId === 'na' || state.crewName === 'default') {
    return state
  }
  // Find the crew object
  let crew = state.allCrews.find((crew) => crew.id === state.crewId && crew.name === state.crewName)
  return selectCrewAction(state, { crew: crew })
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
  },
  [FOLLOW_CREW_RULES]: (state, action) => {
    return followRules(state, action)
  },
  [RESET_CREW]: (state, action) => {
    return resetCurrentCrew(state, action)
  }
}

const initialState = {
  crewName : 'default',
  crewId : 'na',
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
  freeAgents: 0,
  followRules: true,
  crewCode: ''
}
export default function builderReducer (state = initialState, action) {
  let result = state
  const handler = ACTION_HANDLERS[action.type]
  result = handler ? handler(state, action) : state
  return result
}
