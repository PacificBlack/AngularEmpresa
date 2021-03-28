const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.set('puerto',3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(require('./routes/empresas.routes'));

module.exports = app;