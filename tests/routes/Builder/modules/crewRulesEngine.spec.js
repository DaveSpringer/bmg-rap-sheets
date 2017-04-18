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
const selectBatmanResult = characterSelected(selectBatmanCrew, selectCharacter('Batman (Batfleck)'))
const countCharacters = (stateResult) => stateResult.availableCharacters.length + stateResult.characters.length + stateResult.hiddenCharacters.length
// I couldn't get currying to work here. Still uncertain as to why...
const countType = (rankType) => { (count, character) => { if (character.rank === rankType) { return count + 1 } else { return count } } }
const countLeaders = (count, character) => {
  if (character.rank === 'Leader') {
    return count + 1
  } else {
    return count
  }
}
const countSidekicks = (count, character) => {
  if (character.rank === 'Sidekick') {
    return count + 1
  } else {
    return count
  }
}
const countFreeAgents = (count, character) => {
  if (character.rank === 'Free Agent') {
    return count + 1
  } else {
    return count
  }
}

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


    describe('(Sub-Function) Adding Leader', () => {


      it('Should handle a leader selection', () => {

        expect(selectBatmanResult).to.be.an('object')
        expect(selectBatmanResult.leaders).to.equal(1)
        expect(selectBatmanResult.sidekicks).to.equal(0)
        expect(selectBatmanResult.freeAgents).to.equal(0)
        expect(selectBatmanResult.characters.length).to.equal(1)
        expect(selectBatmanResult.characters[0].name).to.equal('Bruce Wayne')
        expect(countCharacters(selectBatmanResult)).to.equal(countCharacters(selectBatmanCrew))
        expect(selectBatmanResult.availableCharacters.length).to.be.below(selectBatmanCrew.availableCharacters.length)
      })

      it('Should handle selecting Batman again.', () => {
        let selectBatmanAgainResult = characterSelected(selectBatmanResult, selectCharacter('Batman (Batfleck)'))
        expect(selectBatmanAgainResult.leaders).to.equal(selectBatmanCrew.leaders)
        expect(selectBatmanAgainResult.sidekicks).to.equal(selectBatmanCrew.sidekicks)
        expect(selectBatmanAgainResult.freeAgents).to.equal(selectBatmanCrew.freeAgents)
        expect(selectBatmanAgainResult.characters.length).to.equal(selectBatmanCrew.characters.length)
        expect(selectBatmanAgainResult.availableCharacters.length).to.equal(selectBatmanCrew.availableCharacters.length)
        expect(selectBatmanAgainResult.hiddenCharacters.length).to.equal(selectBatmanCrew.hiddenCharacters.length)
        expect(selectBatmanAgainResult.availableCharacters.reduce(countLeaders, 0)).to.equal(selectBatmanCrew.availableCharacters.reduce(countLeaders, 0))
        expect(countCharacters(selectBatmanAgainResult)).to.equal(countCharacters(selectBatmanResult))
      })
        let addSidekickResult = characterSelected(selectBatmanResult, selectCharacter('Batgirl'))

      it('Should handle adding a Sidekick after a Leader', () => {
        expect(countCharacters(addSidekickResult)).to.equal(countCharacters(selectBatmanResult))
      })

      it('Should handle adding Sidekick, then selecting Batman.', () => {
        let deselectBatmanResult = characterSelected(addSidekickResult, selectCharacter('Batman (Batfleck)'))
        expect(countCharacters(deselectBatmanResult)).to.equal(countCharacters(addSidekickResult))
        expect(deselectBatmanResult.hiddenCharacters.length).to.equal(0)
      })

    })

    describe('(Sub-Function) Adding Sidekick', () => {
      let addSidekickResult = characterSelected(selectBatmanResult, selectCharacter('Batgirl (Comic)'))
      let firstSidekickResult = characterSelected(selectBatmanCrew, selectCharacter('Batgirl (Comic)'))
      let secondSidekickResult = characterSelected(firstSidekickResult, selectCharacter('Gordon'))
      let removeFirstSidekick = characterSelected(secondSidekickResult, selectCharacter('Batgirl (Comic)'))
      let removeSecondSidekick = characterSelected(secondSidekickResult, selectCharacter('Batgirl (Comic)'))
      let startingSidekicks = selectBatmanCrew.availableCharacters.reduce(countSidekicks, 0)

      it('Should be able to add a Sidekick', () => {
        expect(firstSidekickResult.sidekicks).to.equal(1)
        expect(firstSidekickResult.leaders).to.equal(0)
        expect(firstSidekickResult.freeAgents).to.equal(0)
        expect(firstSidekickResult.characters.length).to.equal(1)
        expect(firstSidekickResult.availableCharacters.reduce(countSidekicks, 0)).to.equal(startingSidekicks - 1)
        expect(countCharacters(firstSidekickResult)).to.equal(countCharacters(selectBatmanCrew))
      })

      it('Should be able to add a Sidekick after selecting a Leader.', () => {
        expect(addSidekickResult.leaders).to.equal(1)
        expect(addSidekickResult.sidekicks).to.equal(1)
        expect(addSidekickResult.characters.length).to.equal(2)
        expect(countCharacters(addSidekickResult)).to.equal(countCharacters(selectBatmanResult))
      })

      it('Should not be able to add additional Sidekicks when a Sidekick and Leader are in the crew.', () => {
        let reduceSidekick = addSidekickResult.availableCharacters.reduce(countSidekicks, 0)
        expect(reduceSidekick).to.equal(0)
      })

      it('Should not be able to add additional Sidekicks when two Sidekicks are selected.', () => {
        let reduceSidekick = secondSidekickResult.availableCharacters.reduce(countSidekicks, 0)
        expect(reduceSidekick).to.equal(0)
      })

      it('Should be able to remove first sidekick and get leaders back.', () => {
        expect(removeFirstSidekick.availableCharacters.reduce(countLeaders, 0)).to.equal(selectBatmanCrew.availableCharacters.reduce(countLeaders, 0))
      })

    })

  })

})
