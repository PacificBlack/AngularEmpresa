const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('puerto',3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(require('./routes/empresas.routes'));

module.exports = app;