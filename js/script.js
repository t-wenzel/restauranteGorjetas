contaInner = document.getElementById("valorConta").innerHTML;
qualidadeInner = document.getElementById("valorQualidade").innerHTML;
gorjetaInner = document.getElementById("valorGorjeta").innerHTML;
totalInner = document.getElementById("valorTotal").innerHTML;
valorConta = document.getElementById("valorConta").value;
valorQualidade = document.getElementById("valorQualidade").value;
valorGorjeta = document.getElementById("valorGorjeta").value;
valorTotal = document.getElementById("valorTotal").value;

function pegarPorcentagem(qualidade) {
  switch (qualidade) {
    case "excelente":
      return 0.1;
      break;
    case "otimo":
      return 0.08;
      break;
    case "bom":
      return 0.05;
      break;
    case "ruim":
      return 0.02;
      break;
  }
}

function calcularGorjeta(conta, qualidade) {
  console.log(conta, pegarPorcentagem())
  return conta * pegarPorcentagem(qualidade);
}

function calcularTotal(conta, qualidade) {
  console.log(conta + calcularGorjeta(conta, qualidade))
  return conta + calcularGorjeta(conta, qualidade);
}

function mostrarValores(conta, qualidade) {
  contaInner = conta;
  qualidadeInner = qualidade;
  gorjetaInner = calcularGorjeta(conta, qualidade);
  totalInner = calcularTotal(conta, qualidade);
}

function logarValores(conta, qualidade) {
  console.log(`Valor da conta: R$ ${conta}\nQualidade do Serviço: ${qualidade}\nValor da Gorjeta: R$ ${calcularGorjeta(conta, qualidade)}\nValor Total: ${calcularGorjeta(conta, qualidade)}`);
}

function enviarForm() {
  conta = valorConta;
  qualidade = valorQualidade;
  mostrarValores(conta, qualidade);
  logarValores(conta, qualidade);
}