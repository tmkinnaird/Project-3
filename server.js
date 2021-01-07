const express = require('express');
const app = require('./golf-app-api/server.js');
app.use(express.static('build'));

