const express = require('express');
//import express from 'express'
const path = require('path');
const userRoutes = require('./routes/usuarioRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', userRoutes);

app.listen(PORT, () => {
});
