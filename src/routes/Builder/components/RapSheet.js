import React from 'react'
import RapSheetTrait from './RapSheetTrait'
import './style/RapSheet.scss'

class RapSheet extends React.Component {
  render () {
    let cutoff = 7
    if (this.props.character.cutoff !== undefined) {
      cutoff = parseInt(this.props.character.cutoff)
    }
    if (this.props.character.traitText.length > cutoff) {
      let pageOneTraits = this.props.character.traitText.slice(0, cutoff)
      let pageTwoTraits = this.props.character.traitText.slice(cutoff)
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
            <div className='pageNoDiv'>
          Page: 1 of 2
        </div>
            <div className='traitArea'>
              <div>
                {pageOneTraits.map(trait =>
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
            <div className='pageNoDiv'>
          Page: 2 of 2
        </div>
            <div className='traitArea'>
              <div>
                {pageTwoTraits.map(trait =>
                  <RapSheetTrait key={trait.name} trait={trait} />
            )}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
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
}

RapSheet.propTypes = {
  character : React.PropTypes.object.isRequired
}

export default RapSheet
