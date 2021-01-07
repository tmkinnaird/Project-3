const express = require('express');
const app = require('./golfs-app-api/server.js');
app.use(express.static('build'));

