 /*
 const array = [1, 2, 3];
 array.push(4);
 array[0] = 'luiz';
 //array = 'outra'; Isso não pode acontecer, há não ser que a 'const' fosse 'Let'.
 console.log(array);
 */

//Object
//const nome01 = 'Higor';
//const sobrenome01 = 'Nascimento';
//const idade01 = 25;
/*
const pessoa1 = {
    nome: 'Higor',
    sobrenome: 'Nascimento',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/

/*
//funcao para melhorar

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Higor', 'Nascimento', 21);
const pessoa2 = criaPessoa('Pamela', 'Nascimento', 25);
const pessoa3 = criaPessoa('Paloma', 'Oliveira', 23);
const pessoa4 = criaPessoa('Deise', 'Oliveira', 51);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

const pessoa1 = {
    nome: 'Higor',
    sobrenome: 'Nascimento',
    idade: 21,

    fala(){
        //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};
 
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

