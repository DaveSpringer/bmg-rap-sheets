import { connect } from 'react-redux'
import {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew
} from '../modules/builder'
import {
  selectEquipment
} from '../modules/selectEquipment'
import {
  assignEquipment
} from '../modules/assignEquipment'

import Builder from '../components/Builder'

const mapDispatchToProps = {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew,
  selectEquipment,
  assignEquipment
}

const mapStateToProps = (state) => ({
  crew : state.builder,
  reputation : state.reputation,
  funding : state.funding
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
