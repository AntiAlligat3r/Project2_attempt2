const express = require('express');
const exphbs  = require('express-handlebars');
const bodyPaser = require('body-parser');
const controller = require('../controller/controller.js');


const router = express();

router.get('/',(req,res) =>{
    res.render('home',{layout: 'main'});
});
router.get('/profile',(req,res) =>{
    res.render('profile',{layout: 'main',username: controller.getUsername(),num:controller.getNum(),imgName:controller.getImgName()});
   
});
router.get('/login',(req,res) =>{
    res.render('login',{layout: 'logReg'});
});
router.get('/register',(req,res) =>{
    res.render('registration',{layout: 'logReg'});
});



module.exports = router;