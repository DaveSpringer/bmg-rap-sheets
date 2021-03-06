import { loadedCharacters } from '../resources/characters'
import { allCrews } from '../resources/crews'
import { allTraits } from '../resources/traits'
import { allWeapons } from '../resources/weapons'
import { allEquipment } from '../resources/equipment'
import { allCharacterActions } from '../resources/characterActions'

// Constants
export const LOAD_RESOURCES = 'LOAD_RESOURCES'

// Action populators
export function loadResources () {
  return {
    type: LOAD_RESOURCES
  }
}

export const populateFuncTrait = (funcTrait, allTraits) => {
  let keys = Object.keys(funcTrait)
  keys.shift()
  let replaceTrait = allTraits.find((trait) => (trait != null && trait.name === funcTrait.name))
  let replaceAllInKey = (result, key) => result.replace(new RegExp(`-${key}-`, 'g'), funcTrait[key])
  return {
    name : keys.reduce(replaceAllInKey, replaceTrait.nameFunc),
    phase : replaceTrait.phase,
    rule : keys.reduce(replaceAllInKey, replaceTrait.rule),
    page : replaceTrait.page,
    cost : replaceTrait.cost
  }
}

// Helper methods
export const findTrait = (populatedTraits, traitName) => {
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
    if (traitName.indexOf('Coward') !== -1) {
      retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === 'Coward\'s Reward'))
    } else {
      retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === traitName))
    }

    if (retrievedTrait !== undefined) {
      foundTrait = retrievedTrait
    }
  } else {
    foundTrait = populateFuncTrait(traitName, allTraits)
  }
  populatedTraits.push(foundTrait)
  if (foundTrait.grants !== undefined && foundTrait.grants.length > 0) {
    foundTrait.grants.forEach((traitKey) => {
      if (typeof traitKey === 'string') {
        let retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === traitKey))
        if (retrievedTrait !== undefined) {
          populatedTraits.push(retrievedTrait)
        }
      } else {
        populatedTraits.push(populateFuncTrait(traitKey, allTraits))
      }
    })
  }
  return populatedTraits
}

export const findWeapon = (populatedWeapons, weaponKey) => {
  let foundWeapon = {
    name: weaponKey,
    key: weaponKey,
    damage: 'Unknown',
    rof: 0,
    ammo: 0,
    traits: 'Unknown'
  }

  let retrievedWeapon = allWeapons.find((weapon) => (weapon !== null && weapon.key === weaponKey))

  if (retrievedWeapon !== undefined) {
    foundWeapon = retrievedWeapon
  }

  populatedWeapons.push(foundWeapon)
  return populatedWeapons
}

export const populateCharacter = (characters, character) => {
  if (character === undefined) { return characters }
  if (character.traits !== undefined) {
    let poppedTraits = character.traits.reduce(findTrait, [])
    character.traitText = poppedTraits
  } else {
    console.log('This character lacks traits? ' + JSON.stringify(character))
  }
  if (character.weapons !== undefined) {
    let poppedWeapons = character.weapons.reduce(findWeapon, [])
    character.weaponText = poppedWeapons
  }
  characters.push(character)
  return characters
}

export const populateEquipment = (resultEquipment, equipment) => {
  if (equipment === undefined) { return resultEquipment }
  if (equipment.trait !== undefined) {
    if (typeof equipment.trait === 'string') {
      equipment.traitText = findTrait([], equipment.trait)
    } else if (Array.isArray(equipment.trait)) {
      equipment.traitText = equipment.trait.reduce(findTrait, [])
    } else {
      equipment.traitText = findTrait([], equipment.trait.name)
    }
  }
  let crewName = allCrews.find((compareCrew) => {
    return compareCrew.id === equipment.crew
  }).name
  equipment.crewName = crewName
  resultEquipment.push(equipment)
  return resultEquipment
}

// Stick the character actions directly on the related characters.
const populateAllCharacterActions = (allCharacters) => {
  let charActionKeys = Object.keys(allCharacterActions)
  charActionKeys.forEach((key) => {
    let char = allCharacters.find((char) => key === char.key)
    Object.assign(char, allCharacterActions[key])
  })
}

let loadAllResources = (state, action) => {
  // Now... Add all traits to each character... Ooph...
  // TODO: Optimize the %@#$^ out of this in the future.

  let allCharacters = loadedCharacters.reduce(populateCharacter, [])
  let poppedEquipment = allEquipment.reduce(populateEquipment, [])
  populateAllCharacterActions(allCharacters)
  return Object.assign({}, state, {
    allTraits : allTraits,
    allCrews : allCrews,
    allCharacters : allCharacters,
    allWeapons : allWeapons,
    allEquipment : poppedEquipment
  })
}

export default loadAllResources
