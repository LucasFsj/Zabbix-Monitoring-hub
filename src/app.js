const express = require ("express");
const app = express();


// middleware para permitir JSON no body
app.use(express.json());

// rota de healthcheck
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
});

module.exports = app;