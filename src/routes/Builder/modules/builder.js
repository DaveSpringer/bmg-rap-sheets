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
export function selectCharacter (characterAlias = 'default') {
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

export const actions = {
  selectCrew,
  selectCharacter,
  loadResources
}


// Action Handlers
const ACTION_HANDLERS = {
  [SELECT_CREW] : (state, action) => {
    let charFilter = (characters, character)=> {
      if (character.crews.includes(action.crew.id) || (character.crews.includes('*') && !character.hates.includes(action.crew.id))) {
        if (typeof(character.rank) === 'object') {
          characters.concat(
            Object.assign({}, character, {
              rank : character.rank[action.crewName]
            })
          )
        } else {
          characters.concat(character)
        }
      }
    }
    return Object.assign({}, state, {
      crewName: action.crewName,
      availableCharacters : state.allCharacters.reduce(charFilter, []),
      characters : [],
      hiddenCharacters : [],
      reputation: 0,
      funding: 0
    })
  },
  [SELECT_CHARACTER]: (state, action) => {
    let charFinder = (character) => ( character.alias === action.characterAlias )

    let char = state.characters.find(charFinder)
    let newCharacters = state.characters
    let newAvailChars = state.availableCharacters
    let index = undefined
    let hiddenCharacters = []
    if (char !== undefined) {
      // This is the case where the current character is in the selected
      // characters.
      index = state.characters.indexOf(char)

      newCharacters = [...state.characters.slice(0, index), ...state.characters.slice(index + 1)]
      let hiddenCharactersToAdd = state.hiddenCharacters.filter((character) => character.name === char.name)
      newAvailChars = [...state.availableCharacters, char, ...hiddenCharactersToAdd]
      hiddenCharacters = state.hiddenCharacters.filter((character) => character.name !== char.name)
    } else {
      // The selected character is in the available characters.
      char = state.availableCharacters.find(charFinder)
      index = state.availableCharacters.indexOf(char)

      newCharacters = [...state.characters, char]
      // TODO: Determine if this is changing the state tree...
      newAvailChars = state.availableCharacters.filter((character) => character.name !== char.name)
      let hiddenCharactersToAdd = state.availableCharacters.filter((character) => character.name === char.name && character.alias !== char.alias)
      hiddenCharacters = [...state.hiddenCharacters, ...hiddenCharactersToAdd]
    }
    let newRep = newCharacters.reduce((repSum, character) => repSum + character.reputation, 0)
    let newFunding = newCharacters.reduce((fundSum, character) => fundSum + character.funding, 0)
    return Object.assign({}, state, {
      characters : newCharacters,
      availableCharacters : newAvailChars,
      reputation : newRep,
      funding : newFunding,
      hiddenCharacters : hiddenCharacters
    })
  },
  [LOAD_RESOURCES] : (state, action) => {
    let allTraits = [{"name":"Bat-Armor MK 1","phase":"Execute the plan","cost":"","rule":"Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit].","grants":[],"page":"B.55"},{"name":"Bat-Armor MK III","phase":"Execute the plan","cost":"","rule":"Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit]. If this [Character] makes a Special Attack: Sneak Attack, they may assign Melee [Hit]s to targets up to 3cm away.  All of these [Hit]s are considered Sneak Attacks.","grants":[],"page":"?"},{"name":"Bat Cape","phase":"Execute the plan","cost":"1SC Passive","rule":"When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].","grants":[],"page":"B.55"},{"name":"Batclaw","phase":"Execute the plan","cost":"1SC+1MC","rule":"Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]","grants":[],"page":"B.56"},{"name":"Close Combat Master","phase":"Execute the plan","cost":"","rule":"When fighting [Unarmed], the [Character] may reroll any number of [To [Hit]] dice.","grants":[],"page":"?"},{"name":"Detective","phase":"Execute the plan","cost":"","rule":"For each [Detective] [Character] in your [Crew], you may cancel an [Opponent]'s [Pass] at the beginning of each [Round]. [Detective]s my reroll [Riddle Objectives] once.","grants":[],"page":"B.58"},{"name":"Martial Artist","phase":"Execute the plan","cost":"","rule":"This [Character] ignores [Outnumbered].","grants":[],"page":"B.62"},{"name":"Reinforced Gloves","phase":"Execute the plan","cost":"","rule":"This [Character]'s [Unarmed Attacks] produce 2 [Stun Damage].","grants":[],"page":"B.65"},{"name":"Sustained Defenses","phase":"Execute the plan","cost":"","rule":"This [Character] receives 3 [Defense Dice] for every 2 [DC] spend [Defending] an [Attack].","grants":[],"page":"B.65"},{"name":"Total Vision","phase":"Execute the plan","cost":"","rule":"This [Character] benefits from the [Night Vision] Trait and can see through [Obstacles] or [Terrain]. The [Character] may not shoot through these elements unless the [Weapon] has [Remote Control].","grants":["Night Vision"],"page":"B.66"},{"name":"Night Vision","phase":"Execute the plan","cost":"","rule":"This [Character] can [See] any distance.","grants":[],"page":"B.62"},{"name":"Climbing Claws","phase":"Execute the plan","cost":"1SC","rule":"This [Character] does not spend MC to [Climb] and [Climbing Movement] is not [Impaired]. Spending 1 [SC], the character may finish their [Movement] while [Climbing].","grants":[],"page":"B.58"},{"name":"Sneak Attack","phase":"Execute the plan","cost":"1SC","rule":"This [Special Attack] my only be performed if the [Target] cannot see the [Attacker] at the beginning of the [Attacker]'s activation. The [Target] cannot [Block] this [Special Attack].","grants":[],"page":"B.71"},{"name":"Acrobat","phase":"Execute the plan","cost":"","rule":"[BMD] and [Jump Capacity] become 12cm. The [Character] does not spend extra [MC] to [Move] through [Models], [Difficult Obstacles], [Difficult Ground], [Jump], or [Stand Up]. [Character] gains the [Dodge] trait.","grants":["Dodge"],"page":"B.55"},{"name":"Dodge","phase":"Execute the plan","cost":"1MC (PASSIVE)","rule":"This [Character] may spend [MC] to avoid [Ranged Attack Hits], before the [Attacker] makes its [Damage Rolls]. Each [Agility Test] [Success] cancels 1 [Hit].","grants":[],"page":"B.59"},{"name":"Thief","phase":"Execute the plan","cost":"1SC","rule":"When a [Enemy Model] is [Hit] by this [Close Combat] [Special Attack], the [Attacker] gains [CRT]: [Steal].","grants":[],"page":"B.71"},{"name":"Primary Target (Loot)","phase":"D.After Placement","cost":"","rule":"Before starting the game, choose 1 [Loot] [Objective]. At the end of each [Round] this [Character] controls that [Objective], gain 1 additional [VP].","grants":[],"page":"B.63"},{"name":"Retractable Claws","phase":"Execute the plan","cost":"","rule":"This [Character]'s [Unarmed] attacks inflict [Blood][Stun].","grants":[],"page":"B.65"},{"name":"Master Fighter","phase":"Execute the plan","cost":"","rule":"This [Character] gets a +1 bonus to its [Hit] rolls when making [Unarmed Attacks].","grants":[],"page":"B.62"},{"name":"Explosive Gel","phase":"Execute the plan","cost":"","rule":"This [Character] may spend 1 [MC] to [Manipulate] a piece of [Urban Furnature]. Place a [Gel] marker on the [Urban Furnature]. In a future [Round] the Character may spend 1 [SC] to destroy the marked [Urban Furnature].","grants":[],"page":"B.59"},{"name":"Teamwork/1 (All)","phase":"Execute the plan","cost":"","rule":"During another [Character]'s turn, they may spend 1 [Action Counters] of this [Character]'s as long as they are within 10cm.","grants":[],"page":"?"}]
    let allCrews = [{"name":"Batman","id":"bt"},{"name":"Green Arrow","id":"ga"},{"name":"Law Force","id":"lf"},{"name":"Joker","id":"jk"},{"name":"Penguin","id":"pn"},
    {"name":"League of Shadows","id":"ls"},{"name":"Bane","id":"bn"},{"name":"Poison Ivy","id":"pi"},{"name":"Court of Owls","id":"co"},{"name":"Mr. Freeze","id":"mf"},
    {"name":"Organized Crime","id":"oc"},{"name":"Two Face","id":"tf"},{"name":"Black Mask","id":"bm"},{"name":"Watchmen","id":"wm"},{"name":"Riddler","id":"rd"},
    {"name":"Scarecrow","id":"sc"},{"name":"Wonderland Gang","id":"wg"},{"name":"LexCorp","id":"lc"},{"name":"Gorilla Grodd","id":"gg"},{"name":"Suicide Squad","id":"ss"}]
    let loadedCharacters = [{"name":"Bruce Wayne","alias":"Batman (Arkham Knight)","rank":"Leader","reputation":150,"funding":0,"crews":["bt"],"traits":["Bat-Armor MK III","Bat Cape","Batclaw","Detective","Martial Artist","Reinforced Gloves","Night Vision","Explosive Gel","Master Fighter","Teamwork/1 (All)"]},{"name":"Bruce Wayne","alias":"Batman (Ben Affleck)","rank":"Leader","reputation":125,"funding":0,"crews":["bt"],"traits":["Bat-Armor MK 1","Bat Cape","Batclaw","Close Combat Master","Detective","Martial Artist","Reinforced Gloves","Sustained Defenses"]},{"name":"Selina Kyle","alias":"Catwoman","rank":"Free Agent","reputation":66,"funding":0,"crews":["*"],"hates":["lf","jk"],"traits":["Total Vision","Climbing Claws","Sneak Attack","Acrobat","Thief","Primary Target (Loot)","Retractable Claws"]},{"name":"James W. Gordon","alias":"Gordon","rank":[{"crew":"bt","rank":"Sidekick"},{"crew":"lf","rank":"Leader"}],"reputation":70,"funding":200,"crews":["bt","lf"],"traits":["Air Support","Arrest","Detective",{"name":"Elite Boss","type":"S.W.A.T."},"Kevlar Vest","Take Cover!!","Veteran"]}]
    //Now... Add all traits to each character... Ooph...
    // TODO: Optimize the %@#$^ out of this in the future.
    let findTrait = (traitName) => {
      return allTraits.find((trait) => (traitName === trait.name))
    }
    let populateTraits = (character) => {
      let poppedTraits = character.traits.map(findTrait)
      character.traitText = poppedTraits
      return character
    }
    let allCharacters = loadedCharacters.map(populateTraits)
    return Object.assign({}, state, {
      allTraits : allTraits,
      allCrews : allCrews,
      allCharacters : loadedCharacters
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
  hiddenCharacters: [],
  reputation: 0,
  funding: 0
}
export default function builderReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  const result = handler ? handler(state, action) : state
  return result
}
