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
    let allCrews = this.props.crew.builder.allCrews
    return (
    <div>
      <h2>Select Crew</h2>
      <ul>
        {allCrews.map(crew =>
          <li key={crew.name}
            onClick={this.props.selectCrew.bind(undefined, crew.name)}>
              {crew.name}
          </li>
        )}
      </ul>
      <h4>{this.props.crew.builder.crewName}</h4>
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
