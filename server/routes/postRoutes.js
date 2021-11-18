const express = require('express');
const exphbs  = require('express-handlebars');
const bodyPaser = require('body-parser');

const router = express();

router.post('/',(req,res) =>{
    req.render('home',{layout: 'main'});
});

module.exports = router;