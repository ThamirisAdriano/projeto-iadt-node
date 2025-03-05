// index.js

const express = require('express');
const app = express();
const notesRoutes = require('./notes');
const authRouter = require('./auth');

app.use(express.json());
app.use('/api', notesRoutes);
app.use(authRouter);

module.exports = app;
