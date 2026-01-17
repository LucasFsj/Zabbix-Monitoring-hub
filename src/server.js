const app = require('./app')

const PORT = process.env.PORT || 3020;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${HOST}:${PORT}`);
})

