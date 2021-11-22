
require('dotenv').config();
const crypto = require('crypto-js')
const mysql = require('mysql');
const Handlebars = require('express-handlebars')
const db = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
});
let {userId ,username} ='';

exports.getUsername = () =>{
    return username;
}


exports.loginInfo = (req,res) =>{
    
    db.getConnection((err,connection)=>{
        if(err) throw err; //not connecting

        let _email = req.body.email;
        let _password = JSON.stringify(crypto.SHA256(req.body.password).words);
        
        connection.query('SELECT * FROM users WHERE users_email = ? AND users_password = ?;',[_email,_password],(err,_loginDetails) =>{
            connection.release();
            
            if(!err)
                if(_loginDetails.length == 0)
                    console.log('no user registered to this login details');
                else
                {
                    userId = _loginDetails[0]["users_id"];
                    username = _loginDetails[0]["users_username"];
                    console.log(userId+" "+username);
                    res.render('home',{username});
                }
                    
            else
                console.log(err);
        });
    });

}
exports.RegisterInfo = (req,res) =>{
    
    db.getConnection((err,connection)=>{
        if(err) throw err; //not connecting

        let _username = req.body.username;
        let _email = req.body.email;
        let _password = JSON.stringify(crypto.SHA256(req.body.password).words);
        
        connection.query('INSERT INTO users(users_username, users_email, users_password) VALUES (?,?,?);',[_username,_email,_password],(err,_loginDetails) =>{
            connection.release();
            
            if(!err)
                res.redirect('login');
            else
                console.log(err);
        });
    });
}

exports.UploadPhoto = (req,res)=>{
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

        //add photo name to DB with current username
        db.getConnection((err,connection)=>{
            if(err) throw err; //not connecting
    
            let _picName = sampleFile.name;
            console.log(userId);
            connection.query('INSERT INTO pictures(pictures_name, users_id) VALUES (?,?);',[_picName,userId],(err,_pictureDetails) =>{
                connection.release();
                
                if(!err)
                    res.redirect('profile');
                else
                    console.log(err);
            });
        });
    });
}