const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const roomsRoutes = require('./routes/rooms');

const app = express();

// Middleware untuk logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));  // Middleware untuk melayani file statis

app.use('/api', roomsRoutes);

module.exports = app;
