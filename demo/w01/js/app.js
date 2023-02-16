/*
    Variables define.
*/
const userInput = document.querySelector('#input-number');

/*  Divisors Variables  */
const divisorPlus   =   document.querySelector('#btn-add');
const divisorMinus  =   document.querySelector('#btn-subtract');
const divisorTimes  =   document.querySelector('#btn-multiply');
const divisorDivide =   document.querySelector('#btn-divide');

/*  Results */
//  When you complete your calculation, The result would be right here.
const resultFormula =   document.querySelector('#current-calculation');
const resultNumber  =   document.querySelector('#current-result');

/*  Calculations */
const defaultResult =   0;
let resultBuffer    =   defaultResult;

/*
    Functions
*/
const getUserInput = () => {
    return parseInt(userInput.value);
}
const outputResult = (result, text) => {
    resultFormula.textContent = result;
    resultNumber.textContent = text;
}

const add = () => {
    const operand1 = resultBuffer;
    const operand2 = getUserInput();
    resultBuffer = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${resultBuffer}`);
    const calcText = `${operand1} + ${operand2}`;
    outputResult(resultBuffer,calcText);
}

const minus = () => {
    const operand1 = resultBuffer;
    const operand2 = getUserInput();
    resultBuffer = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${resultBuffer}`);
    const calcText = `${operand1} - ${operand2}`;
    outputResult(resultBuffer,calcText);
}

const times = () => {
    const operand1 = resultBuffer;
    const operand2 = getUserInput();
    resultBuffer = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${resultBuffer}`);
    const calcText = `${operand1} * ${operand2}`;
    outputResult(resultBuffer,calcText);
}

const divide = () => {
    const operand1 = resultBuffer;
    const operand2 = getUserInput();
    resultBuffer = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${resultBuffer}`);
    const calcText = `${operand1} / ${operand2}`;
    outputResult(resultBuffer,calcText);
}


divisorPlus.addEventListener('click', add);
divisorMinus.addEventListener('click', minus);
divisorTimes.addEventListener('click', times);
divisorDivide.addEventListener('click', divide);
/*
    Log part.
*/
// console.log('User Input: ', userInput);
// console.log('Plus: ', divisorPlus);
// console.log('Minus: ', divisorMinus);
// console.log('Times: ', divisorTimes);
// console.log('Divide: ', divisorDivide);
// console.log('resultFormula: ', resultFormula);
// console.log('resultNumber: ', resultNumber);
// console.log('User Value:', userValue);
