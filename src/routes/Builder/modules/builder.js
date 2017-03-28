// Constants
export const SELECT_CREW_UNCONFIRMED = 'SELECT_CREW_UNCONFIRMED'
export const SELECT_CREW = 'SELECT_CREW'
export const SELECT_CHARACTER = 'SELECT_CHARACTER'
export const LOAD_RESOURCES = 'LOAD_RESOURCES'

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
export function selectCharacter (characterName = 'default') {
  return {
    type: SELECT_CHARACTER,
    characterName: characterName
  }
}

export function loadResources () {
  return {
    type: LOAD_RESOURCES
  }
}

export const actions = {
  selectCrew,
  selectCharacter,
  loadResources
}


// Action Handlers
const ACTION_HANDLERS = {
  [SELECT_CREW] : (state, action) => {
    let charFilter = (character) => {
      console.log(`Char in crew ${action.crew.id} = ${character.crews}? ${character.crews.includes(action.crew.id)}`)
      return character.crews.includes(action.crew.id) || (character.crews.includes('*') && !character.hates.includes(action.crew.id))
    }
    return Object.assign({}, state, {
      crewName: action.crewName,
      availableCharacters : state.allCharacters.filter(charFilter),
      characters : []
    })
  },
  [SELECT_CHARACTER]: (state, action) => {
    let charFinder = (character) => ( character.name === action.characterName )

    let char = state.characters.find(charFinder)
    let newCharacters = state.characters
    let newAvailChars = state.availableCharacters
    let index = undefined
    if (char !== undefined) {
      // This is the case where the current character is in the selected
      // characters.
      index = state.characters.indexOf(char)

      newCharacters = [...state.characters.slice(0, index), ...state.characters.slice(index + 1)]
      newAvailChars = [...state.availableCharacters, char]
    } else {
      char = state.availableCharacters.find(charFinder)
      index = state.availableCharacters.indexOf(char)

      newCharacters = [...state.characters, char]
      newAvailChars = [...state.availableCharacters.slice(0, index), ...state.availableCharacters.slice(index + 1)]
    }
    let newRep = newCharacters.reduce((repSum, character) => repSum + character.reputation, 0)
    let newFunding = newCharacters.reduce((fundSum, character) => fundSum + character.funding, 0)
    console.log(JSON.stringify(newCharacters))
    console.log(JSON.stringify(newAvailChars))
    return Object.assign({}, state, {
      characters : newCharacters,
      availableCharacters : newAvailChars,
      reputation : newRep,
      funding : newFunding
    })
  },
  [LOAD_RESOURCES] : (state, action) => {
    return Object.assign({}, state, {
      allTraits : [{"name":"Bat-Armor MK 1","phase":"Execute the plan","cost":"","rule":"Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit].","grants":[]},
      {"name":"Bat-Armor MK III","phase":"Execute the plan","cost":"","rule":"Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit]. If this [Character] makes a Special Attack: Sneak Attack, they may assign Melee [Hit]s to targets up to 3cm away.  All of these [Hit]s are considered Sneak Attacks.","grants":[]},
      {"name":"Bat Cape","phase":"Execute the plan","cost":"1SC Passive","rule":"When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].","grants":[]},
      {"name":"Batclaw","phase":"Execute the plan","cost":"1SC+1MC","rule":"Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]","grants":[]},
      {"name":"Close Combat Master","phase":"Execute the plan","cost":"","rule":"When fighting [Unarmed], the [Character] may reroll any number of [To [Hit]] dice.","grants":[]},
      {"name":"Detective","phase":"Execute the plan","cost":"","rule":"For each [Detective] [Character] in your [Crew], you may cancel an [Opponent]'s [Pass] at the beginning of each [Round]. [Detective]s my reroll [Riddle Objectives] once.","grants":[]},
      {"name":"Martial Artist","phase":"Execute the plan","cost":"","rule":"This [Character] ignores [Outnumbered].","grants":[]},
      {"name":"Reinforced Gloves","phase":"Execute the plan","cost":"","rule":"This [Character]'s [Unarmed Attacks] produce 2 [Stun Damage].","grants":[]},
      {"name":"Sustained Defenses","phase":"Execute the plan","cost":"","rule":"This [Character] receives 3 [Defense Dice] for every 2 [DC] spend [Defending] an [Attack].","grants":[]}],
      allCrews : [{"name":"Batman","id":"bt"},{"name":"Green Arrow","id":"ga"},{"name":"Law Force","id":"lf"},{"name":"Joker","id":"jk"},{"name":"Penguin","id":"pn"},
      {"name":"League of Shadows","id":"ls"},{"name":"Bane","id":"bn"},{"name":"Poison Ivy","id":"pi"},{"name":"Court of Owls","id":"co"},{"name":"Mr. Freeze","id":"mf"},
      {"name":"Organized Crime","id":"oc"},{"name":"Two Face","id":"tf"},{"name":"Black Mask","id":"bm"},{"name":"Watchmen","id":"wm"},{"name":"Riddler","id":"rd"},
      {"name":"Scarecrow","id":"sc"},{"name":"Wonderland Gang","id":"wg"},{"name":"LexCorp","id":"lc"},{"name":"Gorilla Grodd","id":"gg"},{"name":"Suicide Squad","id":"ss"}],
      allCharacters : [{"name":"Bruce Wayne","alias":"Batman (Ben Affleck)","rank":"Leader","reputation":125,"funding":0,"crews":["bt"],"traits":["Bat-Armor MK 1","Bat Cape","Batclaw","Close Combat Master","Detective","Martial Artist","Reinforced Gloves","Sustained Defenses"]},{"name":"Selina Kyle","alias":"Catwoman","rank":"Free Agent","reputation":66,"funding":0,"crews":["*"],"hates":["lf","jk"],"traits":["Total Vision","Climbing Claws","Sneak Attack","Acrobat","Thief","Primary Target (Loot)","Retractable Claws"]}]
    })
  },
}

const initialState = {
  crewName : 'default',
  characters: [],
  availableCharacters: [],
  allCharacters: [],
  allTraits: [],
  allCrews: [],
  reputation: 0,
  funding: 0
}
export default function builderReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  const result = handler ? handler(state, action) : state
  return result
}
