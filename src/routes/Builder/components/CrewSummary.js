import React from 'react'
import './style/CrewSummary.scss'
import CopyToClipboard from 'react-copy-to-clipboard'

class CrewSummary extends React.Component {
  constructor (props) {
    super(props)
    this.onEnterCrewCode = this.onEnterCrewCode.bind(this)
    this.state = { crewCode : props.crewCode }
  }
  onEnterCrewCode () {
    this.props.readFromCrewCode(this.state.crewCode)
  }
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
        <div>
          <CopyToClipboard text={crewSummaryString}>
            <button className='crew-summary-button'>Copy</button>
          </CopyToClipboard>
        </div>
        <h2>Crew Code</h2>
        <div className='crew-code-area'>
          <input type='text' className='crew-code-text' value={this.state.crewCode} onChange={(event) => { this.setState({ crewCode : event.target.value }) }} />
          <div className='crew-code-button-area'>
            <CopyToClipboard text={this.props.crewCode}>
              <button className='crew-summary-button'>Copy</button>
            </CopyToClipboard>
            <button className='crew-summary-button' onClick={this.onEnterCrewCode}>Enter Code</button>
          </div>
        </div>
      </div>
    )
  }
}

CrewSummary.propTypes = {
  crewName : React.PropTypes.string.isRequired,
  characters : React.PropTypes.array.isRequired,
  crewCode : React.PropTypes.string.isRequired,
  readFromCrewCode : React.PropTypes.func.isRequired
}

export default CrewSummary
