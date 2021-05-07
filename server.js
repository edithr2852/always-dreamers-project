const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();

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

app.use('/api/users', require('./routes/api/users'));
app.use('/api/dreamers', require('./routes/api/dreamers'))

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
