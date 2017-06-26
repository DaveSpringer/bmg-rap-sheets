import React from 'react'
import RapSheet from './RapSheet'
import SelectHeader from './SelectHeader'
import Character from './Character'
import EquipToCharSelect from './EquipToCharSelect'
import './style/Builder.scss'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import EquipmentBox from '../../../components/EquipmentBox/EquipmentBox'
import Modal from '../../../components/Modal/Modal'
import CrewSummary from './CrewSummary'

class Builder extends React.Component {
  constructor () {
    super()
    this.addAllCharactersClick = this.addAllCharactersClick.bind(this)
    this.handleRulesChange = this.handleRulesChange.bind(this)
    this.handleResetCrew = this.handleResetCrew.bind(this)
    this.toggleShowSelectEquip = this.toggleShowSelectEquip.bind(this)
    this.toggleShowCrewSummary = this.toggleShowCrewSummary.bind(this)
    this.onSelectEquip = this.onSelectEquip.bind(this)
    this.onReadFromCrewCode = this.onReadFromCrewCode.bind(this)

    // State
    this.state = { showSelectEquip: false, showCrewSummary: false }
  }
  componentWillMount () {
    // Load up the various files
    this.props.loadResources()
  }
  componentDidMount () {
  }

  addAllCharactersClick (event) {
    this.props.addAllCharacters()
  }

  handleRulesChange (event) {
    this.props.followCrewRules(event.target.checked)
  }

  handleResetCrew (event) {
    this.props.resetCrew()
  }

  // Stuff
  onSelectEquip (event) {
    this.props.selectEquipment(event)
    this.toggleShowSelectEquip()
  }

  // Used to show or hide the EquipToCharSelect screen inside a Modal.
  toggleShowSelectEquip () {
    this.setState({
      showSelectEquip: !this.state.showSelectEquip
    })
  }

  // Shows the crew Summary
  toggleShowCrewSummary () {
    this.setState({
      showCrewSummary: !this.state.showCrewSummary
    })
  }

  onReadFromCrewCode (event) {
    let tempCrewCode = event.target.value
    try {
      this.props.readCrewCode(tempCrewCode)
    } catch (e) {
      console.log('ERROR: Could not read the crew code.')
    }
  }

  render () {
    let availableCharacters = this.props.crew.availableCharacters
    let availableEquipment = this.props.crew.availableEquipment
    return (
      <div className='body-builder'>
        <SelectHeader
          selectCrew={this.props.selectCrew}
          addAllCharacters={this.props.addAllCharacters}
          allCrews={this.props.crew.allCrews}
          reputation={this.props.crew.reputation}
          funding={this.props.crew.funding}
          crewName={this.props.crew.crewName} />
        <div className='whatsthisquestionmark'>
          <Modal show={this.state.showSelectEquip} onClose={this.toggleShowSelectEquip}>
            <EquipToCharSelect validEquipChars={this.props.crew.validEquipChars}
              equipment={this.props.crew.equipment}
              allCrews={this.props.crew.allCrews}
              allTraits={this.props.crew.allTraits}
              assignEquipment={this.props.assignEquipment} />
          </Modal>
          <Modal show={this.state.showCrewSummary}
            onClose={this.toggleShowCrewSummary}
            allowClicks>
            <CrewSummary characters={this.props.crew.characters}
              readFromCrewCode={this.onReadFromCrewCode}
              crewCode={this.props.crew.crewCode}
              crewName={this.props.crew.crewName} />
          </Modal>

          <div className='characters hidden-print'>
            <h2>Select Characters</h2>
            <div className='select-operations'>
              <label className='crewRulesText label-text' htmlFor='rules-toggle'>Crew Rules Enabled:</label>
              <Toggle
                id='rules-toggle'
                checked={this.props.crew.followRules}
                name='followRules'
                onChange={this.handleRulesChange} />
              <span className='spacerSpan' />
              <button className='addAllBtn' onClick={this.addAllCharactersClick}>Add All Models</button>
              <span className='spacerSpan' />
              <button className='addAllBtn' onClick={this.handleResetCrew}>Reset</button>
            </div>
            <div id='available-characters' className='character-area'>
              {availableCharacters.map(character =>
                <Character key={character.key}
                  character={character}
                  selectCharacter={this.props.selectCharacter} />
              )}
              {availableEquipment.map(equipment =>
                <EquipmentBox key={equipment.key}
                  selectEquipment={this.onSelectEquip}
                  equipment={equipment}
                  allTraits={this.props.crew.allTraits}
                  allCrews={this.props.crew.allCrews} />
              )}
            </div>
            <div className='clear-left' />
          </div>
          <div className='crewStats hidden-print'>
            <h2>Current Crew</h2>
            <div>
              <button className='crewSummaryButton' onClick={this.toggleShowCrewSummary}>Summary</button>
            </div>
            <div>Leaders: {this.props.crew.leaders} - Sidekicks: {this.props.crew.sidekicks}
              &nbsp;- Free Agents: {this.props.crew.freeAgents}</div>
            <div id='selected-characters' className='character-area'>
              {this.props.crew.characters.map(character =>
                <Character key={character.key}
                  character={character}
                  selectCharacter={this.props.selectCharacter} />
            )}
            </div>
          </div>
        </div>
        <div className='rapSheets clear-left'>
          <h2>Rap Sheets</h2>
          {this.props.crew.characters.map(character =>
            <RapSheet key={character.key} character={character} />
          )}
        </div>
      </div>
    )
  }
}

Builder.propTypes = {
  crew : React.PropTypes.object.isRequired,
  selectCrew : React.PropTypes.func.isRequired,
  selectCharacter : React.PropTypes.func.isRequired,
  loadResources : React.PropTypes.func.isRequired,
  addAllCharacters : React.PropTypes.func.isRequired,
  followCrewRules : React.PropTypes.func.isRequired,
  resetCrew : React.PropTypes.func.isRequired,
  selectEquipment : React.PropTypes.func.isRequired,
  assignEquipment : React.PropTypes.func.isRequired,
  readCrewCode : React.PropTypes.func.isRequired
}

export default Builder
