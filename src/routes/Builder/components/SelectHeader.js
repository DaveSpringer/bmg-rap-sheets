import React from 'react'
import Modal from './Modal'
import './style/SelectHeader.scss'

class SelectHeader extends React.Component {
  constructor () {
    super()
    this.state = { value: { name:'default', id:'' }, showHelp: true }

    this.handleChange = this.handleChange.bind(this)
    this.toggleHelp = this.toggleHelp.bind(this)
  }

  handleChange (event) {
    let newVal = JSON.parse(event.target.value)
    this.state = newVal
    this.props.selectCrew(newVal)
  }

  toggleHelp () {
    this.setState({
      showHelp: !this.state.showHelp
    })
  }

  render () {
    return (
      <div className='container selectHeader hidden-print'>
        <select id='crewSelect' value={this.state.value} onChange={this.handleChange}>
          <option key='default' value='{name:"default", id:""}'>default</option>
          {this.props.allCrews.map(crew =>
            <option key={crew.id} value={JSON.stringify(crew)}>{crew.name}</option>
          )}
        </select>
        <div id='crewStats'>
          <label className='statLabel'>Rep: {this.props.reputation}</label>
          <label className='statLabel'>Funding: ${this.props.funding}</label>
        </div>
        <button onClick={this.toggleHelp}>?</button>
        <div className='clear-left' />
        <Modal show={this.state.showHelp} onClose={this.toggleHelp}>
          <h2>Welcome to the Rap Sheet Builder Alpha!</h2>
          <h5>v0.0.1 - <b>Alpha</b></h5>
          <br />
          <div className='scrollText'>
            <h4>Usage</h4>
            <p>Start by selecting your Crew from the drop down in the top-left.
            Then click on characters to add to your list. If you scroll down, you
            will see the Rap Sheets start populating as you select crew members.</p>
            <p>Once you're satisfied, print it out.</p>
            <h4>Notes</h4>
            <p>Printing works best on Firefox. Chrome is too smart for its own
            good. Internet Explorer is better than it used to be, but remains
            inconsistent.</p>
            <p>This site is really and truly in alpha. This is not a modern video
            game beta-that-is-actually-a-demo or a Google beta-that-is-a-better-product-than-the-rest-of-the-world-can-make.</p>
            <p>It is an <b>alpha</b>. Buggy. All features are not implemented.</p>
            <p>If things stop working, please select a new crew or hit refresh.</p>
            <p>Please be patient as it grows into something more useful.</p></div>
        </Modal>
      </div>
    )
  }
}

SelectHeader.propTypes = {
  selectCrew : React.PropTypes.func.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  reputation: React.PropTypes.number.isRequired,
  funding: React.PropTypes.number.isRequired
}

export default SelectHeader
