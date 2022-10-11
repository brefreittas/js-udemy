const nome = 'Breno';
const sobrenome = 'de Freitas';
const idade = 16;
const peso  = 60;
const alturaEmM = 1.80;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}, tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM}m de altura e seu IMC é de ${imc}`);