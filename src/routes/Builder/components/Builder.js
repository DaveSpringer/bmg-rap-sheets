import React from 'react'
import RapSheet from './RapSheet'

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
      <h2>Select Crew</h2>
      <div>
        {allCrews.map(crew =>
          <div key={crew.name}
            onClick={this.props.selectCrew.bind(undefined, crew)}>
              {crew.name}
          </div>
        )}
      </div>
      <h4>{this.props.crew.crewName}</h4>
      <h2>Select Characters</h2>
      <div>
        {availableCharacters.map(character =>
          <div key={character.name}
            onClick={this.props.selectCharacter.bind(undefined, character.name)}>
              {character.name} - {character.alias}
          </div>
        )}
      </div>
      <h2>Current Crew</h2>
      <p>Reputation: {this.props.crew.reputation} - Funding: ${this.props.crew.funding}</p>
      <div>
        {this.props.crew.characters.map(character =>
          <div key={character.name}
            onClick={this.props.selectCharacter.bind(undefined, character.name)}>
              {character.name} - {character.alias}: {character.reputation}, ${character.funding}
          </div>
        )}
      </div>
      <h2>Rap Sheets</h2>
      {this.props.crew.characters.map(character =>
        <RapSheet key={character.name} character={character} />
      )}
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
