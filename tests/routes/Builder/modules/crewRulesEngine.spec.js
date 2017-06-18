import {
  selectCharacter,
  selectCrew,
  loadResources,
  followCrewRules,
  default as builderReducer
} from 'routes/Builder/modules/builder'

import { characterSelected, toggleFollowRules } from 'routes/Builder/modules/crewRulesEngine'

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
  freeAgents: 0,
  followRules: true,
  crewCode: '',
  crewEquipment: [],
  availableEquipment: [],
  equipment: []
}

const loadedState = builderReducer(defaultState, loadResources())
const allCharacters = loadedState.allCharacters
const selectBatmanCrew = builderReducer(loadedState, selectCrew({name: 'Batman', id: 'bt'}))
const findKeyFromAlias = (alias) => (character) => {
  return character.alias === alias
}
const selectKeyFromAlias = (alias) => {
  let aliasFind = findKeyFromAlias(alias)
  let tempChar = allCharacters.find(aliasFind)
  if (tempChar !== undefined) {
    return tempChar.key
  } else {
    return undefined
  }
}
const batfleck = selectKeyFromAlias('Batman (Batfleck)')
const batgirl = selectKeyFromAlias('Batgirl')
const gordonKey = selectKeyFromAlias('Gordon')
const huntressKey = selectKeyFromAlias('Huntress')
const cyborgKey = selectKeyFromAlias('Cyborg')
const batgirlComicKey = selectKeyFromAlias('Batgirl (Comic)')
const adamWestKey = selectKeyFromAlias('Batman (Adam West)')
const selectBatmanResult = characterSelected(selectBatmanCrew, selectCharacter(batfleck))
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
const filterCharacterAlias = (alias) => (character) => character.alias === alias



