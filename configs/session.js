const session = require("express-session");
//EXPRESS MYSQL SESSION 
const db = require("../configs/db");
const MySQLStore = require("express-mysql-session")(session);
const sessionStore = new MySQLStore({}, db);

const sessionConfig = session({
key: process.env.KEY,
secret: process.env.SECRET,
saveUninitialized: false,
resave: false,
store: sessionStore,
cookie: {

maxAge: 1000 * 60 * 1,
httpOnly: false,
secure: false,
sameSite: 'lax'

}

}); 

module.exports = sessionConfig;