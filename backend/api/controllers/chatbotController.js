const chatGPTService = require('../../services/chatGPTService');

exports.conversationGPT4 = async (req, res) => {
  try {
    const { messages, stream } = req.body;
    const response = await chatGPTService.createChatCompletion(messages, stream);

    if (stream) {
      response.data.pipe(res);
    } else {
      res.json(response.data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'ChatGPT request failed' });
  }
};
