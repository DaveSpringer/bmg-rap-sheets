const logger = require('../lib/logger')

logger.info('Starting server...')
var port = process.env.PORT || 5000
var host = '0.0.0.0'
require('../../server/main').listen(port, host, () => {
  logger.success('Server is running at http://localhost:' + port)
})
