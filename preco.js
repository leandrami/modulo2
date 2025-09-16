function calcularPrecoTotal() {
  // tabela de preços
  const tabelaDePrecos = {
    2: 32.00,
    3: 45.00,
    4: 37.00,
    5: 32.00,
    6: 45.00,
  };

  // pede o código e a quantidade ao usuário
  const codigo = Number(prompt("Digite o código do produto:"));
  const quantidade = Number(prompt("Digite a quantidade comprada:"));
  let precoUnitario;
  let precoTotal;

  // verifica se o código de produto existe na tabela
  if (tabelaDePrecos.hasOwnProperty(codigo)) {
    // se o código for válido, pega o preço e faz o cálculo
    precoUnitario = tabelaDePrecos[codigo];
    precoTotal = precoUnitario * quantidade;

    // exibe o resultado no console
    console.log("--- Detalhes da Compra ---");
    console.log(`Código do Produto: ${codigo}`);
    console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Preço Total: R$ ${precoTotal.toFixed(2)}`);
  } else {
    // se o código não for encontrado
    console.log("Código de produto inválido. Por favor, tente novamente.");
  }
}
calcularPrecoTotal();