const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/read', controller.read);
// router.get('/readDef', controller.readDef);



module.exports = router;