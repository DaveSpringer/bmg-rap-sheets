import { loadedCharacters } from '../../../resources/characters'
import { allCrews } from '../../../resources/crews'
import { allTraits } from '../../../resources/traits'
import { allWeapons } from '../../../resources/weapons'
import { allEquipment } from '../../../resources/equipment'

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
    if (traitName.indexOf('Coward') !== -1) {
      retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === 'Coward\'s Reward'))
    } else {
      retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === traitName))
    }

    if (retrievedTrait !== undefined) {
      foundTrait = retrievedTrait
    }
  } else {
    let keys = Object.keys(traitName)
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
  if (foundTrait.grants !== undefined && foundTrait.grants.length > 0) {
    foundTrait.grants.forEach((traitKey) => {
      let retrievedTrait = allTraits.find((trait) => (trait !== null && trait.name === traitKey))
      if (retrievedTrait !== undefined) {
        populatedTraits.push(retrievedTrait)
      }
    })
  }
  return populatedTraits
}

const findWeapon = (populatedWeapons, weaponKey) => {
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

const populateCharacter = (characters, character) => {
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

let loadAllResources = (state, action) => {
  // Now... Add all traits to each character... Ooph...
  // TODO: Optimize the %@#$^ out of this in the future.

  let allCharacters = loadedCharacters.reduce(populateCharacter, [])
  return Object.assign({}, state, {
    allTraits : allTraits,
    allCrews : allCrews,
    allCharacters : allCharacters,
    allWeapons : allWeapons,
    allEquipment : allEquipment
  })
}

export default loadAllResources
