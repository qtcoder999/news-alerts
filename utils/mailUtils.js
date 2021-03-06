
const { credentials } = require("../config/credentials")
const { logger } = require("../config/logConfig")

const send = require("gmail-send")({
  user: credentials.username,
  pass: unescape(process.env.GMAIL_PASSWORD),
  bcc: credentials.recipients,
  subject: "Latest version of create-react-app"
})

module.exports.sendMail = async (options) => {
  send(options, (error, result, fullResult) => {
    if (error) logger.info(error)
    logger.info(result)
  })
}
