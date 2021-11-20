const express = require('express');
const exphbs  = require('express-handlebars');
const bodyPaser = require('body-parser');
const mysql = require('mysql');
const getRoutes =require('./server/routes/getRoutes.js');
const postRoutes =require('./server/routes/postRoutes.js');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000||3001;

//pasring middleware
//parse application/x-www-form-urlencoded

app.use(bodyPaser.urlencoded({extended:true}));
app.use(bodyPaser.json());


//static files
app.use(express.static('./public'));

//Templating Engine
app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

//db connection
const db = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
})

const sqlInsert = "INSERT INTO users (users_username, users_email, users_password) VALUES ('AntiAlligat3r','fallschirmjager99@gmail.com','1234');";

db.getConnection((err,connection)=>{
    if(err) throw err; //not connecting
    console.log(`connected as ID ${connection.threadId}`);
});

app.use('/',getRoutes);
app.use('/',postRoutes);
app.listen(port, ()=>console.log(`listening on port ${port}`));