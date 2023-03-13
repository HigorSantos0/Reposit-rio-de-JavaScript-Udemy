// não podemos criar constantes com palavras reservadas
// constantes precisam ter nome significativos
// não pode comaãr o nome de uma constante com um numero
// utilizamos CamelCase
// Case-Sensitive
// não pode modificar o valor de uma constante
// Não utilize VAR, utilize CONST.

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;



console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero);
console.log(typeof (primeiroNumero + segundoNumero));