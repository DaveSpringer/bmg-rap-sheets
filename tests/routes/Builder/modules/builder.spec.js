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
