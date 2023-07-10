const dValue = document.getElementById("valueOfD");
const xValue = document.getElementById("valueOfX");
const yValue = document.getElementById("valueOfY");
const dContent = document.getElementById("equationD");
const xContent = document.getElementById("equationX");
const yContent = document.getElementById("equationY");
const calcularBtn = document.getElementById("calc");

let firstNumberDisplay = document.getElementById("firstNumber");
let secondNumberDisplay = document.getElementById("secondNumber");
let restos = [];

const calcularD = () => {
    let num1 = Number(firstNumberDisplay.value);
    let num2 = Number(secondNumberDisplay.value);
    let resto = num1 % num2;
    let conta;

    while(resto != 0){
        conta = num1 % num2;
        resto = conta;

        calculo = Math.floor(num1 / num2);
        restos.push(calculo);

        num1 = num2;
        num2 = resto;
    }

    calcularCoeficientes(num1);
}

const calcularCoeficientes = (dRes) => {
    let d = dRes;
    let res, total;
    let armz = 1;

    let restosNeg = [];
    
    restos.forEach(resto => {
        resto = resto * -1;
        restosNeg.push(resto)
    });

    let posInicial = restosNeg.length - 2;
    let num = restosNeg[posInicial];

    for(let i = restosNeg.length - 3; i >= 0; i--){
        res = restosNeg[i] * num;
        total = res + armz;

        armz = num;
        num = total;
    }

    atualizarDisplay(d, armz, total);
}

const limparDisplay = () => {
    dValue.innerText = '';
    xValue.innerText = '';
    yValue.innerText = '';
}


const atualizarDisplay = (d, a, b) => {
    limparDisplay();

    dContent.classList.remove("hide");
    xContent.classList.remove("hide");
    yContent.classList.remove("hide");

    restos = [];
    dValue.innerText += d;
    xValue.innerText += a;
    yValue.innerText += b;

    firstNumberDisplay.value = '';
    secondNumberDisplay.value = '';
}


calcularBtn.addEventListener('click', calcularD);
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') calcularD();
});