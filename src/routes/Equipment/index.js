import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'equipment',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Equipment = require('./containers/EquipmentContainer').default
      const reducer = require('./modules/equipment').default

      /*  Add the reducer to the store on key 'equipment'  */
      injectReducer(store, { key: 'equipment', reducer })

      /*  Return getComponent   */
      cb(null, Equipment)

    /* Webpack named bundle   */
    }, 'equipment')
  }
})
