import { connect } from 'react-redux'
import { loadEquipment, selectCrew, updateFilter } from '../modules/equipment'

import Equipment from '../components/Equipment'

const mapDispatchToProps = {
  loadEquipment,
  selectCrew,
  updateFilter
}

const mapStateToProps = (state) => ({
  equipment : state.equipment.equipment,
  crew : state.equipment.crew,
  allCrews : state.equipment.allCrews,
  allTraits : state.equipment.allTraits
})

export default connect(mapStateToProps, mapDispatchToProps)(Equipment)
