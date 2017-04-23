import React from 'react'
import './style/CharacterDisplay.scss'

class CharacterDisplay extends React.Component {
  render () {
    return (
      <div>
        <div className='leftPage'>
          <div className='infoHeader'>
            <div className='charName'>
              <label>Name:</label>
              <label>{this.props.character.name}</label>
            </div>
            <div className='charAlias'>
              <label>Alias:</label>
              <label>{this.props.character.alias}</label>
            </div>
            <div className='rank'>
              <label>Rank:</label>
              <label>{this.props.character.rank}</label>
            </div>
            <div className='availableIn'>
              <label>Available In:</label>
              <label>{this.props.character.shop}</label>
            </div>
            <div className='stats'>
              <div className='stat'>
                <label>Willpower: {this.props.character.wp}</label>
              </div>
              <div className='stat'>
                <label>Strength: {this.props.character.str}+</label>
              </div>
              <div className='stat'>
                <label>Movement: {this.props.character.mov}</label>
              </div>
              <div className='stat'>
                <label>Attack: {this.props.character.att}</label>
              </div>
              <div className='stat'>
                <label>Defense: {this.props.character.def}</label>
              </div>
              <div className='stat'>
                <label>Endurance: {this.props.character.end}</label>
              </div>
              <div className='stat'>
                <label>Special: {this.props.character.spc}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CharacterDisplay.propTypes = {
  character : React.PropTypes.object.isRequired
}

export default CharacterDisplay
