async function calcular() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let operacao = document.getElementById("operacao").value;
  
const resposta = await fetch("http://localhost:3000/calcular", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ n1, n2, operacao })
});
const dados = await resposta.json();
document.getElementById("resultado").innerText = `Resultado: ${dados.resultado}`;
}