import React from 'react'
import './style/RapSheetTrait.scss'

class RapSheet extends React.Component {
  render () {
    return (
      <div className='rapSheetTrait'>
        <div className='traitHeader'>
          <div className='traitName'>
            {this.props.trait.name} {this.props.trait.cost}
          </div>
          <div className='traitPhase'>{this.props.trait.phase}</div>
        </div>
        <div className='traitRule'>{this.props.trait.rule}</div>
        <div className='pageNo'>{this.props.trait.page}</div>
      </div>
    )
  }
}

RapSheet.propTypes = {
  trait : React.PropTypes.object.isRequired
}

export default RapSheet
