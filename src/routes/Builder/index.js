import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'builder',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Builder = require('./containers/BuilderContainer').default
      const reducer = require('./modules/builder').default

      /*  Add the reducer to the store on key 'builder'  */
      injectReducer(store, { key: 'builder', reducer })

      /*  Return getComponent   */
      cb(null, Builder)

    /* Webpack named bundle   */
    }, 'builder')
  }
})
