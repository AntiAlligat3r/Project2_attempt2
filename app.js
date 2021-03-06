const express = require('express');
const exphbs  = require('express-handlebars');
const getRoutes =require('./server/routes/getRoutes.js');
const postRoutes =require('./server/routes/postRoutes.js');
const postUploadRoute =require('./server/routes/postUploadRoute.js');


const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000||3001;

//static files
app.use(express.static('./public'));

//Templating Engine
app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

//setting up the session

app.use('/',getRoutes);
app.use('/',postRoutes);
app.use('/',postUploadRoute);

app.listen(port, ()=>console.log(`listening on port ${port}`));