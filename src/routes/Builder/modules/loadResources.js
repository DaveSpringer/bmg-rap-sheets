import { loadedCharacters } from '../../../resources/characters'
import { allCrews } from '../../../resources/crews'
import { allTraits } from '../../../resources/traits'

const findTrait = (populatedTraits, traitName) => {
  let foundTrait = {
    name : traitName,
    phase : 'Unknown',
    rule : 'Unknown',
    page : 'Unknown',
    cost : ''
  }
  if (typeof traitName === 'string') {
    let retrievedTrait
    // Coward's Reward is a problematic trait. This is a hack. I wish I had a better solution.
    if (traitName.indexOf("Coward") !== -1) {
      retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === 'Coward\'s Reward'))
    } else {
      retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === traitName))
    }

    if (retrievedTrait !== undefined) {
      foundTrait = retrievedTrait
    }
  } else {
    let keys = Object.keys(traitName)
    // TODO -coudl this be breaking the tests?
    keys.shift()
    let replaceTrait = allTraits.find((trait) => (trait != null && trait.name === traitName.name))
    let replaceAllInKey = (result, key) => result.replace(new RegExp(`-${key}-`, 'g'), traitName[key])
    foundTrait = {
      name : keys.reduce(replaceAllInKey, replaceTrait.nameFunc),
      phase : replaceTrait.phase,
      rule : keys.reduce(replaceAllInKey, replaceTrait.rule),
      page : replaceTrait.page,
      cost : replaceTrait.cost
    }
  }
  populatedTraits.push(foundTrait)
  return populatedTraits
}

const populateTraits = (characters, character) => {
  if (character === undefined) { return characters }
  if (character.traits !== undefined) {
    let poppedTraits = character.traits.reduce(findTrait, [])
    character.traitText = poppedTraits
  } else {
    console.log('This character lacks traits? ' + JSON.stringify(character))
  }
  characters.push(character)
  return characters
}

let loadAllResources = (state, action) => {
  // Now... Add all traits to each character... Ooph...
  // TODO: Optimize the %@#$^ out of this in the future.

  let allCharacters = loadedCharacters.reduce(populateTraits, [])
  return Object.assign({}, state, {
    allTraits : allTraits,
    allCrews : allCrews,
    allCharacters : allCharacters
  })
}

export default loadAllResources
