import React from 'react'
import './style/Trait.scss'

class Trait extends React.Component {
  render () {
    let trait = this.props.trait
    let cost = (trait.cost ? '(' + trait.cost + ')' : '')
    let traitName = (trait.nameFunc ? trait.nameFunc : trait.name)
    return (
      <div className='foundTrait'>
        <div className='listedTraitName'>
          <span className='traitsTraitLabel'>Name:</span><span>{traitName} {cost}</span>
        </div>
        <div className='traitsTraitRule'>
          <span className='traitsTraitLabel'>Rule:</span><span>{trait.rule}</span>
        </div>
        <div>
          <span className='traitsTraitPhaseSpan'>
            <span className='traitsTraitLabel'>Phase:</span><span>{trait.phase}</span>
          </span>
          <span className='traitsTraitPageSpan'>
            <span>{trait.page}</span>
          </span>
        </div>
      </div>
    )
  }
}

Trait.propTypes = {
  trait : React.PropTypes.object.isRequired
}

export default Trait
