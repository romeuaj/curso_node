import express from 'express'
import route from './routes.js'

const port = 3331
const app = express()

app.use(express.json())
app.use(route)

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))