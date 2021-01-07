const express = require('express');
const app = require('./golfs_api/app');
app.use(express.static('build'));

