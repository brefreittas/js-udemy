// //Criando variáveis necessárias
// const display = document.querySelector('.display');
// const date = new Date();
// const weekDay = date.getDay();
// const month = date.getMonth();

// //Função para colocar um zero a esquerda dos numeros de 1 casa decimal
// function putZeroLeft(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// //Função para pegar o nome do dia da semana
// function getWeekDayName(weekDay) {
//     const weekDayName = [
//         'Domingo',
//         'Segunda-Feira',
//         'Terça-Feira',
//         'Quarta-Feira',
//         'Quinta-Feira',
//         'Sexta-Feira',
//         'Sábado',
//     ];

//     return weekDayName[weekDay];
// }

// //Função para pegar o nome do mês
// function getMonthName(month) {
//     const monthName = [
//         'Janeiro',
//         'Fevereiro',
//         'Março',
//         'Abril',
//         'Maio',
//         'Junho',
//         'Julho',
//         'Agosto',
//         'Setembro',
//         'Outubro',
//         'Novembro',
//         'Dezembro',
//     ];

//     return monthName[month];
// }

// //Apresentando tudo na tela
// display.innerHTML = `${getWeekDayName(weekDay)}, ${putZeroLeft(date.getDay())} de ${getMonthName(month)} de ${date.getFullYear()}, ${putZeroLeft(date.getHours())}:${putZeroLeft(date.getMinutes())}`;

const displayDate = document.querySelector('.display-date');
const displayHour = document.querySelector('.display-hour');
const date = new Date();

displayDate.innerHTML =
    date.toLocaleString('pt-BR', { dateStyle: 'full' })[0].toUpperCase() +
    date.toLocaleString('pt-BR', { dateStyle: 'full' }).substring(1);
displayHour.innerHTML = date.toLocaleString('pt-BR', { timeStyle: 'short' });

