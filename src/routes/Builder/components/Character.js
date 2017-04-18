import React from 'react'
import './style/Character.scss'

class Character extends React.Component {
  constructor () {
    super()
    this._onClick = this._onClick.bind(this)
  }

  render () {
    let characterClass = this.props.character.rank.toLowerCase().replace(' ', '-') + '-rank'
    return (
      <div className={'character-box ' + characterClass}
        onClick={this._onClick}>
        <div className='character-alias'>{this.props.character.alias}</div>
        <div className='character-name'>{this.props.character.name}</div>
        <div className='character-cost'>
          <div className='character-rep'>{this.props.character.reputation} </div>
          <div className='character-funding'>${this.props.character.funding}</div>
        </div>
      </div>
    )
  }

  _onClick () {
    this.props.selectCharacter(this.props.character.alias)
  }
}

Character.propTypes = {
  character : React.PropTypes.object.isRequired,
  selectCharacter : React.PropTypes.func.isRequired
}

export default Character
