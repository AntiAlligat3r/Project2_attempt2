require('dotenv').config();
const db = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
})

const sqlInsert = `INSERT INTO users (users_username, users_email, users_password) VALUES (${username},${email},${password});`;