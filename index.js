import router from './src/model/teste.js'
import express from 'express'

const app = express()

app.use(express.json())
app.use("/api", router)

app.listen(3000, () => {
    console.log("Server rodando na http://localhost:3000")
})