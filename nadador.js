let idade = Number(prompt("Digite a idade do nadador."));

if (idade >= 5 && idade <= 7) {
  console.log("O nadador é da categoria Infantil A.");
} else if (idade >= 8 && idade <= 10) {
  console.log("O nadador é da categoria Infantil B.");
} else if (idade >= 11 && idade <= 13) {
  console.log("O nadador é da categoria Juvenil A.");
} else if (idade >= 14 && idade <= 17) {
  console.log("O nadador é da categoria Juvenil B.");
} else if (idade >= 18) {
  // Nova condição para a categoria Adulto
  console.log("O nadador é da categoria Adulto.");
} else {
  // Este 'else' lida com idades abaixo de 5 anos
  console.log("Idade inválida. O nadador não se encaixa em nenhuma categoria.");
}