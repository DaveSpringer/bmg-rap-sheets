import React from 'react'
import './style/Modal.scss'

class Modal extends React.Component {
  render () {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }

    let clickFunction = this.props.onClose
    if (this.props.allowClicks) {
      clickFunction = () => {}
    }

    return (
      <div className='backdrop backdropStyle' onClick={clickFunction}>
        <div className='modalVisible modalStyle'>
          {this.props.children}
          <div className='footer'>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node,
  allowClicks: React.PropTypes.bool
}

export default Modal
