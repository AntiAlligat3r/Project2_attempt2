const express = require('express');
const exphbs  = require('express-handlebars');
const bodyPaser = require('body-parser');

const router = express();

router.use(bodyPaser.urlencoded({extended:true}));
router.use(bodyPaser.json());

router.post('/login-form',(req,res) =>{
    var _email = req.body.email;
    var _pass = req.body.password;
    console.log(_email,_pass);
    res.status(200).redirect('/');
});

module.exports = router;