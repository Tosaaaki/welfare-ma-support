const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { validateContact } = require('../middleware/validationMiddleware');

router.post('/', validateContact, contactController.submitContactForm);

module.exports = router;
