const pessoa = {
    nome: 'Breno',
    sobrenome: 'Freitas',
    idade: 16,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
