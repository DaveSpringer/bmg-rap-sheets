import React from 'react'
import './style/Subheader.scss'

class Subheader extends React.Component {
  render () {
    return (
      <div className='container subheader hidden-print'>
        { this.props.children }
      </div>
    )
  }
}

Subheader.propTypes = {
  children: React.PropTypes.object.isRequired
}

export default Subheader
