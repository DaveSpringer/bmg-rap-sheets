import React from 'react'
import RapSheetTrait from './RapSheetTrait'

class RapSheet extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        Name: {this.props.character.name}
        Alias: {this.props.character.alias}
        <div>
          {this.props.character.traitText.map(trait =>
            <RapSheetTrait key={trait.name} trait={trait} />
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
