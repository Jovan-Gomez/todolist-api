const express = require('express');
const authRoutes = require('./routes/auth.routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(authRoutes);
module.exports = app;