import express from "express";
import anotacaoRoutes from "./routes/anotacaoRoutes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use("/anotacoes", anotacaoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
