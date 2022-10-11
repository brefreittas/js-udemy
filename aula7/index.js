// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com número
// Não pode ter espaço ou traço
// Utilizamos camelCase
// Case-sensitive (letra maiuscula e minusculas fazem diferença)
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;
console.log(resultadoTriplicado);

console.log(typeof (primeiroNumero + segundoNumero));