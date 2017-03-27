import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'rapsheets',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const RapSheets = require('./containers/RapSheetsContainer').default
      const reducer = require('./modules/rapsheets').default

      /*  Add the reducer to the store on key 'rapsheets'  */
      injectReducer(store, { key: 'rapsheets', reducer })

      /*  Return getComponent   */
      cb(null, RapSheets)

    /* Webpack named bundle   */
  }, 'rapsheets')
  }
})