// characters.find(findKeyFromAlias(alias))

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
        let selectBatmanAgainResult = characterSelected(selectBatmanResult, selectCharacter(batfleck))
        expect(selectBatmanAgainResult.leaders).to.equal(selectBatmanCrew.leaders)
        expect(selectBatmanAgainResult.sidekicks).to.equal(selectBatmanCrew.sidekicks)
        expect(selectBatmanAgainResult.freeAgents).to.equal(selectBatmanCrew.freeAgents)
        expect(selectBatmanAgainResult.characters.length).to.equal(selectBatmanCrew.characters.length)
        expect(selectBatmanAgainResult.availableCharacters.length).to.equal(selectBatmanCrew.availableCharacters.length)
        expect(selectBatmanAgainResult.hiddenCharacters.length).to.equal(selectBatmanCrew.hiddenCharacters.length)
        expect(selectBatmanAgainResult.availableCharacters.reduce(countLeaders, 0)).to.equal(selectBatmanCrew.availableCharacters.reduce(countLeaders, 0))
        expect(countCharacters(selectBatmanAgainResult)).to.equal(countCharacters(selectBatmanResult))
      })
      let addSidekickResult = characterSelected(selectBatmanResult, selectCharacter(batgirl))

      it('Should handle adding a Sidekick after a Leader', () => {
        expect(countCharacters(addSidekickResult)).to.equal(countCharacters(selectBatmanResult))
      })

      it('Should handle adding Sidekick, then selecting Batman.', () => {
        let deselectBatmanResult = characterSelected(addSidekickResult, selectCharacter(batfleck))
        expect(countCharacters(deselectBatmanResult)).to.equal(countCharacters(addSidekickResult))
        expect(deselectBatmanResult.hiddenCharacters.length).to.equal(0)
      })

      it('Should not be able to add an unavailable character.', () => {
        expect(selectBatmanResult.availableCharacters.filter(filterCharacterAlias('Batman (Adam West)')).length).to.equal(0)
        expect(selectBatmanResult.hiddenCharacters.filter(filterCharacterAlias('Batman (Adam West)')).length).to.equal(1)
        let selectAdamWestErr = characterSelected(selectBatmanResult, selectCharacter(adamWestKey))
        expect(selectAdamWestErr.availableCharacters.filter(filterCharacterAlias('Batman (Adam West)')).length).to.equal(0)
        expect(selectAdamWestErr.hiddenCharacters.filter(filterCharacterAlias('Batman (Adam West)')).length).to.equal(1)
        expect(countCharacters(selectAdamWestErr)).to.equal(countCharacters(selectBatmanResult))
      })
    })

    describe('(Sub-Function) Adding Sidekick', () => {
      let addSidekickResult = characterSelected(selectBatmanResult, selectCharacter(batgirlComicKey))
      let firstSidekickResult = characterSelected(selectBatmanCrew, selectCharacter(batgirlComicKey))
      let secondSidekickResult = characterSelected(firstSidekickResult, selectCharacter(gordonKey))
      let removeFirstSidekick = characterSelected(secondSidekickResult, selectCharacter(batgirlComicKey))
      let removeSecondSidekick = characterSelected(secondSidekickResult, selectCharacter(batgirlComicKey))
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

      it('Should not be able to add any leaders when two Sidekicks are selected.', () => {
        let leaderCount = secondSidekickResult.availableCharacters.reduce(countLeaders, 0)
        expect(leaderCount).to.equal(0)
      })

      it('Should be able to remove first sidekick and get leaders back.', () => {
        expect(removeFirstSidekick.availableCharacters.reduce(countLeaders, 0)).to.equal(selectBatmanCrew.availableCharacters.reduce(countLeaders, 0))
      })

    })

    describe('(Sub-Function) Adding Generic Free Agent', () => {
      let addFreeAgentResult = characterSelected(selectBatmanResult, selectCharacter(huntressKey))
      let startingFreeAgents = selectBatmanResult.characters.reduce(countFreeAgents, 0)
      let removeFreeAgentResult = characterSelected(addFreeAgentResult, selectCharacter(huntressKey))

      it('Should be able to select Huntress.', () => {
        expect(addFreeAgentResult.sidekicks).to.equal(0)
        expect(addFreeAgentResult.leaders).to.equal(1)
        expect(addFreeAgentResult.freeAgents).to.equal(startingFreeAgents + 1)
        expect(addFreeAgentResult.characters.length).to.equal(2)
        expect(countCharacters(addFreeAgentResult)).to.equal(countCharacters(selectBatmanCrew))
      })

      it('Should update crewCode with Huntress selection.', () => {
        expect(addFreeAgentResult.crewCode).to.equal(selectBatmanResult.crewCode + '+071')
      })

      it('Should be able to unselect Huntress', () => {
        expect(removeFreeAgentResult.sidekicks).to.equal(0)
        expect(removeFreeAgentResult.leaders).to.equal(1)
        expect(removeFreeAgentResult.freeAgents).to.equal(startingFreeAgents)
        expect(removeFreeAgentResult.characters.length).to.equal(1)
        expect(countCharacters(removeFreeAgentResult)).to.equal(countCharacters(selectBatmanCrew))
      })

      it('Should remove crewCode with Huntress selection.', () => {
        expect(removeFreeAgentResult.crewCode.indexOf('071')).to.equal(-1)
      })
    })

    describe('(Sub-Function) Add henchmen to crew.', () => {
      let addHenchman = characterSelected(selectBatmanResult, selectCharacter('046B'))
      let addFatCopOne = characterSelected(addHenchman, selectCharacter('005B1'))
      let addFatCopTwo = characterSelected(addFatCopOne, selectCharacter('005B2'))

      it('Should be able to select a Henchman.', () => {
        expect(addHenchman.characters.length).to.equal(selectBatmanResult.characters.length + 1)
      })

      it('Selected henchman should not reduce the other henchmen available.', () => {
        expect(addHenchman.availableCharacters.length).to.equal(selectBatmanResult.availableCharacters.length - 1)
      })

      it('Should be able to add a second henchman.', () => {
        expect(addFatCopOne.characters.length).to.equal(addHenchman.characters.length + 1)
        expect(addFatCopOne.availableCharacters.length).to.equal(addHenchman.availableCharacters.length - 1)
      })

      it('Should be able to add a multiple henchman.', () => {
        expect(addFatCopTwo.characters.length).to.equal(addFatCopOne.characters.length + 1)
        expect(addFatCopTwo.availableCharacters.length).to.equal(addFatCopOne.availableCharacters.length - 1)
      })
    })
  })

  describe('(Function) Toggle Follow Rules flag.', () => {

    it('Should be able to toggle rules with noone selected.', () => {
      let toggleWithoutSelection = toggleFollowRules(loadedState, followCrewRules(false))
      expect(toggleWithoutSelection.followRules).to.equal(false)
    })

    it('Should add any hidden characters when switching from true to false.', () => {
      let addSidekickResult = characterSelected(selectBatmanResult, selectCharacter(batgirlComicKey))
      let firstSidekickResult = characterSelected(selectBatmanCrew, selectCharacter(batgirlComicKey))
      let secondSidekickResult = characterSelected(firstSidekickResult, selectCharacter(gordonKey))
      let addFreeAgentResult = characterSelected(selectBatmanResult, selectCharacter(huntressKey))
      let toggleToFalseWithSelection = toggleFollowRules(addFreeAgentResult, followCrewRules(false))

      expect(toggleToFalseWithSelection.hiddenCharacters.length).to.equal(0)
      expect(countCharacters(toggleToFalseWithSelection)).to.equal(countCharacters(addSidekickResult))
    })

    it('Should be able to add many leaders when false.', () => {
      let toggleToFalse = toggleFollowRules(selectBatmanResult, followCrewRules(false))
      let addAnotherBatman = characterSelected(toggleToFalse, selectCharacter(adamWestKey))
      expect(addAnotherBatman.characters.length).to.equal(2)
    })

    it('Should be able to remove an extra leader when false.', () => {
      let toggleToFalse = toggleFollowRules(selectBatmanResult, followCrewRules(false))
      let addAnotherBatman = characterSelected(toggleToFalse, selectCharacter(adamWestKey))
      let addAnotherBatmanAgain = characterSelected(addAnotherBatman, selectCharacter('001'))
      expect(addAnotherBatmanAgain.characters.length).to.equal(3)
    })

    it('Should be able to add many sidekicks when false.', () => {
      let toggleToFalse = toggleFollowRules(selectBatmanResult, followCrewRules(false))
      let firstSidekickResult = characterSelected(toggleToFalse, selectCharacter(batgirlComicKey))
      let secondSidekickResult = characterSelected(firstSidekickResult, selectCharacter(gordonKey))
      let thirdSidekickResult = characterSelected(secondSidekickResult, selectCharacter(cyborgKey))
      expect(thirdSidekickResult.characters.reduce(countSidekicks, 0)).to.equal(3)
    })

    it('Should be able to flip to true when a valid crew is selected.', () => {
      let toggleToFalse = toggleFollowRules(selectBatmanResult, followCrewRules(false))
      let firstSidekickResult = characterSelected(toggleToFalse, selectCharacter(batgirlComicKey))
      let addFreeAgentResult = characterSelected(firstSidekickResult, selectCharacter(huntressKey))
      let toggleToTrue = toggleFollowRules(addFreeAgentResult, followCrewRules(true))

      expect(toggleToTrue.followRules).to.equal(true)
      expect(toggleToTrue.availableCharacters.reduce(countLeaders, 0)).to.equal(0)
      expect(toggleToTrue.availableCharacters.reduce(countSidekicks, 0)).to.equal(0)
      expect(toggleToTrue.characters.reduce(countLeaders, 0)).to.equal(1)
      expect(toggleToTrue.leaders).to.equal(1)
      expect(toggleToTrue.characters.reduce(countSidekicks, 0)).to.equal(1)
      expect(toggleToTrue.sidekicks).to.equal(1)
      expect(toggleToTrue.characters.reduce(countFreeAgents, 0)).to.equal(1)
      expect(toggleToTrue.freeAgents).to.equal(1)
    })

    it('Should not allow a user to enable when there are too many leaders.', () => {
      let toggleToFalse = toggleFollowRules(selectBatmanResult, followCrewRules(false))
      let addAnotherBatman = characterSelected(toggleToFalse, selectCharacter(adamWestKey))
      let toggleToTrue = toggleFollowRules(addAnotherBatman, followCrewRules(true))
      expect(toggleToTrue.followRules).to.equal(false)
    })

    it('Should not allow a user to enable when there are too many sidekicks.', () => {
      let toggleToFalse = toggleFollowRules(selectBatmanResult, followCrewRules(false))
      let firstSidekickResult = characterSelected(toggleToFalse, selectCharacter(batgirlComicKey))
      let secondSidekickResult = characterSelected(firstSidekickResult, selectCharacter(gordonKey))
      let thirdSidekickResult = characterSelected(secondSidekickResult, selectCharacter(cyborgKey))
      let toggleToTrue = toggleFollowRules(thirdSidekickResult, followCrewRules(true))
      expect(toggleToTrue.followRules).to.equal(false)
    })
  })

})
