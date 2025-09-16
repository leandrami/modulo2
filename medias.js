const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));

const opcao = Number(prompt(
  "Escolha o tipo de média que deseja calcular:\n" + "1 - Média Aritmética\n" + "2 - Média Ponderada (pesos 3, 3 e 4)\n" + "3 - Média Harmônica" ));


let resultado;
switch (opcao) {
  case 1:
    resultado = (nota1 + nota2 + nota3) / 3;
    alert(`A média aritmética é: ${resultado.toFixed(2)}`);
    break;

  case 2:
    resultado = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (3 + 3 + 4);
    alert(`A média ponderada é: ${resultado.toFixed(2)}`);
    break;

  case 3:
    const inverso1 = 1 / nota1;
    const inverso2 = 1 / nota2;
    const inverso3 = 1 / nota3;
    resultado = 3 / (inverso1 + inverso2 + inverso3);
    alert(`A média harmônica é: ${resultado.toFixed(2)}`);
    break;

  default:
    alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}