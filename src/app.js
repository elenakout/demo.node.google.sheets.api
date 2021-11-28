const express = require('express');
const morgan = require('morgan');

// Import Routers
const noteRouter = require('./routes/noteRoutes');

const app = express();

// Middleware loggong
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middelware Parse body json
app.use(express.json());

// Middleware for public files
app.use(express.static(`${__dirname}/../public`));

app.use('/api/v1/notes', noteRouter);

module.exports = app;
