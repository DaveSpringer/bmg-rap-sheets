import React from 'react'

class Traits extends React.Component {
  componentWillMount () {
    // Load up the various files
    this.props.loadTraits()
  }

  render () {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Traits:</h2>
      </div>
    )
  }
}

Traits.propTypes = {
  loadTraits : React.PropTypes.func.isRequired
}

export default Traits
