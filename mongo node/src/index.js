import express from "express";
import route from "./routes.js";
import connectDb from "./database/connection.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use(route);

connectDb()
  .then(() =>
    app.listen(port, () =>
      console.log(
        `Servidor rodando em http://localhost:${port} e Banco de dados conectado!`
      )
    )
  )
  .catch((error) => console.log("erro ao conectar no banco de dados: ", error));
