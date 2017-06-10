import { connect } from 'react-redux'
import { loadStrategies, selectCrew } from '../modules/strategies'

import Strategies from '../components/Strategies'

const mapDispatchToProps = {
  loadStrategies,
  selectCrew
}

const mapStateToProps = (state) => ({
  strategies : state.strategies.strategies,
  allCrews : state.strategies.allCrews,
  crew : state.strategies.crew
})

export default connect(mapStateToProps, mapDispatchToProps)(Strategies)
