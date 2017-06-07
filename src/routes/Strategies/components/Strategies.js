import React from 'react'

class Strategies extends React.Component {
  componentWillMount () {
    // Load up the various files
    this.props.loadStrategies()
  }

  render () {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Strategies:</h2>
      </div>
    )
  }
}

Strategies.propTypes = {
  loadStrategies : React.PropTypes.func.isRequired
}

export default Strategies
