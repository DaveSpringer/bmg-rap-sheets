import { connect } from 'react-redux'
import {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew
} from '../modules/builder'

import Builder from '../components/Builder'

const mapDispatchToProps = {
  selectCrew,
  selectCharacter,
  loadResources,
  addAllCharacters,
  followCrewRules,
  resetCrew
}

const mapStateToProps = (state) => ({
  crew : state.builder,
  reputation : state.reputation,
  funding : state.funding
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
