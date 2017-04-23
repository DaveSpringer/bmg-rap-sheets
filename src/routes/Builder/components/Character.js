import React from 'react'
import './style/Character.scss'
import Modal from './Modal'
import CharacterDisplay from './CharacterDisplay'

class Character extends React.Component {
  constructor () {
    super()
    this._onClick = this._onClick.bind(this)
    this.charDisplay = this.charDisplay.bind(this)
    this.state = { showCharacter : false }
  }

  render () {
    let characterClass = this.props.character.rank.toLowerCase().replace(' ', '-') + '-rank'
    return (
      <div className={'character-box ' + characterClass}>
        <div className='character-name-box' onClick={this._onClick} >
          <div className='character-alias' >{this.props.character.alias}</div>
          <div className='character-name' >{this.props.character.name}</div>
        </div>
        <div className='character-cost' onClick={this._onClick}>
          <div className='character-rep'>{this.props.character.reputation} </div>
          <div className='character-funding'>${this.props.character.funding}</div>
        </div>
        <div className='info-button' onClick={this.charDisplay}>INFO</div>
        <Modal show={this.state.showCharacter} onClose={this.charDisplay}>
          <CharacterDisplay character={this.props.character} />
        </Modal>
      </div>
    )
  }

  _onClick () {
    this.props.selectCharacter(this.props.character.alias)
  }

  charDisplay () {
    this.setState({
      showCharacter: !this.state.showCharacter
    })
    console.log('Info clicked on ' + this.props.character.name + ' showCharacter state:' + this.state.showCharacter)
  }
}

Character.propTypes = {
  character : React.PropTypes.object.isRequired,
  selectCharacter : React.PropTypes.func.isRequired
}

export default Character
