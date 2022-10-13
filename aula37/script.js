const pessoa = {
    nome: 'Breno',
    sobrenome: 'Freitas',
};

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}

// const nomes = ['Brenokas', 'joao', 'luiz'];

// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

// console.log('--=-==-=-=-=-=');

// for (let i in nomes) {
//     console.log(nomes[i]);
// }

// console.log('--=-==-=-=-=-=');

// for (let valor of nomes) {
//     console.log(valor);
// }

// console.log('--=-==-=-=-=-=');

// nomes.forEach((valor, indice, ar) => {
//     console.log(valor, indice, ar);
// });
