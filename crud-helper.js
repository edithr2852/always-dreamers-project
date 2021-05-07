// Connect the the database
require('dotenv').config();
require('./config/database');

const User = require('./models/user');

let u, i, c, o;
