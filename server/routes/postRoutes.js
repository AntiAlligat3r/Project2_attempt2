const express = require('express');
const bodyPaser = require('body-parser');

const router = express();

router.use(bodyPaser.urlencoded({extended:true}));
router.use(bodyPaser.json());


router.post('/home',(req,res)=>
{
    console.log(req.body.email);
    res.redirect('/');
})

module.exports = router;