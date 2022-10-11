/**
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - arrary, object, function - Passados por referência
*/

const a = {
    nome: 'Breno',
    sobrenome: 'Freitas',
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);
