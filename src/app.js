import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

// exemplo de rota
app.get('/testes', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

server.listen(3000, () => {
    console.log('server esta rodando na porta 3000')
});
