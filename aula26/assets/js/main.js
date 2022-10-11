const resultado = document.querySelector('.resultado');
const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function calcular() {
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  const calculo = peso / altura ** 2;

  if (!peso) {
    return (resultado.innerHTML = `Peso inválido!`);
  }

  if (!altura) {
    return (resultado.innerHTML = `Altura inválida!`);
  }

  function nivelImc(calculo) {
    const nivel = [
      'Abaixo do peso',
      'Peso Normal',
      'Sobrepeso',
      'Obesidade grau 1',
      'Obesidade grau 2',
      'Obesidade grau 3',
    ];

    if (calculo >= 39.9) return nivel[5];
    if (calculo >= 34.9) return nivel[4];
    if (calculo >= 29.9) return nivel[3];
    if (calculo >= 24.9) return nivel[2];
    if (calculo >= 18.5) return nivel[1];
    if (calculo < 18.5) return nivel[0];
  }

  resultado.innerHTML = `Seu IMC é de ${calculo.toFixed(2)} (${nivelImc(
    calculo
  )})`;
}
