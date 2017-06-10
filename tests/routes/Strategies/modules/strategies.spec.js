import {
  LOAD_STRATEGIES,
  SELECT_CREW,
  loadStrategies,
  selectCrew,
  default as strategiesReducer
} from 'routes/Strategies/modules/strategies'

const batmanCrew = { id: 'bt', name: 'Batman' }
const defaultCrew = { id: 'al', name: 'All' }

describe('(Redux Module) Strategies', () => {
  it('Should export a constant LOAD_STRATEGIES', () => {
    expect(LOAD_STRATEGIES).to.equal('LOAD_STRATEGIES')
  })

  it('Should export a constant SELECT_CREW', () => {
    expect(SELECT_CREW).to.equal('SELECT_CREW')
  })

  it('Should return a default state if no state is provided.', () => {
    let state = strategiesReducer(undefined, {})
    expect(state).to.be.an('object')
    expect(state.crew).to.be.an('object')
    expect(state.allStrategies.length).to.be.above(0)
    expect(state.strategies.length).to.be.above(0)
    expect(state.allStrategies.length).to.equal(state.strategies.length)
  })

  describe('(ActionCreator) loadStrategies', () => {
    it('Should be exported as a function.', () => {
      expect(loadStrategies).to.be.a('function')
    })

    it('Should return an action with type LOAD_STRATEGIES', () => {
      expect(loadStrategies()).to.have.property('type', LOAD_STRATEGIES)
    })

    it('Should load the state as expected.', () => {
      let loadedState = strategiesReducer(undefined, loadStrategies())
      expect(loadedState).to.be.an('object')
      expect(loadedState.allStrategies.length).to.be.above(0)
      expect(loadedState.allStrategies.length).to.equal(loadedState.strategies.length)
    })
  })

  describe('(ActionCreator) selectCrew', () => {
    let loadedState = strategiesReducer(undefined, loadStrategies())
    it('Should be exported as a function.', () => {
      expect(selectCrew).to.be.a('function')
    })

    it('Should return an action with type SELECT_CREW', () => {
      expect(selectCrew()).to.have.property('type', SELECT_CREW)
    })

    it('Should return an action with a default crew.', () => {
      expect(selectCrew().crew).to.exist
      expect(selectCrew().crew).to.have.property('id', 'al')
      expect(selectCrew().crew).to.have.property('name', 'All')
    })

    it('Should return an action with a provided filter.', () => {
      let selectCrewResult = selectCrew(batmanCrew)
      expect(selectCrewResult.crew).to.exist
      expect(selectCrewResult.crew).to.have.property('id', 'bt')
      expect(selectCrewResult.crew).to.have.property('name', 'Batman')
    })

    describe('Update the crew', () => {
      let updatedState = strategiesReducer(loadedState, selectCrew(batmanCrew))
      let revertedState = strategiesReducer(updatedState, selectCrew())

      it('Should update the states crew when changed.', () => {
        expect(updatedState.crew).to.exist
        expect(updatedState.crew).to.have.property('id', 'bt')
        expect(updatedState.crew).to.have.property('name', 'Batman')
      })

      it('Should update the visible strategies when changed.', () => {
        expect(updatedState.strategies.length).to.be.below(updatedState.allStrategies.length)
      })

      it('Should not update the allStrategies when changed.', () => {
        expect(updatedState.allStrategies.length).to.equal(loadedState.allStrategies.length)
      })

      it('Should restore all visible strategies when reset.', () => {
        expect(revertedState.strategies.length).to.equal(loadedState.allStrategies.length)
      })
    })
  })
})
