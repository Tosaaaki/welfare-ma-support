const axios = require('axios');

const client = axios.create({
  baseURL: 'https://api.line.me/v2/bot',
  headers: {
    Authorization: `Bearer ${process.env.LINE_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

async function pushMessage(to, messages) {
  await client.post('/message/push', { to, messages });
}

module.exports = { pushMessage };
