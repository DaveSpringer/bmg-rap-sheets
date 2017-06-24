import React from 'react'
import './style/Character.scss'
import Modal from '../../../components/Modal/Modal'
import CharacterDisplay from './CharacterDisplay'

class Character extends React.Component {
  constructor () {
    super()
    this._onClick = this._onClick.bind(this)
    this.charDisplay = this.charDisplay.bind(this)
    this.state = { showCharacter : false }
  }

  render () {
    let character = this.props.character
    let characterClass = character.rank.toLowerCase().replace(' ', '-') + '-rank'
    let equipmentSection = ''
    let displayRep = character.reputation
    let displayFunding = character.funding
    let boxClass = 'character-box'
    if (character.equipment !== undefined) {
      boxClass = 'character-equip-box'
      let equipString
      if (character.equipment.length === 1) {
        equipString = character.equipment[0].name
      } else {
        equipString = 'Equipment (' + character.equipment.length + ')'
      }
      equipmentSection = (
        <div className='character-equip-name'>
          {equipString}
        </div>
      )
      character.equipment.forEach((equip) => {
        if (equip.rep !== undefined) {
          displayRep += equip.rep
        }
        if (equip.funding !== undefined) {
          displayFunding += equip.funding
        }
      })
    }
    return (
      <div className={boxClass + ' ' + characterClass}>
        <div className='character-name-box' onClick={this._onClick} >
          <div className='character-alias' >{character.alias}</div>
          <div className='character-name' >{character.name}</div>
        </div>
        <div className='character-cost' onClick={this._onClick}>
          <div className='character-rep'>{displayRep} </div>
          <div className='character-funding'>${displayFunding}</div>
        </div>
        <div className='info-button' onClick={this.charDisplay}>INFO</div>
        {equipmentSection}
        <Modal show={this.state.showCharacter} onClose={this.charDisplay}>
          <CharacterDisplay character={character} />
        </Modal>
      </div>
    )
  }

  _onClick () {
    this.props.selectCharacter(this.props.character.key)
  }

  charDisplay () {
    this.setState({
      showCharacter: !this.state.showCharacter
    })
  }
}

Character.propTypes = {
  character : React.PropTypes.object.isRequired,
  selectCharacter : React.PropTypes.func.isRequired
}

export default Character
