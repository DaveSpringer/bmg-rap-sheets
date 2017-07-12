import {
  ADD_CHARACTER,
  ADD_AVAILABLE_CHARACTER,
  REMOVE_CHARACTER,
  REMOVE_AVAILABLE_CHARACTER,
  default as characterRulesReducer
} from 'routes/Builder/modules/characterRules'

import {
  initialState,
  default as builderReducer
} from 'routes/Builder/modules/builder'

import {
  LOAD_RESOURCES,
  loadResources,
  default as loadAllResources
} from 'modules/loadResources'

let defaultState = initialState

let loadedState = builderReducer(defaultState, loadResources())
let pygAction = {
  type: ADD_CHARACTER,
  actions: [{
    key: '154B',
    props: { rank: 'Unknown' }
  }, {
    key: '154C',
    props: { rank: 'Unknown' }
  }, {
    key: '154D',
    props: { rank: 'Unknown' }
  }]
}
let pygRemoveAction = {
  type: REMOVE_CHARACTER,
  actions: [{
    key: '154B'
  }, {
    key: '154C'
  }, {
    key: '154D'
  }]
}
let baneAction = {
  type: ADD_AVAILABLE_CHARACTER,
  actions: [{
    key: '024'
  }]
}
let baneRemoveAction = {
  type: REMOVE_AVAILABLE_CHARACTER,
  actions: [{
    key: '024'
  }]
}
let luthorAction = {
  type: ADD_AVAILABLE_CHARACTER,
  actions: [{
    filter: ((char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman'),
    props: { rank : 'Henchman' }
  }, {
    filter: ((char) => char.crews.indexOf('oc') !== -1 && char.rank === 'Henchman'),
    props: { rank : 'Henchman' }
  }]
}
let luthorRemoveAction = {
  type: REMOVE_AVAILABLE_CHARACTER,
  actions: [{
    filter: ((char) => char.crews.indexOf('lf') !== -1 && char.rank === 'Henchman')
  }, {
    filter: ((char) => char.crews.indexOf('oc') !== -1 && char.rank === 'Henchman')
  }]
}

describe('(Redux Sub-Module) Character Rules', () => {

  describe('(Action) Add Character', () => {
    it('Should handle adding Professor Pyg.', () => {
      let resultState = characterRulesReducer(loadedState, pygAction)
      expect(resultState.characters.length).to.equal(3)
    })
  })

  describe('(Action) Add Available Character', () => {
    it('Should handle adding Poison Ivy for Bane.', () => {
      let resultState = characterRulesReducer(loadedState, baneAction)
      expect(resultState.availableCharacters).to.have.lengthOf(1)
    })

    it('Should handle adding Law and Organized Crime for Lex Luthor.', () => {
      let resultState = characterRulesReducer(loadedState, luthorAction)
      expect(resultState.availableCharacters).to.not.have.lengthOf(0)
      expect(resultState.availableCharacters).to.not.have.lengthOf(1)
    })
  })

  describe('(Action) Remove Character', () => {
    let addPygState = characterRulesReducer(loadedState, pygAction)
    it('Should handle removing Professor Pyg.', () => {
      let resultState = characterRulesReducer(addPygState, pygRemoveAction)
      expect(resultState.characters).to.have.lengthOf(0)
      expect(resultState.availableCharacters).to.have.lengthOf(0)
    })

    it('Should handle removing Pyg after moving the Dolls.', () => {
      let movedPygState = Object.assign({}, addPygState, {
        availableCharacters: addPygState.characters,
        characters: []
      })
      expect(movedPygState.availableCharacters).to.have.lengthOf(3)
      let resultState = characterRulesReducer(movedPygState, pygRemoveAction)
      expect(resultState.characters).to.have.lengthOf(0)
      expect(resultState.availableCharacters).to.have.lengthOf(0)
    })
  })

  describe('(Action) Remove Available Character.', () => {
    let addBaneState = characterRulesReducer(loadedState, baneAction)
    let addLuthorState = characterRulesReducer(loadedState, luthorAction)

    it('Should handle removing Bane.', () => {
      let resultState = characterRulesReducer(addBaneState, baneRemoveAction)
      expect(resultState.availableCharacters).to.have.lengthOf(0)
      expect(resultState.characters).to.have.lengthOf(0)
    })

    it('Should handle removing Bane after selecting Ivy.', () => {
      let movedIvyState = Object.assign({}, addBaneState, {
        characters: addBaneState.availableCharacters,
        availableCharacters: []
      })
      expect(movedIvyState.characters).to.have.lengthOf(1)
      let resultState = characterRulesReducer(movedIvyState, baneRemoveAction)
      expect(resultState.availableCharacters).to.have.lengthOf(0)
      expect(resultState.characters).to.have.lengthOf(0)
    })

    it('Should handle removing Lex.', () => {
      let resultState = characterRulesReducer(addLuthorState, luthorRemoveAction)
      expect(resultState.characters).to.have.lengthOf(0)
      expect(resultState.availableCharacters).to.have.lengthOf(0)
    })

    it('Should handle removing Lex after selecting all available.', () => {
      let movedAllState = Object.assign({}, addLuthorState, {
        characters: addLuthorState.availableCharacters,
        availableCharacters: []
      })
      expect(movedAllState.characters).to.not.have.lengthOf(0)
      expect(movedAllState.availableCharacters).to.have.lengthOf(0)
      let resultState = characterRulesReducer(movedAllState, luthorRemoveAction)
      expect(resultState.availableCharacters).to.have.lengthOf(0)
      expect(resultState.characters).to.have.lengthOf(0)
    })
  })
})
