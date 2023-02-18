/*
    Variables define.
*/
const userInput = document.querySelector('#input-number');

/*  Divisors Variables  */
const divisorBtn    =   document.querySelector('#calc-actions');
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
    if (isNaN(parseInt(userInput.value)))
        return 0;
    else
        return parseInt(userInput.value);
}
const outputResult = (result, text) => {
    resultFormula.textContent = result;
    resultNumber.textContent = text;
}

const operate = (divisor) => {
    const operand1 = resultBuffer;
    const operand2 = getUserInput();
    let calcText = null;
    switch (divisor)
    {
        case 0://Plus
            resultBuffer = operand1 + operand2;
            calcText = `${operand1} + ${operand2} = ${resultBuffer}`;
            break;
        case 1://Minus
            resultBuffer = operand1 - operand2;
            calcText = `${operand1} - ${operand2} = ${resultBuffer}`;
            break;
        case 2://Times
            resultBuffer = operand1 * operand2;
            calcText = `${operand1} * ${operand2} = ${resultBuffer}`;
            break;
        case 3://Divide
            resultBuffer = operand1 / operand2;
            calcText = `${operand1} / ${operand2} = ${resultBuffer}`;
            break;
    }
    console.log("CalcText:", calcText);
    outputResult(resultBuffer,calcText);
}

const EventDetect = (event) => {
    console.log("Child: ",event.target);
    if (event.target.id.startsWith("btn"))
    {
        let switchNumber = null;
        switch (event.target.id.split('-')[1])
        {
            case 'add':
                switchNumber = 0;
                break;
            case 'subtract':
                switchNumber = 1;
                break;
            case 'multiply':
                switchNumber = 2;
                break;
            case 'divide':
                switchNumber = 3;
                break;
        }
        operate(switchNumber);
    }
}

console.log("btn: ", divisorBtn);
console.log('default',resultBuffer);
divisorBtn.addEventListener('click', EventDetect);
