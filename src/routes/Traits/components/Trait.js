import React from 'react'
import './style/Trait.scss'

class Trait extends React.Component {
  render () {
    let trait = this.props.trait
    let cost = (trait.cost ? '(' + trait.cost + ')' : '')
    let traitName = (trait.nameFunc ? trait.nameFunc : trait.name)
    return (
      <div className='foundTrait'>
        <div className='traitName'>
          <span className='traitLabel'>Name:</span><span>{traitName} {cost}</span>
        </div>
        <div className='traitRule'>
          <span className='traitLabel'>Rule:</span><span>{trait.rule}</span>
        </div>
        <div>
          <span className='traitPhaseSpan'>
            <span className='traitLabel'>Phase:</span><span>{trait.phase}</span>
          </span>
          <span className='traitPageSpan'>
            <span className='traitLabel'>Page:</span><span>{trait.page}</span>
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
