import {
  SELECT_CREW,
  SELECT_CHARACTER,
  ADD_ALL_CHARACTERS,
  FOLLOW_CREW_RULES,
  RESET_CREW,
  READ_CREW_CODE,
  selectCrew,
  selectCharacter,
  addAllCharacters,
  followCrewRules,
  resetCrew,
  initialState,
  readCrewCode,
  default as builderReducer
} from 'routes/Builder/modules/builder'
import {
  assignEquipment
} from 'routes/Builder/modules/assignEquipment'
import {
  selectEquipment
} from 'routes/Builder/modules/selectEquipment'
import {
  LOAD_RESOURCES,
  loadResources,
  default as loadAllResources
} from 'modules/loadResources'

let defaultState = initialState

let filterCharacterAlias = (alias) => (character) => character.alias === alias

describe('(Redux Module) Builder', () => {
  it('Should export a constant SELECT_CREW', () => {
    expect(SELECT_CREW).to.equal('SELECT_CREW')
  })

  it('Should export a constant SELECT_CHARACTER', () =>{
    expect(SELECT_CHARACTER).to.equal('SELECT_CHARACTER')
  })

  it('Should export a constant LOAD_RESOURCES', () => {
    expect(LOAD_RESOURCES).to.equal('LOAD_RESOURCES')
  })

  it('Should export a constant ADD_ALL_CHARACTERS', () => {
    expect(ADD_ALL_CHARACTERS).to.equal('ADD_ALL_CHARACTERS')
  })

  it('Should export a constant READ_CREW_CODE', () => {
    expect(READ_CREW_CODE).to.equal('READ_CREW_CODE')
  })

  /* I have no idea why this isn't better... */
  it('Reducer should return a default state if no state is provided.', () => {
    let state = builderReducer(undefined, {})
    expect(state).to.be.an('object')
    expect(state.crewName).to.equal('default')
    // expect(state.characters).to.exist()
    // expect(state.characters).to.be.empty()
    // expect(state.availableCharacters).to.be.empty()
    // expect(state.allTraits).to.be.empty()
    // expect(state.hiddenCharacters).to.be.empty()
    // expect(state.reputation).to.exist()
    // expect(state.reputation).to.equal(0)
    expect(state.funding).to.equal(0)
    expect(state.leaders).to.equal(0)
    expect(state.sidekicks).to.equal(0)
    expect(state.freeAgents).to.equal(0)
    // expect(state.keys().length).to.equal(12)
  })


  describe('(ActionCreator) selectCrew', () => {
    it('Should be exported as a function.', () => {
      expect(selectCrew).to.be.a('function')
    })

    it('Should return an action with type SELECT_CREW', () => {
      expect(selectCrew('bt')).to.have.property('type', SELECT_CREW)
    })

    it('Should have the selected crew id.', () => {
      expect(selectCrew('bt')).to.have.property('crew', 'bt')
    })

    it('Should set crew to default if not provided.', () => {
      expect(selectCrew(undefined)).to.have.property('crew', 'default')
    })

    let loadedState = builderReducer(defaultState, loadResources())
    let populatedState = builderReducer(loadedState, selectCrew({ id: 'bt', name: 'Batman' }))
    it('Should properly populate a selected crew', () => {
      expect(populatedState).to.be.an('object')
      expect(populatedState.crewName).to.equal('Batman')
      expect(populatedState.availableCharacters.length).to.be.above(1)
      expect(populatedState.characters.length).to.equal(0)
      expect(populatedState.hiddenCharacters.length).to.equal(0) //NOTE: Modern Age Batman/Robin will break this.
      expect(populatedState.reputation).to.equal(0)
      expect(populatedState.funding).to.equal(0)
      expect(populatedState.leaders).to.equal(0)
      expect(populatedState.sidekicks).to.equal(0)
      expect(populatedState.freeAgents).to.equal(0)
      expect(populatedState.availableEquipment.length).to.be.above(1)
      expect(populatedState.crewEquipment.length).to.be.above(populatedState.availableEquipment.length)
    })

    it('Should reset current numbers when a different crew is selected.', () => {
      let fakeState = Object.assign({}, populatedState, {
        reputation : 125,
        funding: 100,
        leaders: 1,
        sidekicks: 1,
        freeAgents: 1,
        hiddenCharacters : populatedState.availableCharacters,
        characters : populatedState.availableCharacters,
        crewName : 'Bizzarro-Bat'
      })

      let revertState = builderReducer(fakeState, selectCrew({ id: 'bt', name: 'Batman' }))
      expect(revertState).to.be.an('object')
      expect(revertState.crewName).to.equal('Batman')
      expect(revertState.availableCharacters.length).to.be.above(1)
      expect(revertState.characters.length).to.equal(0)
      expect(revertState.hiddenCharacters.length).to.equal(0) //NOTE: Modern Age Batman/Robin will break this.
      expect(revertState.reputation).to.equal(0)
      expect(revertState.funding).to.equal(0)
      expect(revertState.leaders).to.equal(0)
      expect(revertState.sidekicks).to.equal(0)
      expect(revertState.freeAgents).to.equal(0)
    })

    it('Should handle selecting Joker crew.', () => {
      let jokerPopulated = builderReducer(loadedState, selectCrew({ id: 'jk', name: 'Joker' }))
      expect(jokerPopulated).to.be.an('object')
      expect(jokerPopulated.crewName).to.equal('Joker')
      expect(jokerPopulated.availableCharacters.length).to.be.above(1)
      expect(jokerPopulated.characters.length).to.equal(0)
      expect(jokerPopulated.hiddenCharacters.length).to.equal(0)
      expect(jokerPopulated.reputation).to.equal(0)
      expect(jokerPopulated.funding).to.equal(0)
      expect(jokerPopulated.leaders).to.equal(0)
      expect(jokerPopulated.sidekicks).to.equal(0)
      expect(jokerPopulated.freeAgents).to.equal(0)
    })

    let scarecrowPopulated = builderReducer(loadedState, selectCrew({ id: 'sc', name: 'Scarecrow' }))
    it('Should handle selecting Scarecrow crew.', () => {
      expect(scarecrowPopulated).to.be.an('object')
      expect(scarecrowPopulated.crewName).to.equal('Scarecrow')
      expect(scarecrowPopulated.availableCharacters.length).to.be.above(1)
      expect(scarecrowPopulated.characters.length).to.equal(0)
      expect(scarecrowPopulated.hiddenCharacters.length).to.equal(0)
      expect(scarecrowPopulated.reputation).to.equal(0)
      expect(scarecrowPopulated.funding).to.equal(0)
      expect(scarecrowPopulated.leaders).to.equal(0)
      expect(scarecrowPopulated.sidekicks).to.equal(0)
      expect(scarecrowPopulated.freeAgents).to.equal(0)
    })

    it('Should have Deathstroke as a Sidekick in a Scarecrow crew.', () => {
      let deathstroke = scarecrowPopulated.availableCharacters.find((character) => character.alias === 'Deathstroke (AO)')
      expect(deathstroke).to.be.an('object')
      expect(deathstroke.rank).to.equal('Sidekick')
    })

    it('All Traits should be populated correctly.', () => {
      let crews = loadedState.allCrews
      let populatedCrew
      let crewsReduced = crews.forEach((crew) => {
        populatedCrew = builderReducer(loadedState, selectCrew(crew))
        let failedTrait = false

        populatedCrew.availableCharacters.forEach((character) => {
          character.traitText.forEach((trait) => {
            if (trait.rule === 'Unknown') {
              console.log('Trait ' + trait.name + ' is not properly populated on character ' + character.alias + '. Check resources/traits.js.')
              failedTrait = true
            }
            // expect(trait.rule).to.not.equal('Unknown')
          })
        })

        expect(failedTrait).to.equal(false)
      })
    })

    let suicideSquadCrew = loadedState.allCrews.find((crew) => crew.id === 'ss')
    let suicideSquadPopped = builderReducer(loadedState, selectCrew(suicideSquadCrew))
    it('Should handle selecting Suicide Squad.', () => {
      expect(suicideSquadPopped).to.be.an('object')
      expect(suicideSquadPopped.crewName).to.equal('Suicide Squad')
      expect(suicideSquadPopped.availableCharacters.length).to.be.above(1)
      expect(suicideSquadPopped.characters.length).to.equal(0)
      expect(suicideSquadPopped.hiddenCharacters.length).to.equal(0)
      expect(suicideSquadPopped.reputation).to.equal(0)
      expect(suicideSquadPopped.funding).to.equal(0)
      expect(suicideSquadPopped.leaders).to.equal(0)
      expect(suicideSquadPopped.sidekicks).to.equal(0)
      expect(suicideSquadPopped.freeAgents).to.equal(0)
    })

    it('Suicide Squad should have Free Agents that are not generically available.', () => {
      expect(suicideSquadPopped).to.be.an('object')
      expect(suicideSquadPopped.availableCharacters.filter(filterCharacterAlias('Katana (Suicide Squad)')).length).to.be.above(0)
    })

    it('Should have Ranks populated on all available characters in the Suicide Squad.', () => {
      expect(suicideSquadPopped).to.be.an('object')
      expect(suicideSquadPopped.availableCharacters.length).to.be.above(1)
      suicideSquadPopped.availableCharacters.forEach((character) => {
        expect(character.rank).to.be.a('string')
      })
    })

    let watchmenCrew = loadedState.allCrews.find((crew) => crew.id === 'wm')
    let watchmenCrewPopped = builderReducer(loadedState, selectCrew(watchmenCrew))
    it('Should be able to select the Watchmen.', () => {
      expect(watchmenCrewPopped).to.be.an('object')
      expect(watchmenCrewPopped.crewName).to.equal('Watchmen')
      expect(watchmenCrewPopped.crewId).to.equal('wm')
    })

    it('Should only have the 5 Watchmen.', () => {
      expect(watchmenCrewPopped.availableCharacters.length).to.equal(5)
    })

    it('Should clear all equipment when a new crew is selected.', () => {
      populatedState.availableCharacters[0].equipment = [ ]
      populatedState.availableCharacters[0].equipment.push({ name: 'fakeEquip' })
      let resetState = builderReducer(populatedState, selectCrew({ id: 'bt', name: 'Batman' }))

      expect(resetState.availableCharacters[0].equipment).to.not.exist
    })
  })

  describe('(ActionCreator) selectCharacter', () => {
    it('Should be exported as a function.', () => {
      expect(selectCharacter).to.be.a('function')
    })

    it('Should return an action with type SELECT_CHARACTER', () => {
      expect(selectCharacter('Batman')).to.have.property('type', SELECT_CHARACTER)
    })

    it('Should return an action with the selected character alias.', () => {
      expect(selectCharacter('Batman')).to.have.property('characterKey', 'Batman')
    })

    it('Should return an action with the default character.', () => {
      expect(selectCharacter(undefined)).to.have.property('characterKey', 'default')
    })
  })

  describe('(ActionCreator) loadResources', () => {
    it('Should be exported as a function.', () => {
      expect(loadResources).to.be.a('function')
    })

    it('Should return an action with type LOAD_RESOURCES', () => {
      expect(loadResources()).to.have.property('type', LOAD_RESOURCES)
    })

    it('Should be used to trigger a LOAD_RESOURCES event', () => {
      let resultState = builderReducer(defaultState, loadResources())
      expect(resultState).to.be.an('object')
    })
  })

  describe('(ActionCreator) addAllCharacters', () => {
    let loadedState = builderReducer(defaultState, loadResources())

    it('Should be exported as a function.', () => {
      expect(addAllCharacters).to.be.a('function')
    })

    it('Should return an action with type ADD_ALL_CHARACTERS', () => {
      expect(addAllCharacters()).to.have.property('type', ADD_ALL_CHARACTERS)
    })

    it('Should be used to trigger an ADD_ALL_CHARACTERS event even with defaults.', () => {
      let resultState = builderReducer(defaultState, addAllCharacters())
      expect(resultState).to.be.an('object')
    })

    it('Should be able to populate from the current crew.', () => {
      let suicideSquadCrew = loadedState.allCrews.find((crew) => crew.id === 'ss')
      let suicideSquadPopped = builderReducer(loadedState, selectCrew(suicideSquadCrew))
      let resultState = builderReducer(suicideSquadPopped, addAllCharacters())
      expect(resultState).to.be.an('object')
      expect(resultState.characters.length).to.not.equal(0)
      expect(resultState.availableCharacters.length).to.equal(0)
      expect(resultState.crewName).to.equal(suicideSquadCrew.name)
    })
  })

  describe('(ActionCreator) followRules', () => {
    let loadedState = builderReducer(defaultState, loadResources())

    it('Should default to true.', () => {
      expect(loadedState.followRules).to.equal(true)
    })

    it('Should be exported as a function.', () => {
      expect(followCrewRules).to.be.a('function')
    })

    it('Should return an action with type FOLLOW_CREW_RULES', () => {
      expect(followCrewRules()).to.have.property('type', FOLLOW_CREW_RULES)
    })

    it('Should have an action default of true.', () => {
      expect(followCrewRules()).to.have.property('followRules', true)
    })

    it('Should remain true when applied multiple times.', () => {
      let additionalState = builderReducer(loadedState, followCrewRules(true))
      expect(additionalState.followRules).to.equal(true)
    })
  })

  describe('(ActionCreator) resetCrew', () => {
    let loadedState = builderReducer(defaultState, loadResources())

    describe('Suicide-Squad Reset Validator', () => {
      let suicideSquadCrew = loadedState.allCrews.find((crew) => crew.id === 'ss')
      let suicideSquadPopped = builderReducer(loadedState, selectCrew(suicideSquadCrew))
      let allSelected = builderReducer(suicideSquadPopped, addAllCharacters())

      it('Pretest validation', () => {
        expect(allSelected.characters.length).to.equal(suicideSquadPopped.availableCharacters.length)
      })

      it('Should be able to reset an all selected crew.', () => {
        let resetCrewState = builderReducer(allSelected, resetCrew())
        expect(resetCrewState.availableCharacters.length).to.equal(suicideSquadPopped.availableCharacters.length)
      })
    })

    describe('Batman Reset Validator', () => {
      let batmanCrew = loadedState.allCrews.find((crew) => crew.id === 'bt')
      let batmanCrewPopped = builderReducer(loadedState, selectCrew(batmanCrew))
      let allSelected = builderReducer(batmanCrewPopped, addAllCharacters())

      it('Pretest validation', () => {
        expect(allSelected.characters.length).to.equal(batmanCrewPopped.availableCharacters.length)
      })

      it('Should be able to reset an all selected crew.', () => {
        let resetCrewState = builderReducer(allSelected, resetCrew())
        expect(resetCrewState.availableCharacters.length).to.equal(batmanCrewPopped.availableCharacters.length)
      })
    })
  })

  describe('(ActionCrewtor) readCrewCode', () => {
    let loadedState = builderReducer(defaultState, loadResources())
    let selectBatmanCrew = builderReducer(loadedState, selectCrew({name: 'Batman', id: 'bt'}))
    let selectBatman = builderReducer(selectBatmanCrew, selectCharacter('001'))
    let selectGordon = builderReducer(selectBatman, selectCharacter('046A'))
    let selectCatwoman = builderReducer(selectGordon, selectCharacter('008'))
    let selectRobin = builderReducer(selectCatwoman, selectCharacter('015'))
    let selectFatCop = builderReducer(selectRobin, selectCharacter('005B2'))
    let firstAvailEquip = selectFatCop.availableEquipment[0]
    let selectEquip = builderReducer(selectFatCop, selectEquipment(firstAvailEquip))
    let magazineFatCop = builderReducer(selectEquip, assignEquipment(firstAvailEquip, '005B2'))

    it('Should be able to reproduce basic crew from crew code with only faction.', () => {
      let testState = builderReducer(loadedState, readCrewCode('bt'))

      expect(testState.crewCode).to.equal(selectBatmanCrew.crewCode)
      expect(testState.crewName).to.equal(selectBatman.crewName)
    })

    it('Should be able to read a crew with batman.', () => {
      let testState = builderReducer(loadedState, readCrewCode('bt+001'))

      expect(testState.crewCode).to.equal(selectBatman.crewCode)
      expect(testState.reputation).to.equal(selectBatman.reputation)
    })

    it('Should be able to read a complicated crew.', () => {
      let testState = builderReducer(loadedState, readCrewCode('bt+001+046A+008+015'))

      expect(testState.crewCode).to.equal(selectRobin.crewCode)
      expect(testState.reputation).to.equal(selectRobin.reputation)
      expect(testState.funding).to.equal(selectRobin.funding)
    })

    it('Should gracefully handle a read failure.', () => {
      let testState = builderReducer(loadedState, readCrewCode('asgahweman'))

      expect(testState).to.equal(loadedState)
    })

    it('Should handle reading a crew with equipment.', () => {
      let testState = builderReducer(loadedState, readCrewCode('bt+001+046A+008+015+005B2-BT01A'))

      expect(testState.crewCode).to.equal(magazineFatCop.crewCode)
      expect(testState.reputation).to.equal(magazineFatCop.reputation)
      expect(testState.funding).to.equal(magazineFatCop.funding)
    })
  })
})
