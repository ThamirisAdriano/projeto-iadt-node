const express = require('express');
const app = express();

app.use(express.json());

const todos = [
    { id: 1, task: 'Comprar leite' },
    { id: 2, task: 'Lavar o carro' }
];

// Rota para obter a lista de tarefas
app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

module.exports = app;
