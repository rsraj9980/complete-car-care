const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services');

// GET /api/services
router.get('/', servicesCtrl.index);
// GET /api/services/:id
router.get('/:id', servicesCtrl.show);

module.exports = router;
