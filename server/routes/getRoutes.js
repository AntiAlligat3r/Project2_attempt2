const express = require('express');
const exphbs  = require('express-handlebars');
const bodyPaser = require('body-parser');
const controller = require('../controller/controller.js');
const router = express();

router.use(bodyPaser.urlencoded({extended:false}));
router.use(bodyPaser.json());

router.get('/',(req,res) =>{
    res.render('home',{layout: 'main'});
});
router.get('/login',(req,res) =>{
    res.render('login',{layout: 'logReg'});
});
router.get('/register',(req,res) =>{
    res.render('registration',{layout: 'logReg'});
});

router.post('/home',controller.loginInfo);


module.exports = router;