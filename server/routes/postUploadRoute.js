const express = require('express');
const fileUpload = require('express-fileupload');
const controller = require('../controller/controller.js');
const router = express();

router.use(fileUpload());

router.post('/upload',controller.UploadPhoto);

module.exports = router;