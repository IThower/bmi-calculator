let peso = document.getElementById('Weight');
let altura = document.getElementById('Height');

peso.addEventListener('input', CalcularIMC);
altura.addEventListener('input', CalcularIMC);

function CalcularIMC() {
    let resultadoIMC = document.querySelector('.score-data');
    let resultadosaude = document.querySelector('.score-data-health');
    let resultadopeso = document.querySelector('.score-data-weight');

    let weight = parseFloat(peso.value); // Convert weight to a number
    let height = parseFloat(altura.value); // Convert height to a number

    if (weight > 0 && height > 0) {
        let IMC = weight / (height * height);

        resultadoIMC.textContent = IMC.toFixed(2);

        if (IMC < 17) {
            resultadosaude.textContent = 'Muito abaixo do peso';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        } else if (IMC >= 17 && IMC < 18.5) {
            resultadosaude.textContent = 'Abaixo do Peso';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        } else if (IMC >= 18.5 && IMC < 25) {
            resultadosaude.textContent = 'Peso Normal';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        } else if (IMC >= 25 && IMC < 30) {
            resultadosaude.textContent = 'Acima do peso';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        } else if (IMC >= 30 && IMC < 35) {
            resultadosaude.textContent = 'OBESIDADE TIPO 1';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        } else if (IMC >= 35 && IMC < 40) {
            resultadosaude.textContent = 'OBESIDADE TIPO 2';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        } else {
            resultadosaude.textContent = 'OBESIDADE TIPO 3';
            resultadopeso.textContent = 'Seu peso ideal seria acima de...';
        }
    } else {
        resultadosaude.textContent = '';
        resultadopeso.textContent = '';
    }
}