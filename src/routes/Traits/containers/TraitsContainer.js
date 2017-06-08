import { connect } from 'react-redux'
import { loadTraits, updateFilter } from '../modules/traits'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the traits:   */

import Traits from '../components/Traits'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  loadTraits,
  updateFilter
}

const mapStateToProps = (state) => ({
  filter : state.traits.filter,
  visibleTraits : state.traits.visibleTraits
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Traits)
