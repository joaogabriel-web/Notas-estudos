import express from 'express';
import router from './src/router/teste.js';

const app = express()
app.use(express.json());
app.use('/api', router)

app.listen(3000, () => {
    console.log('Servidor rodando na http://localhost:3000')
})