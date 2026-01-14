const express = require ("express");
const healthRoutes = require('./routes/health.routes')
const metricsRoutes = require('./routes/metrics.routes')

const app = express();


// middleware para permitir JSON no body
app.use(express.json());

// rota de healthcheck
app.use('/api',healthRoutes);
app.use('/api',metricsRoutes)

module.exports = app;