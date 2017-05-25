import {
  default as loadAllResources
} from 'routes/Builder/modules/loadResources'

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
  followRules: true
}

describe('(Redux Action Sub-Module) loadResources', () => {

  describe('(Function) loadAllResources', () => {
    let loadedState = loadAllResources(defaultState, {})
    it('Should load all resources.', () => {
      expect(loadedState).to.be.an('object')
    })

    it('Should have no duplicate characters.', () => {
      let nameAndAliasArray = []
      let characterKey
      let keyIndex = -1

      loadedState.allCharacters.forEach((character) => {
        characterKey = character.name + '-' + character.alias
        keyIndex = nameAndAliasArray.indexOf(characterKey)
        if (keyIndex !== -1) {
          console.log('Found unexpected duplicate character: ' + characterKey)
          expect(keyIndex).to.equal(-1)
        } else {
          nameAndAliasArray.push(characterKey)
        }
      })
    })

    it('Should populate all granted traits.', () => {
      let grantedTraits
      let keyIndex
      let traits
      loadedState.allCharacters.forEach((char) => {
        grantedTraits = []
        traits = []
        char.traitText.forEach((trait) => {
          traits.push(trait.name)
          if (trait.grants !== undefined && trait.grants.length > 0) {
            grantedTraits = grantedTraits.concat(trait.grants)
          }
        })

        grantedTraits.forEach((gTrait) => {
          keyIndex = traits.indexOf(gTrait)
          if (keyIndex === -1) {
            console.log('Expected ' + gTrait + ' to be added for character: ' + char.name)
            expect(keyIndex).to.not.equal(-1)
          }
        })
      })
    })
  })
})
