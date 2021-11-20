
require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
});

exports.loginInfo = (req,res) =>{
    
    db.getConnection((err,connection)=>{
        if(err) throw err; //not connecting

        let _email = req.body.email;
        let _password = req.body.password;
        console.log(`connected as ID ${connection.threadId}`);
        console.log(_email+" "+_password);
        
        connection.query('SELECT * FROM users WHERE users_email = ? AND users_password = ?;',[_email,_password],(err,_loginDetails) =>{
            connection.release();
            
            if(!err)
                if(_loginDetails.length == 0)
                    console.log('no user registered to this login details');
                else
                {
                    res.render('home',{_loginDetails});
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
        let _password = req.body.password;
        console.log(`connected as ID ${connection.threadId}`);
        console.log(_email+" "+_password);
        
        connection.query('INSERT INTO users(users_username, users_email, users_password) VALUES (?,?,?);',[_username,_email,_password],(err,_loginDetails) =>{
            connection.release();
            
            if(!err)
                res.redirect('login');
            else
                console.log(err);
        });
    });


}
//const sqlInsert = "INSERT INTO users (users_username, users_email, users_password) VALUES ("+username+","+email+","+password+");";