import React from 'react'
import './style/EquipmentTrait.scss'

class EquipmentTrait extends React.Component {
  render () {
    return (
      <div className='equipmentTrait'>
        <div className='equipTraitHeader'>
          <div className='equipTraitName'>
            {this.props.trait.name} {this.props.trait.cost}
          </div>
          <div className='equipTraitPhase'>{this.props.trait.phase}</div>
        </div>
        <div className='equipTraitRule'>{this.props.trait.rule}</div>
        <div className='equipTraitPageNo'>{this.props.trait.page}</div>
      </div>
    )
  }
}

EquipmentTrait.propTypes = {
  trait : React.PropTypes.object.isRequired
}

export default EquipmentTrait
