import { characterSelected, toggleFollowRules } from './crewRulesEngine'
import { LOAD_RESOURCES, loadResources, default as loadAllResources } from '../../../modules/loadResources'
import { sortCharacters, doStateCalcs } from './common'
import { selectEquipment, SELECT_EQUIPMENT, selectEquipmentAction } from './selectEquipment'
import { assignEquipment, ASSIGN_EQUIPMENT, assignEquipmentAction } from './assignEquipment'

// Constants
export const SELECT_CREW_UNCONFIRMED = 'SELECT_CREW_UNCONFIRMED'
export const SELECT_CREW = 'SELECT_CREW'
export const SELECT_CHARACTER = 'SELECT_CHARACTER'
export const ADD_ALL_CHARACTERS = 'ADD_ALL_CHARACTERS'
export const FOLLOW_CREW_RULES = 'FOLLOW_CREW_RULES'
export const RESET_CREW = 'RESET_CREW'
export const READ_CREW_CODE = 'READ_CREW_CODE'

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
export function selectCharacter (characterKey = 'default') {
  console.log('Selected character: ' + characterKey)
  return {
    type: SELECT_CHARACTER,
    characterKey: characterKey
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

export function readCrewCode (crewCode = '') {
  return {
    type: READ_CREW_CODE,
    crewCode: crewCode
  }
}

export const actions = {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew,
  selectEquipment,
  assignEquipment,
  readCrewCode
}

export const selectCrewAction = (state, action) => {
  let crewName = action.crew.name
  let crewId = action.crew.id
  let exclusive = action.crew.exclusive
  let charFilter = (characters, character) => {
    if (character.crews.includes(crewId) || (!exclusive &&
    (character.crews.includes('*') && !character.hates.includes(crewId)))) {
      if (typeof (character.rank) === 'object') {
        let finalRank = character.rank.find((rank) => (rank.crew === crewId || rank.crew === '*')).rank
        let funding = (finalRank === 'Leader' ? 0 : character.funding)
        characters.push(
          Object.assign({}, character, {
            rank : finalRank,
            funding: funding
          })
        )
      } else {
        let funding = (character.rank === 'Leader' ? 0 : character.funding)
        characters.push(Object.assign({}, character, { funding: funding }))
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
  let crewEquipment = state.allEquipment.reduce((equipList, equip) => {
    if (equip.crew === crewId) {
      equipList.push(equip)
    }
    return equipList
  }, [])
  let availableEquipment = crewEquipment.reduce((equipList, equip) => {
    if (equip.requires === undefined) {
      equipList.push(equip)
    }
    return equipList
  }, [])
  resultAvail.sort(sortCharacters)
  resultAvail.forEach((char) => {
    char.equipment = undefined
  })
  return Object.assign({}, state, {
    crewName: crewName,
    crewId: crewId,
    availableCharacters : resultAvail,
    characters : [],
    hiddenCharacters : [],
    leaders: 0,
    sidekicks: 0,
    freeAgents: 0,
    crewEquipment: crewEquipment,
    availableEquipment: availableEquipment,
    equipment: []
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

export function readCrewCodeAction (state, action) {
  let crewCode = action.crewCode
  let splitCode = crewCode.split('+')

  let resultState = splitCode.reduce((curState, split, index) => {
    let resState
    if (index === 0) {
      if (split.length === 2) {
        let crew = state.allCrews.find((crew) => crew.id === split)
        resState = selectCrewAction(curState, { crew: crew })
      } else {
        console.log('ERROR: Failed to read crew properly from code. Exiting.')
        return curState
      }
    } else {
      if (split.indexOf('-') !== -1) {
        let equipChar = split.split('-')
        let charKey
        resState = equipChar.reduce((charState, charSplit, charIndex) => {
          let intermediateState
          if (charIndex === 0) {
            charKey = charSplit
            intermediateState = characterSelected(charState, { characterKey : charSplit })
          } else {
            // Find the equipment.
            let equip = charState.availableEquipment.find((availEquip) => charSplit === availEquip.key)

            // Select the equipment
            intermediateState = selectEquipmentAction(charState, { equipment: equip })

            // Assign the equipment
            intermediateState = assignEquipmentAction(intermediateState, { equipment: equip, characterKey: charKey })
          }
          return intermediateState
        }, curState)
      } else {
        resState = characterSelected(curState, { characterKey : split })
      }
    }
    return resState
  }, state)

  return resultState
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
  },
  [SELECT_EQUIPMENT]: (state, action) => {
    return selectEquipmentAction(state, action)
  },
  [ASSIGN_EQUIPMENT]: (state, action) => {
    return assignEquipmentAction(state, action)
  },
  [READ_CREW_CODE]: (state, action) => {
    return readCrewCodeAction(state, action)
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
  crewCode: '',
  allEquipment: [],
  availableEquipment: [],
  validEquipChars: [],
  equipment: {}
}
export default function builderReducer (state = initialState, action) {
  let result = state
  const handler = ACTION_HANDLERS[action.type]
  if (handler) {
    result = doStateCalcs(handler(state, action))
  }
  return result
}
