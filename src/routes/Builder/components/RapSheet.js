import React from 'react'
import RapSheetTrait from './RapSheetTrait'
import './style/RapSheet.scss'

class RapSheet extends React.Component {
  render () {
    return (
      <div>
        <div className='rapSheet hidden-print'>
          <div className='nameDiv'>
            Name: {this.props.character.name}
          </div><div className='aliasDiv'>
          Alias: {this.props.character.alias}
          </div>
          <div className='traitArea'>
            <div>
              {this.props.character.traitText.map(trait =>
                <RapSheetTrait key={trait.name} trait={trait} />
              )}
            </div>
          </div>
        </div>
        <div className='rapSheet visible-print-block printRapSheet'>
          <div className='nameDiv'>
            Name: {this.props.character.name}
          </div><div className='aliasDiv'>
          Alias: {this.props.character.alias}
          </div>
          <div className='traitArea'>
            <div>
              {this.props.character.traitText.map(trait =>
                <RapSheetTrait key={trait.name} trait={trait} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RapSheet.propTypes = {
  character : React.PropTypes.object.isRequired
}

export default RapSheet
