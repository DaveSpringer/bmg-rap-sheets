import {
  SELECT_CREW,
  SELECT_CHARACTER,
  LOAD_RESOURCES,
  selectCrew,
  selectCharacter,
  loadResources,
  default as builderReducer
} from 'routes/Builder/modules/builder'

let defaultState = {
  crewName : 'default',
  allCrews : [],
  allTraits : [],
  allCharacters: [],
  availableCharacters: [],
  characters: [],
  reputation: 0,
  funding: 0,
  leaders: 0,
  sidekicks: 0,
  freeAgents: 0
}

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
      let deathstroke = scarecrowPopulated.availableCharacters.find((character) => character.alias === 'Deathstroke Origin')
      expect(deathstroke).to.be.an('object')
      expect(deathstroke.rank).to.equal('Sidekick')
    })

    it('All Traits should be populated correctly.', () => {
      let crews = loadedState.allCrews
      let populatedCrew
      let crewsReduced = crews.forEach((crew) => {
        populatedCrew = builderReducer(loadedState, selectCrew(crew))
        populatedCrew.availableCharacters.forEach((character) => {
          character.traitText.forEach((trait) => {
            if (trait.rule === 'Unknown') {
              console.log('Trait ' + trait.name + ' is not properly populated on character ' + character.alias + '. Check resources/traits.js.')
            }
            expect(trait.rule).to.not.equal('Unknown')
          })
        })
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
      console.log('Here it is: ' + JSON.stringify(suicideSquadPopped.availableCharacters.filter(filterCharacterAlias('Harley Quinn'))))
      expect(suicideSquadPopped.availableCharacters.filter(filterCharacterAlias('Katana')).length).to.be.above(0)
    })

    it('Should have Ranks populated on all available characters in the Suicide Squad.', () => {
      expect(suicideSquadPopped).to.be.an('object')
      expect(suicideSquadPopped.availableCharacters.length).to.be.above(1)
      suicideSquadPopped.availableCharacters.forEach((character) => {
        expect(character.rank).to.be.a('string')
      })
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
      expect(selectCharacter('Batman')).to.have.property('characterAlias', 'Batman')
    })

    it('Should return an action with the default character.', () => {
      expect(selectCharacter(undefined)).to.have.property('characterAlias', 'default')
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
})
