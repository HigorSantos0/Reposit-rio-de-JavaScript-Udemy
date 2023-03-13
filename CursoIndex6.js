const nome = 'Higor';
const sobrenome = 'Nascimento';
const idade = 21;
const peso = 85;
const alturaEmCm = 1.87;
let imc; //peso / (altura*altura)
let anoNascimento;

imc = peso / (alturaEmCm*alturaEmCm);
console.log(imc);
anoNascimento = 2022 - idade;
console.log(anoNascimento);

// posso usar também o sinal de + para concatenar
//transplate de string

console.log(nome + ' ' + sobrenome + ' tem ' +  idade +  ' anos, pesa ' +  peso,' kg');
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${imc}`);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);