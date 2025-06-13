const openai = require('../utils/openaiClient');

// ChatGPT に問い合わせを行う共通関数
// stream を true にするとストリームで結果を受け取る
// asJSON を true にすると JSON 形式での応答を要求する
async function createChatCompletion(messages, stream = false, asJSON = false) {
  const params = {
    model: 'gpt-4',
    messages: asJSON
      ? [{ role: 'system', content: 'Please reply in JSON format.' }, ...messages]
      : messages,
    stream,
  };

  if (asJSON) {
    params.response_format = { type: 'json_object' };
  }

  const response = await openai.createChatCompletion(params);
  return response;
}

module.exports = { createChatCompletion };
