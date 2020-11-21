const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');

router.get('/', tripsCtrl.index);
router.get('/new', tripsCtrl.new);
// router.get('/:id', tripsCtrl.show);
router.post('/', tripsCtrl.create);

module.exports = router;
