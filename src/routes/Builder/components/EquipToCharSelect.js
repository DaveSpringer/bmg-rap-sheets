import React from 'react'
import './style/EquipToCharSelect.scss'
import EquipmentItem from '../../../components/EquipmentItem/EquipmentItem'
import Character from './Character'

class EquipToCharSelect extends React.Component {
  constructor (props) {
    super(props)
    this.handleCharacterSelect = this.handleCharacterSelect.bind(this)
  }

  handleCharacterSelect (event) {
    console.log('Selected character key ' + event + ' for equipment ' + this.props.equipment.name)
    this.props.assignEquipment(this.props.equipment, event)
  }

  render () {
    return (
      <div className='equip-to-char-select'>
        <h2>Select Character for Equipment</h2>
        <div>
          <EquipmentItem equipment={this.props.equipment} />
        </div>
        <div>
          {this.props.validEquipChars.map(character =>
            <Character key={character.key}
              character={character}
              selectCharacter={this.handleCharacterSelect} />
          )}
        </div>
        <div className='clear-left' />
      </div>
    )
  }
}

EquipToCharSelect.propTypes = {
  validEquipChars : React.PropTypes.array.isRequired,
  equipment : React.PropTypes.object.isRequired,
  assignEquipment : React.PropTypes.func.isRequired
}

export default EquipToCharSelect
