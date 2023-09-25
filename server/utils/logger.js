const Chalk = require("chalk")

const info = (...params) =>
  console.log(
    `${new Date().toISOString()} Logger [${Chalk.green("Info")}]: `,
    ...params
  )

const error = (...params) =>
  console.error(
    `${new Date().toISOString()} Logger [${Chalk.red("Error")}]: `,
    ...params
  )

module.exports = { info, error }
