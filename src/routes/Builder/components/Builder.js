import React from 'react'

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
      <ul>
        {allCrews.map(crew =>
          <li key={crew.name}
            onClick={this.props.selectCrew.bind(undefined, crew)}>
              {crew.name}
          </li>
        )}
      </ul>
      <h4>{this.props.crew.crewName}</h4>
      <h2>Select Characters</h2>
      <ul>
        {availableCharacters.map(character =>
          <li key={character.name}
            onClick={this.props.selectCharacter.bind(undefined, character.name)}>
              {character.name} - {character.alias}
          </li>
        )}
      </ul>
      <h2>Current Crew</h2>
      <p>Reputation: {this.props.crew.reputation} - Funding: ${this.props.crew.funding}</p>
      <ul>
        {this.props.crew.characters.map(character =>
          <li key={character.name}
            onClick={this.props.selectCharacter.bind(undefined, character.name)}>
              {character.name} - {character.alias}
          </li>
        )}
      </ul>
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
