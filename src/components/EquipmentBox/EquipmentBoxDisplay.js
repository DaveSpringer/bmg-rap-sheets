import React from 'react'
// import './style/EquipmentBoxDisplay.scss'
import EquipmentItem from '../EquipmentItem/EquipmentItem'

class EquipmentBoxDisplay extends React.Component {
  render () {
    return (
      <div className='equipment-box-display-pane'>
        <h2>{this.props.equipment.name}</h2>
        <EquipmentItem
          equipment={this.props.equipment}
          allCrews={this.props.allCrews}
          allTraits={this.props.allTraits} />
      </div>
    )
  }
}

EquipmentBoxDisplay.propTypes = {
  equipment : React.PropTypes.object.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  allTraits : React.PropTypes.array.isRequired
}

export default EquipmentBoxDisplay
