const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.querySelector('span#numero-titulo');
const texto = document.querySelector('div#texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada de ${numero} = ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} não é um número? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} arredondado pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>${numero} arredondado pra cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>${numero} com duas casas decimais: ${numero.toFixed(2)}</p>`;
