const pessoa = {
    nome: 'Breno',
    sobrenome: 'Freitas',
    idade: 16,
    endereco: {
        rua: 'Avenida Paulista',
        numero: 320,
    },
};

const { nome, ...dados } = pessoa;
console.log(dados);
