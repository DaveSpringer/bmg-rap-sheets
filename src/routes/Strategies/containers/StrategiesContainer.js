import { connect } from 'react-redux'
import { loadStrategies, selectCrew, updateFilter } from '../modules/strategies'

import Strategies from '../components/Strategies'

const mapDispatchToProps = {
  loadStrategies,
  selectCrew,
  updateFilter
}

const mapStateToProps = (state) => ({
  strategies : state.strategies.strategies,
  allCrews : state.strategies.allCrews,
  crew : state.strategies.crew
})

export default connect(mapStateToProps, mapDispatchToProps)(Strategies)
