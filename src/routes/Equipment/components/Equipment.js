import React from 'react'

class Equipment extends React.Component {
  componentWillMount () {
    // Load up the various files
    this.props.loadEquipment()
  }

  render () {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Equipment:</h2>
      </div>
    )
  }
}

Equipment.propTypes = {
  loadEquipment : React.PropTypes.func.isRequired
}

export default Equipment
