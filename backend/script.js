function calcular() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let operacao = document.getElementById("operacao").value;
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
      resultado = n1 / n2;
      break;
  }

  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
console.log(resultado);
}