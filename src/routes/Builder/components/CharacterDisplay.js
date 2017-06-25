import React from 'react'
import RapSheet from './RapSheet'
import './style/CharacterDisplay.scss'
import EquipmentItem from '../../../components/EquipmentItem/EquipmentItem'

class CharacterDisplay extends React.Component {
  render () {
    let equipArea = ''
    let character = this.props.character
    if (character.equipment !== undefined) {
      equipArea = (
        <div className='equipArea'>
          <h4>Equipment</h4>
          {character.equipment.map(equipment =>
            <EquipmentItem key={equipment.key}
              equipment={equipment} />
          )}
        </div>
      )
    }
    return (
      <div className='charPane'>
        <div className='leftPane'>
          <div className='infoHeader'>
            <div className='charName'>
              <label className='labelField'>Name:</label>
              <label>{character.name}</label>
            </div>
            <div className='charAlias'>
              <label className='labelField'>Alias:</label>
              <label>{character.alias}</label>
            </div>
            <div className='rank'>
              <label className='labelField'>Rank:</label>
              <label>{character.rank}</label>
            </div>
            <div className='availableIn'>
              <label className='labelField'>Available In:</label>
              <label>{character.shop}</label>
            </div>
            <div className='reputation'>
              <label className='labelField'>Rep:</label>
              <label>{character.reputation}</label>
            </div>
            <div className='funding'>
              <label className='labelField'>Funding:</label>
              <label>${character.funding}</label>
            </div>
            <div className='stats'>
              <div className='stat'>
                <label className='labelField'>Willpower: {character.wp}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Strength: {character.str}+</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Movement: {character.mov}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Attack: {character.att}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Defense: {character.def}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Endurance: {character.end}</label>
              </div>
              <div className='stat'>
                <label className='labelField'>Special: {character.spc}</label>
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
                {character.weaponText.map(weapon =>
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
          {equipArea}
        </div>
        <div className='rightPane'>
          <RapSheet character={character} />
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
