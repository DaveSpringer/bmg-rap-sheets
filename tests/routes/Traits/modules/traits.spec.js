import {
  LOAD_TRAITS,
  UPDATE_FILTER,
  SELECT_CREW,
  loadTraits,
  updateFilter,
  selectCrew,
  default as traitsReducer
} from 'routes/Traits/modules/traits'

describe('(Redux Module) Traits', () => {
  it('Should export a constant LOAD_TRAITS', () => {
    expect(LOAD_TRAITS).to.equal('LOAD_TRAITS')
  })

  it('Should export a constant UPDATE_FILTER', () => {
    expect(UPDATE_FILTER).to.equal('UPDATE_FILTER')
  })

  it('Should export a constant SELECT_CREW', () => {
    expect(SELECT_CREW).to.equal('SELECT_CREW')
  })

  it('Should return a default state if no state is provided.', () => {
    let state = traitsReducer(undefined, {})
    expect(state).to.be.an('object')
    expect(state.filter).to.equal('')
    expect(state.allTraits.length).to.be.above(0)
    expect(state.visibleTraits.length).to.be.above(0)
    expect(state.allTraits.length).to.equal(state.visibleTraits.length)
  })

  describe('(ActionCreator) loadTraits', () => {
    it('Should be exported as a function.', () => {
      expect(loadTraits).to.be.a('function')
    })

    it('Should return an action with type LOAD_TRAITS', () => {
      expect(loadTraits()).to.have.property('type', LOAD_TRAITS)
    })

    it('Should load the state as expected.', () => {
      let loadedState = traitsReducer(undefined, loadTraits())
      expect(loadedState).to.be.an('object')
      expect(loadedState.allTraits.length).to.be.above(0)
      expect(loadedState.allTraits.length).to.equal(loadedState.visibleTraits.length)
    })
  })

  describe('(ActionCreator) updateFilter', () => {
    let loadedState = traitsReducer(undefined, loadTraits())
    it('Should be exported as a function.', () => {
      expect(updateFilter).to.be.a('function')
    })

    it('Should return an action with type LOAD_TRAITS', () => {
      expect(updateFilter()).to.have.property('type', UPDATE_FILTER)
    })

    it('Should return an action with a default filter.', () => {
      expect(updateFilter()).to.have.property('filter', '')
    })

    it('Should return an action with a provided filter.', () => {
      expect(updateFilter('asdf')).to.have.property('filter', 'asdf')
    })

    describe('Update the filter', () => {
      let updatedState = traitsReducer(loadedState, updateFilter('attack'))
      let revertedState = traitsReducer(updatedState, updateFilter())

      it('Should update the states filter when changed.', () => {
        expect(updatedState.filter).to.equal('attack')
      })

      it('Should update the visible traits when changed.', () => {
        expect(updatedState.visibleTraits.length).to.be.below(updatedState.allTraits.length)
      })

      it('Should not update the allTraits when changed.', () => {
        expect(updatedState.allTraits.length).to.equal(loadedState.allTraits.length)
      })

      it('Should restore all visible traits when reset.', () => {
        expect(revertedState.visibleTraits.length).to.equal(loadedState.allTraits.length)
      })
    })
  })

  describe('(ActionCreator) selectCrew', () => {
    let loadedState = traitsReducer(undefined, loadTraits())
    it('Should be exported as a function.', () => [
      expect(selectCrew).to.be.a('function')
    ])

    it('Should return an action with type SELECT_CREW', () => {
      expect(selectCrew()).to.have.property('type', SELECT_CREW)
    })
  })
})
