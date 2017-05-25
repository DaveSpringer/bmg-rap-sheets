import React from 'react'
import RapSheet from './RapSheet'
import SelectHeader from './SelectHeader'
import Character from './Character'
import './style/Builder.scss'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

class Builder extends React.Component {
  constructor () {
    super()
    this.addAllCharactersClick = this.addAllCharactersClick.bind(this)
    this.handleRulesChange = this.handleRulesChange.bind(this)
    this.handleResetCrew = this.handleResetCrew.bind(this)
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

  render () {
    let availableCharacters = this.props.crew.availableCharacters
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
                <Character key={character.alias + '-' + character.name}
                  character={character}
                  selectCharacter={this.props.selectCharacter} />
          )}
            </div>
            <div className='clear-left' />
          </div>
          <div className='crewStats hidden-print'>
            <h2>Current Crew</h2>
            <div>Leaders: {this.props.crew.leaders} - Sidekicks: {this.props.crew.sidekicks}
              &nbsp;- Free Agents: {this.props.crew.freeAgents}</div>
            <div id='selected-characters' className='character-area'>
              {this.props.crew.characters.map(character =>
                <Character key={character.alias}
                  character={character}
                  selectCharacter={this.props.selectCharacter} />
            )}
            </div>
          </div>
        </div>
        <div className='rapSheets clear-left'>
          <h2>Rap Sheets</h2>
          {this.props.crew.characters.map(character =>
            <RapSheet key={character.alias} character={character} />
          )}
        </div>
        <div id='rap-sheet-footer' className='hidden-print'>
          <p>
        &copy; TM &copy; DC Comics. WB SHIELD: TM; Warner Bros. Entertainment. Inc. (s17). Copyright © 2017 DC Comics.
        All characters, their distinctive likenesses and related elements featured in this
        publication are trademarks of DC Comics.
        Their stories, characters and incidents featured in this publication are entirely fictional.
        </p>
          <p>
        Batman Miniature Game &copy;2008-2017 KNIGHT MODELS - All Rights Reserved.
        </p>
          <p>
        RapSheet Builder &copy;2017 David Springer
        </p>
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
  resetCrew : React.PropTypes.func.isRequired
}

export default Builder
