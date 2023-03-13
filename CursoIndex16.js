/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null(bigint, symbol) - Valores Copiados


Referência (mutável) - array, object, function - Valores Passados por Referência
*/
/*
//Primitivos - Esse dado(Valor) é imutável
let nome = 'Higor';
nome[0] = 'R'; 
console.log(nome[0], nome);

//Referência

//Os valores mudam de formas iguais porque eles apontam
//para um mesmo local na memória

let a = [1,2,3];
let b = [...a];//Isso fará com que o valor de 'a' seja copiado para 'b', tornando a variável 'b' independente.
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b); 

b.pop(4);
console.log(a, b);

a.push('Higor');
console.log(c);
*/

//object

const a = {
    nome: 'higor',
    sobrenome: 'nascimento'
};
const b = {...a};

a.nome = 'pâmela';

console.log(a);
console.log(b);
