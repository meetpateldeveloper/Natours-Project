// Importing 3rd party modules
const morgan = require('morgan');
const express = require('express');

const app = express();

// Importing the modules
const tourRouters = require('./routes/tourRoutes');
const userRouters = require('./routes/userRoutes');

// MiddleWare
app.use(morgan('tiny'));
app.use(express.json());

// Tour Routes
app.use('/api/v1/tours',tourRouters);
app.use('/api/v1/users',userRouters);

module.exports = app;