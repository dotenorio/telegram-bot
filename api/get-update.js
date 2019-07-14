const telegram = require('../lib/telegram')
const { getId, setId } = require('../lib/last-updated-id')

module.exports = async (req, res) => {
  const update_id = await getId()

  const { data: { result: result } } = await telegram.getUpdates({ offset: update_id, limit: 1 })

  if (result.length === 0) {
    return res.json({
      ok: true,
      message: 'No results found.',
      result
    })
  }

  await setId(update_id + 1)

  const { message: { text, chat: { id, first_name } } } = result[0]
  if (text === 'oi') {
    const { data: { result: result } } = await telegram.sendMessage({ chat_id: id, text: `Olá ${first_name}!` })
    return res.json(result)
  }
  
  res.json(result)
}