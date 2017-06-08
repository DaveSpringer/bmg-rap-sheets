import React from 'react'
import './style/Traits.scss'
import Trait from './Trait'

class Traits extends React.Component {
  constructor () {
    super()
    this.filterChanged = this.filterChanged.bind(this)
  }
  componentWillMount () {
    // Load up the various files
    this.props.loadTraits()
  }

  filterChanged (event) {
    this.props.updateFilter(event.target.value)
  }

  render () {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Batman Miniature Game Traits Browser</h2>
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
  visibleTraits : React.PropTypes.array.isRequired
}

export default Traits
