const router = require('express').Router();
const ctrl = require('../controllers/contactController');
router.post('/', ctrl.submit);
router.get('/', ctrl.getAll);
module.exports = router;
