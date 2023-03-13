const numero = Number(prompt('digite um numero:'));//como o prompt retorna uma string, foi usado o Number para converter para um número inteiro
const numeroTitulo = window.document.getElementById('numero-titulo');
const variavelTexto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;

variavelTexto.innerHTML = '';
variavelTexto.innerHTML += `<p>A raiz quadrada de 10 é = ${numero ** 0.5}<p>`;
variavelTexto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}<p>`;
variavelTexto.innerHTML += `<p>Número ${numero} é inteiro: ${Number.isInteger(numero)}<p>`;
variavelTexto.innerHTML += `<p>Arredondando para baixo = ${Math.floor(numero)}<p>`;
variavelTexto.innerHTML += `<p>Arredondando para cima = ${Math.ceil(numero)}<p>`;
variavelTexto.innerHTML += `<p>Com duas casa decimais = ${numero.toFixed(2)}<p>`;

