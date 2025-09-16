function calcularCreditoEspecial() {
  // pede o saldo médio do usuário e o converte para um número
  let saldoMedio = Number(prompt("Digite o saldo médio do cliente:"));
  let percentual;
  let valorCredito;

  // if/else if é usado p definir o percentual baseado na tabela
  if (saldoMedio > 600) {
    percentual = 0.40; 
  } else if (saldoMedio > 400) {
    percentual = 0.30; 
  } else if (saldoMedio > 200) {
    percentual = 0.20; 
  } else {
    percentual = 0; // nenhum crédito
  }

  valorCredito = saldoMedio * percentual; // calcula o valor do crédito com base no saldo e no percentual

  // resultado 
  console.log("--- Resumo do Crédito ---");
  console.log(`Saldo médio do cliente: R$ ${saldoMedio.toFixed(2)}`);
  
  if (valorCredito > 0) {
    console.log(`Percentual de crédito: ${(percentual * 100).toFixed(0)}%`);
    console.log(`O valor do crédito especial é: R$ ${valorCredito.toFixed(2)}`);
  } else {
    console.log("Nenhum crédito especial foi concedido.");
  }
}

// Para testar, basta chamar a função
calcularCreditoEspecial();