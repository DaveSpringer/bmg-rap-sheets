import { connect } from 'react-redux'
import {
  selectCrew,
  selectCharacter,
  addAllCharacters,
  followCrewRules,
  resetCrew,
  readCrewCode
} from '../modules/builder'
import { selectEquipment } from '../modules/selectEquipment'
import { assignEquipment } from '../modules/assignEquipment'
import { loadResources } from '../../../modules/loadResources'

import Builder from '../components/Builder'

const mapDispatchToProps = {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew,
  selectEquipment,
  assignEquipment,
  readCrewCode
}

const mapStateToProps = (state) => ({
  crew : state.builder,
  reputation : state.reputation,
  funding : state.funding
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
