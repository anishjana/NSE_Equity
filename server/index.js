const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const app = express();

app.use(bodyParser.json());
app.use (cors());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

const posts = require('./routes/api/get.js');
app.use('/', posts );

// server start config
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on ${port}`));