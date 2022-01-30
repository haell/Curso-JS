/*
Israel Araújo tem 39 anos, pesa 67 kg
tem 1.74 de altura e seu IMC é de 26.879854355462
*/
const nome = 'Israel';
const sobrenome = 'Araújo';
const idade = 40;
const peso = 67;
const altura = 1.74;
const IMC = 26.879854355462;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2022 - idade
console.log('Esse é meu ano de nascimento: ', anoNascimento);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
