const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services');

// GET /api/items
router.get('/', servicesCtrl.index);
// GET /api/items/:id
router.get('/:id', servicesCtrl.show);

module.exports = router;
