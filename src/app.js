const express = require ("express");
const healthRoutes = require('./routes/health.routes')

const app = express();


// middleware para permitir JSON no body
app.use(express.json());

// rota de healthcheck
app.use('/api',healthRoutes);

module.exports = app;