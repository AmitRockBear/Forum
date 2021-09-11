const Express = require("express")
const Mongoose = require("mongoose")
const Cors = require("cors")
const Nconf = require("nconf")

Nconf.defaults(require("./config.json"))
require("dotenv").config()

const Routers = require("./routes")

const { requestLogger } = require("./utils/middlewares")

const Logger = require("./utils/logger")

const PORT = Nconf.get("port")

class Service {
  constructor() {
    this.app = Express()
  }

  init() {
    Logger.info("Initializing Service")

    Mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        Logger.info("Connected to MongoDB")
      })
      .catch((error) => {
        Logger.error("Failed connecting to MongoDB:", error.message)
      })

    this.app.use(Cors())
    this.app.use(Express.json())
    this.app.use(requestLogger)

    this.app.use("/api/posts", Routers.PostsRouter)

    this.app.listen(PORT, () => Logger.info(`Listening to port ${PORT}`))
  }
}

module.exports = Service
