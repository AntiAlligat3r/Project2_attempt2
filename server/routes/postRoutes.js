const express = require('express');
const bodyPaser = require('body-parser');

const router = express();

router.use(bodyPaser.urlencoded({extended:true}));
router.use(bodyPaser.json());

router.post('/register',(req,res) =>{
   // res.render('registration',{layout: 'logReg'});
});


module.exports = router;