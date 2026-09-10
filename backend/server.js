const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calcular', (req, res) => {
  const { n1, n2, operacao } = req.body;
  let resultado;

  switch (operacao) {
    case "somar":
      resultado = n1 + n2;
      break;
    case "subtrair":
      resultado = n1 - n2;
      break;
    case "multiplicar":
      resultado = n1 * n2;
      break;
    case "dividir":
      if (n2 === 0) {
        return res.status(400).json({ erro: "Não é possível dividir por zero" });
      }
      resultado = n1 / n2;
      break;
  }
  res.json({ resultado });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));