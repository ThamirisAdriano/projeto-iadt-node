const app = require('./index');
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
