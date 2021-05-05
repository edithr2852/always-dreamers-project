const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// Always require and configure near the top
require('dotenv').config();

// connect to the database
require('./config/database');

const dreamersRouter = require("./routes/api/dreamers");

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));
app.use('/api/dreamers', dreamersRouter);

const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`Express app running on port ${port}`);
});

app.use('/api/dreamers', require('./routes/api/dreamers'))
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *) is necessary
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
