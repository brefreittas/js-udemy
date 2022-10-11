function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = data.getMonth();
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    function converteMes(mes) {
        const meses = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembto',
            'Outubro',
            'Novembro',
            'Dezembro',
        ];

        switch (mes) {
            case 0:
                return meses[0];

            case 1:
                return meses[1];

            case 2:
                return meses[2];

            case 3:
                return meses[3];

            case 4:
                return meses[4];

            case 5:
                return meses[5];

            case 6:
                return meses[6];

            case 7:
                return meses[7];

            case 8:
                return meses[8];

            case 9:
                return meses[9];

            case 10:
                return meses[10];

            case 11:
                return meses[11];
        }
    }

    return `Hoje é dia ${dia} de ${converteMes(mes)} de ${ano}. Agora são ${hora}h${min}m${seg}s`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
