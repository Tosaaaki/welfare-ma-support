const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

router.post('/conversationgpt4', chatbotController.conversationGPT4);

module.exports = router;
