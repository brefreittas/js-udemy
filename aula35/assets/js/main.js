const elements = [
    { tag: 'p', text: 'Texto 1' },
    { tag: 'div', text: 'Texto 2' },
    { tag: 'section', text: 'Texto 3' },
    { tag: 'footer', text: 'Texto 4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div'); // criando a div

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i]; // pegando cada linha dos elements
    let createdTag = document.createElement(tag); // criando a tag
    let createdText = document.createTextNode(text); // criando o texto
    createdTag.appendChild(createdText); // colocando o texto dentro da tag
    div.appendChild(createdTag); // colocando a tag dentro da div
}

container.appendChild(div); //colocando a div no container
