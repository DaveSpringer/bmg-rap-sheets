import React from 'react'
import EquipmentTrait from './EquipmentTrait'
import './style/EquipmentItem.scss'

class EquipmentItem extends React.Component {
  render () {
    let equipment = this.props.equipment
    let crewsArea = ''

    // If allCrews isn't populated, use an empty crew.
    if (equipment.crew !== undefined && this.props.allCrews !== undefined) {
      let crewsString = this.props.allCrews.find((compareCrew) => {
        return compareCrew.id === equipment.crew
      }).name
      crewsArea = (
        <span className='equipCrew'>
          <span className='equipEquipLabel'>Crew:</span>
          <span>{crewsString}</span>
        </span>
      )
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
    let traitsArea
    if (this.props.allTraits !== undefined) {
      if (equipment.trait !== undefined) {
        let traitList = []
        if (equipment.trait !== undefined) {
          if (typeof equipment.trait === 'string') {
            traitList.push(equipment.trait)
          } else if (Array.isArray(equipment.trait)) {
            traitList = equipment.trait
          } else {
            traitList.push(equipment.trait.name)
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
    }
    let repArea = '['
    if (equipment.rep !== undefined) {
      repArea = (
        <span>
          <span className='equipEquipLabel'>Rep:</span>
          <span>{equipment.rep}</span>
        </span>
      )
    }

    let prettifyObj = (tar) => {
      if (tar === undefined) {
        return ''
      }
      if (Array.isArray(tar)) {
        return tar.reduce((curStr, ele) => {
          if (curStr.length > 0) {
            curStr += ', ' + ele
          } else {
            curStr += ele
          }
          return curStr
        }, '')
      } else if (typeof tar === 'string') {
        return tar
      } else {
        if (Object.keys(tar)[0] === 'notTrait') {
          return 'Not a ' + Object.values(tar)[0]
        } else {
          return Object.values(tar)[0]
        }
      }
    }
    let requiresArea = ''
    let requiresText = prettifyObj(equipment.requires)
    if (equipment.requires !== undefined) {
      requiresArea = (
        <div>
          <span className='equipEquipLabel'>Requires:</span>
          <span>{requiresText}</span>
        </div>
      )
    }
    let targetArea = ''
    let targetText = prettifyObj(equipment.target)
    if (equipment.target !== undefined) {
      targetArea = (
        <div>
          <span className='equipEquipLabel'>Target:</span>
          <span>{targetText}</span>
        </div>
      )
    }
    return (
      <div className='foundEquipment'>
        <div key={equipment.key} className='equipment'>
          <div className='equipmentHeader'>
            <span className='equipName'>
              <span className='equipEquipLabel'>Name:</span>
              <span>{equipment.name}</span>
            </span>
            {crewsArea}
          </div>
          {targetArea}
          {requiresArea}
          <div className='equipRule'>
            <span className='equipEquipLabel'>Rule:</span>
            <span>{equipment.rule}</span>
          </div>
          {traitsArea}
          <div className='equipCost'>
            <span className='equipRep'>
              {repArea}
            </span>
            <span className='equipFunding'>
              <span className='equipEquipLabel'>Funding:</span>
              <span>${equipment.funding}</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

EquipmentItem.propTypes = {
  equipment : React.PropTypes.object.isRequired,
  allCrews : React.PropTypes.array,
  allTraits : React.PropTypes.array
}

export default EquipmentItem
