import React from 'react'
import './style/Character.scss'

class Character extends React.Component {
  constructor() {
    super()
  }

  render() {
    let characterClass = this.props.character.rank.toLowerCase().replace(" ", "-")
    return (
      <div className={'character-box ' + characterClass}
            onClick={this.props.selectCharacter.bind(undefined, this.props.character.alias)}>
                <div className='character-alias'>{this.props.character.alias}</div>
                <div className='character-name'>{this.props.character.name}</div>
                <div className='character-cost'>
                  <div className='character-rep'>{this.props.character.reputation} </div>
                  <div className='character-funding'>${this.props.character.funding}</div>
                </div>
      </div>
    )
  }
}

Character.propTypes = {
  character : React.PropTypes.object.isRequired,
  selectCharacter : React.PropTypes.func.isRequired
}

export default Character
