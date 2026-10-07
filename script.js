import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/teste1/:num1/:num2', (req, res) => {
    const num1 = Number(req.query.num1)
    const
})

app.listen(3000, () => {
    console.log("servidor rodando na http://localhost:3000/")
})