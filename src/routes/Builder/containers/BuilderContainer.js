import { connect } from 'react-redux'
import { selectCrew, selectCharacter, loadResources } from '../modules/builder'

import Builder from '../components/Builder'

const mapDispatchToProps = {
  selectCrew,
  selectCharacter,
  loadResources
}

const mapStateToProps = (state) => ({
  crew : state.builder,
  reputation : state.reputation,
  funding : state.funding
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
