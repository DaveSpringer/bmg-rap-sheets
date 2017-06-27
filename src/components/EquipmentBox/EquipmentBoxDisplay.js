import React from 'react'
// import './style/EquipmentBoxDisplay.scss'
import EquipmentItem from '../EquipmentItem/EquipmentItem'

class EquipmentBoxDisplay extends React.Component {
  render () {
    return (
      <div className='equipment-box-display-pane'>
        <h2>{this.props.equipment.name}</h2>
        <EquipmentItem
          equipment={this.props.equipment} />
      </div>
    )
  }
}

EquipmentBoxDisplay.propTypes = {
  equipment : React.PropTypes.object.isRequired
}

export default EquipmentBoxDisplay
