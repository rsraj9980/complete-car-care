const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments')
// POST /api/appointments
router.post('/', appointmentsCtrl.create);

router.get('/myAppointments', appointmentsCtrl.getAll);


module.exports = router;
