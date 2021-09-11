const Logger = require("./logger")

const requestLogger = (request, response, next) => {
  Logger.info("Method:", request.method)
  Logger.info("Path:  ", request.path)
  Logger.info("Body:  ", request.body)
  Logger.info("---")
  next()
}

module.exports = { requestLogger }
