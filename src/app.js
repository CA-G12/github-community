const path = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./routers');

const app = express();
app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));
// /api/users/12/commwnts/

app.use(router);

module.exports = app;
