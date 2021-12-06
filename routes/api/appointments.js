const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments')
// POST /api/appointments
router.post('/', appointmentsCtrl.create);

module.exports = router;
