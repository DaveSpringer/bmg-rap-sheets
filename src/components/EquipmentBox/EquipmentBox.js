import React from 'react'
import './style/EquipmentBox.scss'
import Modal from '../Modal/Modal'
import EquipmentBoxDisplay from './EquipmentBoxDisplay'

class EquipmentBox extends React.Component {
  constructor () {
    super()
    this.selectEquip = this.selectEquip.bind(this)
    this.equipmentDisplay = this.equipmentDisplay.bind(this)
    this.state = { showEquipmentBox : false }
  }

  render () {
    return (
      <div className='equipment-box-box'>
        <div className='equipment-box-name-box' onClick={this.selectEquip} >
          <div className='equipment-box-name' >{this.props.equipment.name}</div>
        </div>
        <div className='equipment-box-cost' onClick={this.selectEquip}>
          <div className='equipment-box-rep'>{this.props.equipment.reputation} </div>
          <div className='equipment-box-funding'>${this.props.equipment.funding}</div>
        </div>
        <div className='info-button' onClick={this.equipmentDisplay}>INFO</div>
        <Modal show={this.state.showEquipmentBox} onClose={this.equipmentDisplay}>
          <EquipmentBoxDisplay equipment={this.props.equipment}
            allCrews={this.props.allCrews}
            allTraits={this.props.allTraits} />
        </Modal>
      </div>
    )
  }

  selectEquip () {
    this.props.selectEquipment(this.props.equipment.key)
  }

  equipmentDisplay () {
    this.setState({
      showEquipmentBox: !this.state.showEquipmentBox
    })
    console.log('Info clicked on ' + this.props.equipment.name + ' showEquipmentBox state:' + this.state.showEquipmentBox)
  }
}

EquipmentBox.propTypes = {
  equipment : React.PropTypes.object.isRequired,
  selectEquipment : React.PropTypes.func.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  allTraits : React.PropTypes.array.isRequired
}

export default EquipmentBox
