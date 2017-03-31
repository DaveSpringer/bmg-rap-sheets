import {
  selectCharacter,
  selectCrew,
  loadResources,
  default as builderReducer
} from 'routes/Builder/modules/builder'

import { default as characterSelected } from 'routes/Builder/modules/crewRulesEngine'

const defaultState = {
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

const loadedState = builderReducer(defaultState, loadResources())
const selectBatmanCrew = builderReducer(loadedState, selectCrew({name: 'Batman', id: 'bt'}))

describe('(Redux Action Sub-Module) crewRulesEngine', () => {

  describe('(Function) characterSelected', () => {
    it('Should be a funciton.', () => {
      expect(characterSelected).to.be.a('function')
    })

    it('Should handle an invalid character selection', () => {
      let selectCharacterAction = selectCharacter('Invalid character name')
      let stateResult = characterSelected(selectBatmanCrew, selectCharacterAction)
      expect(stateResult).to.be.an('object')
    })


    let selectBatmanResult = characterSelected(selectBatmanCrew, selectCharacter('Batman (Ben Affleck)'))

    it('Should handle a leader selection', () => {

      expect(selectBatmanResult).to.be.an('object')
      expect(selectBatmanResult.leaders).to.equal(1)
      expect(selectBatmanResult.sidekicks).to.equal(0)
      expect(selectBatmanResult.freeAgents).to.equal(0)
      expect(selectBatmanResult.characters.length).to.equal(1)
      expect(selectBatmanResult.characters[0].name).to.equal('Bruce Wayne')
      expect(selectBatmanResult.availableCharacters.length).to.be.below(selectBatmanCrew.availableCharacters.length)
    })

    it('Should handle selecting Batman again.', () => {
      let selectBatmanAgainResult = characterSelected(selectBatmanCrew, selectCharacter('Batman (Ben Affleck)'))

      expect(selectBatmanAgainResult.leaders).to.equal(selectBatmanCrew.leaders)
      expect(selectBatmanAgainResult.sidekicks).to.equal(selectBatmanCrew.sidekicks)
      expect(selectBatmanAgainResult.freeAgents).to.equal(selectBatmanCrew.freeAgents)
      expect(selectBatmanAgainResult.characters.length).to.equal(selectBatmanCrew.characters.length)
      expect(selectBatmanAgainResult.availableCharacters.length).to.equal(selectBatmanCrew.availableCharacters.length)
      expect(selectBatmanAgainResult.hiddenCharacters.length).to.equal(selectBatmanCrew.hiddenCharacters.length)
      // expect(addSidekickResult.availableCharacters.reduce((count, character) => { return character.rank === 'Leader' ? ++count : count }, 0)
      expect(selectBatmanAgainResult).to.equal(selectBatmanCrew)
    })

    it('Should be able to add a Sidekick after selecting a Leader.', () => {
      let addSidekickResult = characterSelected(selectBatmanResult, selectCharacter('Batgirl'))

      expect(addSidekickResult.leaders).to.equal(1)
      expect(addSidekickResult.sidekicks).to.equal(1)
      expect(addSidekickResult.availableCharacters.reduce(((count, character) => {
        if (character.rank === 'Sidekick') {
          return count + 1
        } else {
          return count
        }
      }), 0)
    })

  })

})
