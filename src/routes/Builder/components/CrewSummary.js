import React from 'react'
import './style/CrewSummary.scss'

class CrewSummary extends React.Component {
  render () {
    let rep = 0
    let funding = 0
    let crewSummaryString = this.props.characters.reduce((charString, char) => {
      if (char.alias === undefined || char.alias === 'Unknown' || char.alias === 'Classified') {
        charString += char.name
      } else {
        charString += char.alias
      }
      rep += char.reputation
      funding += char.funding
      charString += '\n'
      if (char.equipment !== undefined) {
        charString += char.equipment.reduce((equipString, equip) => {
          equipString += '+ ' + equip.name + '\n'
          rep += (equip.rep ? equip.rep : 0)
          funding += (equip.funding ? equip.funding : 0)
          return equipString
        }, '')
      }
      return charString
    }, '')
    crewSummaryString = 'Crew: ' + this.props.crewName + '\n' + crewSummaryString + 'Rep: ' + rep + ', Funding: ' + funding
    return (
      <div className='crew-summary-area'>
        <h2>Crew Summary</h2>
        <textarea className='crew-summary-text' value={crewSummaryString} readOnly='true' onClick={() => console.log('Trying to interrupt closing...')} />
        <h2>Crew Code</h2>
        <input type='text' className='crew-code-text' value={this.props.crewCode} readOnly='true' />
      </div>
    )
  }
}

CrewSummary.propTypes = {
  crewName : React.PropTypes.string.isRequired,
  characters : React.PropTypes.array.isRequired,
  crewCode : React.PropTypes.string.isRequired
}

export default CrewSummary
