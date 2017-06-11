import React from 'react'
import EquipmentTrait from './EquipmentTrait'
import './style/EquipmentItem.scss'

class EquipmentItem extends React.Component {
  render () {
    let equipment = this.props.equipment
    let crewsString
    if (equipment.crew === undefined) {
      crewsString = 'Unknown'
    } else {
      crewsString = this.props.allCrews.find((compareCrew) => {
        return compareCrew.id === equipment.crew
      }).name
    }

    let findTrait = (traitName) => {
      let retrievedTrait
      // Coward's Reward is a problematic trait. This is a hack. I wish I had a better solution.
      if (traitName.indexOf('Coward') !== -1) {
        retrievedTrait = this.props.allTraits.find((trait) => (trait !== null && trait.name === 'Coward\'s Reward'))
      } else {
        retrievedTrait = this.props.allTraits.find((trait) => (trait !== null && trait.name === traitName))
      }
      return retrievedTrait
    }

    let populatedTraits = []
    if (equipment.trait !== undefined) {
      let traitList = []
      if (equipment.trait !== undefined) {
        if (typeof equipment.trait === 'string') {
          traitList.push(equipment.trait)
        } else if (typeof equipment.trait === 'object') {
          traitList.push(equipment.trait.name)
        } else {
          traitList = equipment.trait
        }
      }
      populatedTraits = traitList.reduce((resultTraits, trait) => {
        if (trait !== undefined) {
          if (typeof trait === 'string') {
            let foundTrait = findTrait(trait)
            if (foundTrait !== undefined) {
              resultTraits.push(foundTrait)
            } else {
              console.log('Warning: Trait ' + trait + ' was not found!')
            }
          } else {
            let foundTrait = findTrait(trait.name)
            if (foundTrait !== undefined) {
              resultTraits.push(foundTrait)
            } else {
              console.log('Warning: Trait ' + trait.name + ' was not found!')
            }
          }
        }
        return resultTraits
      }, [])
    }
    let traitsArea
    if (equipment.trait !== undefined) {
      traitsArea = (
        <div>
          <div className='equipEquipLabel'>Traits:</div>
          <div className='equipTraits'>
            {populatedTraits.map(trait =>
              <EquipmentTrait key={trait.name} trait={trait} />
        )}
          </div>
        </div>
      )
    } else {
      traitsArea = ''
    }
    return (
      <div className='foundEquipment'>
        <div key={equipment.key} className='equipment'>
          <div className='equipmentHeader'>
            <span className='equipName'>
              <span className='equipEquipLabel'>Name:</span>
              <span>{equipment.name}</span>
            </span>
            <span className='equipCrew'>
              <span className='equipEquipLabel'>Crew:</span>
              <span>{crewsString}</span>
            </span>
          </div>
          <div className='equipRule'>
            <span className='equipEquipLabel'>Rule:</span>
            <span>{equipment.rule}</span>
          </div>
          {traitsArea}
          <div className='equipCost'>
            <span className='equipRep'>
              <span className='equipEquipLabel'>Rep:</span>
              <span>{equipment.rep}</span>
            </span>
            <span className='equipFunding'>
              <span className='equipEquipLabel'>Funding:</span>
              <span>{equipment.funding}</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

EquipmentItem.propTypes = {
  equipment : React.PropTypes.object.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  allTraits : React.PropTypes.array.isRequired
}

export default EquipmentItem
