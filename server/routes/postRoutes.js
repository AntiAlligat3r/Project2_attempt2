const express = require('express');
const bodyPaser = require('body-parser');
const controller = require('../controller/controller.js');
const session = require('express-session');
const router = express();

router.use(session({
    secret: 'session',
    cookie: {maxAge: 30000},
    saveUninitialized: false
}));

router.use(bodyPaser.urlencoded({extended:true}));
router.use(bodyPaser.json());

router.post('/login',controller.loginInfo);

router.post('/register',controller.RegisterInfo);

module.exports = router;
