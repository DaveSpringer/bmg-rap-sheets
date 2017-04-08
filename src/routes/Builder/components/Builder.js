import React from 'react'
import RapSheet from './RapSheet'
import SelectHeader from './SelectHeader'
import './Builder.scss'

class Builder extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    // Load up the various files
    this.props.loadResources()
  }
  componentDidMount() {
  }

  render() {
    let allCrews = this.props.crew.allCrews
    let availableCharacters = this.props.crew.availableCharacters
    return (
    <div>
      <SelectHeader
        selectCrew={this.props.selectCrew}
        allCrews={this.props.crew.allCrews}
        reputation={this.props.crew.reputation}
        funding={this.props.crew.funding} ></SelectHeader>
      <div className='whatsthisquestionmark'>

      <div className='characters hidden-print'>
        <h2>Select Characters</h2>
        <div>
          {availableCharacters.map(character =>
            <div key={character.alias}
              onClick={this.props.selectCharacter.bind(undefined, character.alias)}>
                {character.alias} - {character.name} - {character.rank}: {character.reputation}, ${character.funding}
            </div>
          )}
        </div>
      </div>
      <div className='crewStats hidden-print'>
        <h2>Current Crew</h2>
        <p>Reputation: {this.props.crew.reputation} - Funding: ${this.props.crew.funding}</p>
        <div>Leaders: {this.props.crew.leaders} - Sidekicks: {this.props.crew.sidekicks} - Free Agents: {this.props.crew.freeAgents}</div>
          <div>
            {this.props.crew.characters.map(character =>
              <div key={character.alias}
                onClick={this.props.selectCharacter.bind(undefined, character.alias)}>
                  {character.alias} - {character.name}: {character.reputation}, ${character.funding}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='rapSheets'>
        <h2>Rap Sheets</h2>
          {this.props.crew.characters.map(character =>
            <RapSheet key={character.alias} character={character} />
          )}
      </div>
    </div>
  )}
}

Builder.propTypes = {
  crew : React.PropTypes.object.isRequired,
  selectCrew : React.PropTypes.func.isRequired,
  selectCharacter : React.PropTypes.func.isRequired,
  loadResources : React.PropTypes.func.isRequired
}

export default Builder
