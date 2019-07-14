const { get, post } = require('axios')

const url = 'https://api.keyvalue.xyz'

async function getId () {
  const data = await get(`${url}/d67b6332/lastUpdateId`)
  return data.data
}

async function setId (id) {
  return await post(`${url}/d67b6332/lastUpdateId/${id}`)
}

module.exports = {
  getId,
  setId
}