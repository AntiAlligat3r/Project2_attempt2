const express = require('express');
const fileUpload = require('express-fileupload');
const router = express();

router.use(fileUpload());

router.post('/upload',(req,res)=>{
    let sampleFile;
    let uploadPath;

    if(!req.files||Object.keys(req.files).length == 0)
        return res.status(400).send('no files were uploaded');

    sampleFile = req.files.img;

    console.log(sampleFile);
    uploadPath = './server/uploads/'+sampleFile.name;

    //use mv() to place photo in server

    sampleFile.mv(uploadPath , (err)=>{
        if(err) return res.status(500).send(err)

        res.send('File uploaded');
    });
})

module.exports = router;