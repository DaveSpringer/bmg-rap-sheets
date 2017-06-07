import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'strategies',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Strategies = require('./containers/StrategiesContainer').default
      const reducer = require('./modules/strategies').default

      /*  Add the reducer to the store on key 'strategies'  */
      injectReducer(store, { key: 'strategies', reducer })

      /*  Return getComponent   */
      cb(null, Strategies)

    /* Webpack named bundle   */
    }, 'strategies')
  }
})
