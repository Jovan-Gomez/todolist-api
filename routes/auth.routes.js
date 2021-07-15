const express = require('express');
const { register } = require('../controllers/auth.controller');
const router = express.Router();


router.post('/register', register);
router.post('/login');
router.post('/logout');
router.post('/forgot-password');
router.post('/reset-password');
router.post('/send-verification-email');
router.post('/verify-email');

module.exports = router;
