import React from 'react'

class RapSheet extends React.Component {
  constructor() {
    super()
  }

  render() {
    debugger
    return (
      <div>
        Name: {this.props.character.name}
        Alias: {this.props.character.alias}
        <div>
          {this.props.character.traitText.map(trait =>
            <div key={trait.name}>
              <div>{trait.name}</div>
              <div>{trait.rule}</div>
              <div>{trait.phase}</div>
              <div>{trait.cost}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

RapSheet.propTypes = {
  character : React.PropTypes.object.isRequired
}

export default RapSheet
