import React from 'react'
import './style/Traits.scss'
import Trait from './Trait'
import Subheader from '../../../components/Subheader/Subheader'

class Traits extends React.Component {
  constructor (props) {
    super(props)
    this.filterChanged = this.filterChanged.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: props.crew }
  }
  componentWillMount () {
    // Load up the various files
    this.props.loadTraits()
  }

  componentDidMount () {
    let filter = this.props.location.query.filter
    if (filter !== undefined) {
      this.props.updateFilter(filter)
    }
  }

  filterChanged (event) {
    this.props.updateFilter(event.target.value)
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
          <select id='traitsCrewSelect' value={this.state.value} onChange={this.handleChange}>
            {this.props.allCrews.map(crew =>
              <option key={crew.id} value={JSON.stringify(crew)}>{crew.name}</option>
            )}
          </select>
          <span className='subheaderRight' />
        </Subheader>
        <h2>Batman Miniature Game Traits Browser</h2>
        <h4>Traits for { crewName }</h4>
        <div className='filterField'>
          <span>
            <label className='inputLabel'>Filter Traits:</label>
            <input type='text' value={this.props.filter} onChange={this.filterChanged} />
          </span>
        </div>
        <div className='traitsContainer'>
          {this.props.visibleTraits.map(trait =>
            <Trait key={trait.name} trait={trait} />
          )}
        </div>
      </div>
    )
  }
}

Traits.propTypes = {
  loadTraits : React.PropTypes.func.isRequired,
  updateFilter : React.PropTypes.func.isRequired,
  filter : React.PropTypes.string.isRequired,
  visibleTraits : React.PropTypes.array.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  crew: React.PropTypes.object.isRequired,
  selectCrew: React.PropTypes.func.isRequired,
  location : React.PropTypes.object.isRequired
}

export default Traits
