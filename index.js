
/*
let umaString = "um \"texto\"";

console.log(umaString);
*/

// printar algum caractere da string
let umaString = "um texto";

//console.log(umaString[4]); // umaString.charAt(7));

console.log(umaString.concat(' em', ' um', ' lindo dia.'));
//ou
console.log(umaString + ' em um lindo dia');
//ou
console.log(`${umaString} em um lindo dia.`);

//Buscar o índice da palavra texto

console.log(umaString.indexOf('texto'));

//buscar índice depois de algum numero desejado
console.log(umaString.indexOf('texto', 4));

//buscar índice de tras para frente
console.log(umaString.lastIndexOf('um'));

//expressão regular

console.log(umaString.match(/[a-z]/g)); //nesse exemplo ele imprimiu as letras minúsculas que tinha na string

//encontrar uma letra específica
console.log(umaString.search(/x/));

//substituir uma palavra por outra
console.log(umaString.replace('um', 'outra')); // ou replace(/um/, 'outra')) porque essa função aceita expressão regular

//outro exemplo
let string = 'o rato roeu a roupa do rei de roma';
console.log(string.replace(/r/, '#')); //sem a flag 'G', eu troco apenas a primeira ocorrência.
console.log(string.replace(/r/g, '#'));// Com a flag 'G', troco todas as ocorrências de 'r'.

//Contar tamanho da string
console.log(string.length);

//imprimir string especificando o índice
console.log(string.slice(2, 6));

//dividir uma string
console.log(string.split(' ')); // ou split('r'); ou split(' ', 2) - indicando quantas vezes você quer que aconteça 

//imprimir string com letras maiúsculas ou minúsculas

console.log(string.toUpperCase());
console.log(string.toLowerCase());

