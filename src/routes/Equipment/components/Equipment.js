import React from 'react'
import Subheader from '../../../components/Subheader/Subheader'
import EquipmentItem from '../../../components/EquipmentItem/EquipmentItem'
import './style/Equipment.scss'

class Equipment extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: props.crew }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount () {
    // Load up the various files
    this.props.loadEquipment()
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
          <select id='equipmentCrewSelect' value={this.state.value} onChange={this.handleChange}>
            {this.props.allCrews.map(crew =>
              <option key={crew.id} value={JSON.stringify(crew)}>{crew.name}</option>
            )}
          </select>
          <span className='subheaderRight' />
        </Subheader>
        <h2>Equipment:</h2>
        <h4>Selected Crew: { crewName }</h4>
        <div className='equipmentContainer'>
          {this.props.equipment.map(equipment =>
            <EquipmentItem key={equipment.key} equipment={equipment} allCrews={this.props.allCrews} allTraits={this.props.allTraits} />
          )}
        </div>
      </div>
    )
  }
}

Equipment.propTypes = {
  loadEquipment : React.PropTypes.func.isRequired,
  allCrews : React.PropTypes.array.isRequired,
  equipment : React.PropTypes.array.isRequired,
  crew : React.PropTypes.object.isRequired,
  allTraits : React.PropTypes.array.isRequired,
  selectCrew : React.PropTypes.func.isRequired
}

export default Equipment
