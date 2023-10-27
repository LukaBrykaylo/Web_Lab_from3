const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/create', controller.create);
router.get('/read', controller.read);
router.post('/update', controller.update);
router.delete('/delete/:id', controller.delete);



module.exports = router;
