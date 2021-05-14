// Selector
const numero = document.getElementById("keys");
const display = document.getElementById("display");

// Listener
numero.addEventListener("click", eNumerar);
//
let n = ""; // Guardar numeros
let n1 = "";
let n2 = "";
let operacao = "";

//
function eNumerar(e) {
  // 1. Identificar elemento clicado
  let check = e.target.textContent;

  switch (check) {
    case "+":
      operacao = check;
      n1 = display.innerHTML;
      n = "";
      break;
    case "-":
      operacao = check;
      n1 = display.innerHTML;
      n = "";
      break;
    case "*":
      operacao = check;
      n1 = display.innerHTML;
      n = "";
      break;
    case "/":
      operacao = check;
      n1 = display.innerHTML;
      n = "";
      break;
    case "AC":
      n = "";
      n1 = "";
      n2 = "";
      operacao = "";
      display.innerHTML = "0";
      break;
    case "=":
      calcular();
      break;
    default:
      n += check;
      display.innerHTML = n;
      break;
  }
}
function calcular() {
  n2 = n;
  switch (operacao) {
    case "+":
      let soma = Number(n1) + Number(n2);
      display.innerHTML = soma;
      operacao = "";
      break;
    case "-":
      let sub = Number(n1) - Number(n2);
      display.innerHTML = sub;
      operacao = "";
      break;
    case "*":
      let mult = Number(n1) * Number(n2);
      display.innerHTML = mult;
      operacao = "";
      break;
    case "/":
      let div = Number(n1) / Number(n2);
      display.innerHTML = div;
      operacao = "";
      break;
    default:
      break;
  }
}
