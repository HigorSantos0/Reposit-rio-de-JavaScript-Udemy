let num1, num2;

num1 = 1500;
num2 = 2.5324235423;

//console.log(num1.toString() + num2); //nesse momento num1 se torna uma string, por isso, acontece a junção das variáveis
//console.log(typeof num1);//aqui, num1 já voltou a ser um número
//para alterar o valor da variável deveria ser feito isso: num1 = num1.toString();

//representação binária do num1
//console.log(num1.toString(2));

//diminuir casas decimais de um numero
//console.log(num2.toFixed(2)); 

//verificar se o valor que está armazenado na variável é um valor inteiro
//console.log(Number.isInteger(num1));

//verificar se a conta é invalida
//temp = num1 * 'ola';
//console.log(Number.isNaN(temp));

let num3 = 0.7, num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;

//ou num3 = ((num3 * 100) + (num4 * 100)) / 100;

num3 = Number(num3.toFixed(2));

console.log(num3);
console.log(Number.isInteger(num3));