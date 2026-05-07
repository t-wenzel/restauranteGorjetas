function pegarStringQualidade(qualidade) {
  switch (qualidade) {
    case "excelente":
      return "Excelente";
    case "otimo":
      return "Ótimo";
    case "bom":
      return "Bom";
    case "ruim":
      return "Ruim";
  }
}

function pegarPorcentagem(qualidade) {
  switch (qualidade) {
    case "excelente":
      return 0.1;
    case "otimo":
      return 0.08;
    case "bom":
      return 0.05;
    case "ruim":
      return 0.02;
  }
}

function calcularGorjeta(conta, qualidade) {
  return conta * pegarPorcentagem(qualidade);
}

function calcularTotal(conta, qualidade) {
  return conta + calcularGorjeta(conta, qualidade);
}

function mostrarValores(conta, qualidade) {
  document.getElementById("valorContaDisplay").innerHTML = 'R$' + conta.toFixed(2);
  document.getElementById("qualidadeServicoDisplay").innerHTML = pegarStringQualidade(qualidade);
  document.getElementById("valorGorjeta").innerHTML = 'R$' + calcularGorjeta(conta, qualidade).toFixed(2);
  document.getElementById("valorTotal").innerHTML = 'R$' + calcularTotal(conta, qualidade).toFixed(2);
}

function logarValores(conta, qualidade) {
  console.log(`Valor da conta: R$ ${conta.toFixed(2)}\nQualidade do Serviço: ${qualidade}\nValor da Gorjeta: R$ ${calcularGorjeta(conta, qualidade).toFixed(2)}\nValor Total: ${calcularTotal(conta, qualidade).toFixed(2)}`);
}

function enviarForm() {
  conta = document.getElementById("valorConta").valueAsNumber;
  qualidade = document.getElementById("valorQualidade").value;
  mostrarValores(conta, qualidade);
  logarValores(conta, qualidade);
}