const express = require('express');
const exphbs  = require('express-handlebars');
const bodyPaser = require('body-parser');

const router = express.Router();

router.post('/home',(req,res) =>{
    var _email = req.body.email;
    var _pass = req.body.password;
    res.redirect('/home/'+_email);
});

module.exports = router;