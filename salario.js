function calcularNovoSalario() {
  // tabela de percentuais 
  const percentuaisAumento = {
    101: 0.10, // gerente
    102: 0.20, // engenheiro
    103: 0.30, // técnico
  };

  // pede o salário e o código do cargo ao usuário
  const salarioAntigo = Number(prompt("Digite o salário atual do funcionário:"));
  const codigoCargo = Number(prompt("Digite o código do cargo:"));
  
  // percentual padrão de 40% 
  let percentual = 0.40; 
  
  let cargo = "Não identificado";

  // se o codigo do cargo existir natabela,
  // é usado o percentual correspondente
  if (percentuaisAumento.hasOwnProperty(codigoCargo)) {
    percentual = percentuaisAumento[codigoCargo];

    // nome do cargo
    switch(codigoCargo) {
      case 101: cargo = "Gerente"; break;
      case 102: cargo = "Engenheiro"; break;
      case 103: cargo = "Técnico"; break;
    }
  }

  // calculo do novvo salario
  const aumento = salarioAntigo * percentual;
  const novoSalario = salarioAntigo + aumento;
  const diferenca = novoSalario - salarioAntigo;

  // exibição de resultados
  console.log("--- Detalhes do Aumento Salarial ---");
  console.log(`Cargo: ${cargo}`);
  console.log(`Salário Antigo: R$ ${salarioAntigo.toFixed(2)}`);
  console.log(`Aumento concedido: ${(percentual * 100).toFixed(0)}%`);
  console.log(`Novo Salário: R$ ${novoSalario.toFixed(2)}`);
  console.log(`Diferença salarial: R$ ${diferenca.toFixed(2)}`);
}

calcularNovoSalario();