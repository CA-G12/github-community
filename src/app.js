const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;

// require('dotenv').config();
// const apiKey = process.env.API_KEY;
