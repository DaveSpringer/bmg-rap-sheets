import {
  selectCrew,
  selectCharacter,
  initialState,
  default as builderReducer
} from 'routes/Builder/modules/builder'
import { loadResources } from 'modules/loadResources'
import { selectEquipment } from 'routes/Builder/modules/selectEquipment'

const loadedState = builderReducer(initialState, loadResources())
const selectBatmanCrew = builderReducer(loadedState, selectCrew({name: 'Batman', id: 'bt'}))
const addBruceWayne = builderReducer(selectBatmanCrew, selectCharacter('P04'))
const addGordon = builderReducer(addBruceWayne, selectCharacter('046A'))
const addDelta = builderReducer(addGordon, selectCharacter('046B'))
const addCatwoman = builderReducer(addDelta, selectCharacter('008'))
const addAlfred = builderReducer(addCatwoman, selectCharacter('P01'))
const addAgentRon = builderReducer(addAlfred, selectCharacter('005A'))
const selectPoisonIvyCrew = builderReducer(loadedState, selectCrew({name: 'Poison Ivy', id: 'pi'}))
const addPoisonIvy = builderReducer(selectPoisonIvyCrew, selectCharacter('024'))
const addBorj = builderReducer(addPoisonIvy, selectCharacter('T02'))
const addSwampThing = builderReducer(addBorj, selectCharacter('077'))
const addPlant = builderReducer(addSwampThing, selectCharacter('068C1'))
const addInmate5 = builderReducer(addPlant, selectCharacter('033D'))
const selectScarecrowCrew = builderReducer(loadedState, selectCrew({name: 'Scarecrow', id: 'sc'}))
const selectArkhamKnightPreorder = builderReducer(selectScarecrowCrew, selectCharacter('P03'))

describe('(Redux Action Sub-Module) selectEquipment', () => {

  describe('(Function) selectEquipment', () => {
    it('Should be a function.', () => {
      expect(selectEquipment).to.be.a('function')
    })

    it('Should handle no inputs.', () => {
      let invalidInputs = selectEquipment()
      expect(invalidInputs).to.be.an('object')
    })

    it('Should return the same state when an invalid input is provided.', () => {
      let invalidState = builderReducer(addAgentRon, selectEquipment())
      expect(invalidState).to.equal(addAgentRon)
    })

    it('Should add Gordon when the Heliport equipment is selected.', () => {
      let heliportEquip = addAgentRon.availableEquipment.find((equip) => equip.name === 'Heliport')
      expect(heliportEquip).to.be.an('object')

      let resultState = builderReducer(addAgentRon, selectEquipment(heliportEquip))
      expect(resultState.validEquipChars).to.be.an('array')
      expect(resultState.validEquipChars.length).to.equal(1)
    })

    it('Should add Gordon and Catwoman when Batman Inc. is selected.', () => {
      let batmanInc = addAgentRon.availableEquipment.find((equip) => equip.name === 'Batman Inc.')
      expect(batmanInc).to.be.an('object')

      let resultState = builderReducer(addAgentRon, selectEquipment(batmanInc))
      expect(resultState.validEquipChars).to.be.an('array')
      expect(resultState.validEquipChars.length).to.equal(2)
    })

    describe('(Crew-Specific) Work through Poison Ivys Complexity.', () => {

      it('Should be able to add Titanic Mutation to Plants only.', () => {
        let titanicMutation = addInmate5.availableEquipment.find((equip) => equip.name === 'Titanic Mutation')
        expect(titanicMutation).to.be.an('object')

        let resultState = builderReducer(addInmate5, selectEquipment(titanicMutation))
        expect(resultState.validEquipChars.length).to.equal(2)
      })

      it('Should be able to add Grapple-Gun to non-Plants only.', () => {
        let grappleGun = addInmate5.availableEquipment.find((equip) => equip.name === 'Grapple-Gun')
        expect(grappleGun).to.be.an('object')

        let resultState = builderReducer(addInmate5, selectEquipment(grappleGun))
        expect(resultState.validEquipChars.length).to.equal(1)
      })
    })

    describe('(Crew-Specific) Select Arkham Knight equipment.', () => {
      it('Should be able to add Hook Pistol to the Arkham Knight.', () => {
        let hookPistol = selectArkhamKnightPreorder.availableEquipment.find((equip) => equip.name === 'Hook Pistol')
        expect(hookPistol).to.be.an('object')

        let resultState = builderReducer(selectArkhamKnightPreorder, selectEquipment(hookPistol))
        expect(resultState.validEquipChars.length).to.equal(1)
      })
    })
  })

})
