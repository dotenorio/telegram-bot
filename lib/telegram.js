const { post } = require('axios')

const token = process.env.TELEGRAM_TOKEN
const url = `https://api.telegram.org/bot${token}`

async function getUpdates ({ offset, limit, allowed_updates }) {
  return await post(`${url}/getUpdates`, {
    offset: offset | 0,
    limit: limit | 100,
    allowed_updates: allowed_updates | ['message']
  })
}

async function sendMessage ({ chat_id, text }) {
  return await post(`${url}/sendMessage`, {
    chat_id,
    text
  })
}

module.exports = {
  getUpdates,
  sendMessage
}