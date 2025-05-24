const express = require('express');
const contactRoutes = require('./api/routes/contactRoutes');
const chatbotRoutes = require('./api/routes/chatbotRoutes');
const resourceRoutes = require('./api/routes/resourceRoutes');

const app = express();
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/integrations/chat-gpt', chatbotRoutes);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
