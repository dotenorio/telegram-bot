const telegram = require('../lib/telegram')

module.exports = async (req, res) => {
  if (!req.body || !req.body.message) {
    res.statusCode = 400;
    return res.json({
      ok: false,
      message: `O campo 'message' é obrigatório.`
    })
  }

  const { text, chat: { id, first_name } } = req.body.message
  if (text === 'oi') {
    const { data: { result: result } } = await telegram.sendMessage({ chat_id: id, text: `Olá ${first_name}!` })
    return res.json(result)
  }

  const { data: { result: result } } = await telegram.sendMessage({ chat_id: id, text: `Oops! Não entendi..` })
  res.json(result)
}