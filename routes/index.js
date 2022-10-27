const express = require('express');

// Import our modular routers for notes
const notesRouter = require('./notes');
// TODO: import your app route

const app = express();

app.use('/notes', notesRouter);
// TODO: Initialize app route

module.exports = app;
