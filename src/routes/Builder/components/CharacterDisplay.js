import React from 'react'
import RapSheet from './RapSheet'
import './style/CharacterDisplay.scss'

class CharacterDisplay extends React.Component {
  render () {
    return (
      <div className='charPane'>
        <div className='leftPane'>
          <div className='infoHeader'>
            <div className='charName'>
              <label className='labelField'>Name:</label>
              <label>{this.props.character.name}</label>
            </div>
            <div className='charAlias'>
              <label className='labelField'>Alias:</label>
              <label>{this.props.character.alias}</label>
            </div>
            <div className='rank'>
              <label className='labelField'>Rank:</label>
              <label>{this.props.character.rank}</label>
            </div>
            <div className='availableIn'>
              <label className='labelField'>Available In:</label>
              <label>{this.props.character.shop}</label>
            </div>
            <div className='reputation'>
              <label className='labelField'>Rep:</label>
              <label>{this.props.character.reputation}</label>
            </div>
            <div className='funding'>
              <label className='labelField'>Funding:</label>
              <label>${this.props.character.funding}</label>
            </div>
            <div className='stats'>
              <div className='stat'>
                <label className='labelField'>Willpower: {this.props.character.wp}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Strength: {this.props.character.str}+</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Movement: {this.props.character.mov}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Attack: {this.props.character.att}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Defense: {this.props.character.def}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Endurance: {this.props.character.end}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Special: {this.props.character.spc}</label>
              </div>
            </div>
            <table className='weaponTable'>
              <thead className='weaponHeader'>
                <tr>
                  <th />
                  <th>DAM</th>
                  <th>ROF</th>
                  <th>AMMO</th>
                  <th>TRAITS</th>
                </tr>
              </thead>
              <tbody>
                {this.props.character.weaponText.map(weapon =>
                  <tr className='weaponRow' key={weapon.key}>
                    <td className='weaponCell'>{weapon.name}</td>
                    <td className='weaponCell'>{weapon.damage}</td>
                    <td className='weaponCell'>{weapon.rof}</td>
                    <td className='weaponCell'>{weapon.ammo}</td>
                    <td className='weaponCell'>{weapon.traits}</td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
        <div className='rightPane'>
          <RapSheet character={this.props.character} />
        </div>
        <div className='clear-right' />
      </div>
    )
  }
}

CharacterDisplay.propTypes = {
  character : React.PropTypes.object.isRequired
}

export default CharacterDisplay
