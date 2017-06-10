import React from 'react'
import Subheader from '../../../components/Subheader/Subheader'
import './style/Strategies.scss'
import Strategy from './Strategy'

class Strategies extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: props.crew }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    // Load up the various files
    this.props.loadStrategies()
  }

  handleChange (event) {
    let newVal = JSON.parse(event.target.value)
    this.props.selectCrew(newVal)
    this.setState({ value: event.target.value })
  }

  render () {
    let crewName = this.props.crew.name
    return (
      <div style={{ margin: '0 auto' }} >
        <Subheader>
          <select id='strategiesCrewSelect' value={this.state.value} onChange={this.handleChange}>
            {this.props.allCrews.map(crew =>
              <option key={crew.id} value={JSON.stringify(crew)}>{crew.name}</option>
            )}
          </select>
          <span className='subheaderRight' />
        </Subheader>
        <h2>Batman Miniature Game Strategies</h2>
        <h4>Selected Crew: { crewName }</h4>
        <div className='strategiesContainer'>
          {this.props.strategies.map(strategy =>
            <Strategy key={strategy.key} strategy={strategy} allCrews={this.props.allCrews} />
          )}
        </div>
      </div>
    )
  }
}

Strategies.propTypes = {
  loadStrategies : React.PropTypes.func.isRequired,
  strategies : React.PropTypes.array.isRequired,
  selectCrew : React.PropTypes.func.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  crew : React.PropTypes.object.isRequired
}

export default Strategies
