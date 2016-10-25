module.exports = {
  serverConfig: function (server) {
    var mockData = require('../mock-data')
    server.use(mockData())
  }
}
