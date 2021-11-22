const express = require('express');
const bodyPaser = require('body-parser');
const controller = require('../controller/controller.js');

const router = express();

router.use(bodyPaser.urlencoded({extended:true}));
router.use(bodyPaser.json());

router.post('/login',controller.loginInfo);

router.post('/register',controller.RegisterInfo);

module.exports = router;
