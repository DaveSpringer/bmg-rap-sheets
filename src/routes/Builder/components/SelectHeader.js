import React from 'react'
import './style/SelectHeader.scss'

class SelectHeader extends React.Component {
  constructor () {
    super()
    this.state = { value: { name:'default', id:'' } }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let newVal = JSON.parse(event.target.value)
    this.state = newVal
    this.props.selectCrew(newVal)
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
