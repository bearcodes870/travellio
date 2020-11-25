const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/activities');

router.post('/trips/:id/activities', reviewsCtrl.create);

module.exports = router;