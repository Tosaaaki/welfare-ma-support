const openai = require('../utils/openaiClient');

async function createChatCompletion(messages, stream = false) {
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages,
    stream,
  });
  return response;
}

module.exports = { createChatCompletion };
