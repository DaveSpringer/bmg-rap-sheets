import React from 'react'

class RapSheet extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div>{this.props.trait.name}</div>
        <div>{this.props.trait.rule}</div>
        <div>{this.props.trait.phase}</div>
        <div>{this.props.trait.cost}</div>
      </div>
    )
  }
}

RapSheet.propTypes = {
  trait : React.PropTypes.object.isRequired
}

export default RapSheet
