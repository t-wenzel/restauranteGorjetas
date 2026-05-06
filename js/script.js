valorConta = document.getElementById("valorConta");
qualidadeServico = document.getElementById("qualidadeServico");
valorGorjeta = document.getElementById("valorGorjeta");
valorTotal = document.getElementById("valorTotal");

function pegarPorcentagem(qualidade) {
  switch (qualidade) {
    case "Excelente":
      return 0.1;
      break;
    case "Ótimo":
      return 0.08;
      break;
    case "Bom":
      return 0.05;
      break;
    case "Ruim":
      return 0.02;
      break;
  }
}

function calcularGorjeta(valorConta, qualidade) {
  return valorConta * pegarPorcentagem(qualidade);
}

function calcularTotal(valorConta, qualidade) {
  return conta + calcularGorjeta(valorConta, qualidade);
}

function mostrarValores(conta, qualidade) {
  valorConta.innerHTML = conta.toFixed(2);
  qualidadeServico.innerHTML = qualidade;
  valorGorjeta.innerHTML = calcularGorjeta(conta, qualidade).toFixed(2);
  valorTotal.innerHTML = calcularTotal(conta, qualidade).toFixed(2);
}

function logarValores(conta, qualidade) {
  console.log(`Valor da conta: R$ ${conta.toFixed(2)}\nQualidade do Serviço: ${qualidade}\nValor da Gorjeta: R$ ${calcularGorjeta(conta, qualidade).toFixed(2)}\nValor Total: ${calcularGorjeta(conta, qualidade).toFixed(2)}`);
}

conta = 235.6;
qualidade = "Ótimo";

mostrarValores(conta, qualidade);
logarValores(conta, qualidade);
