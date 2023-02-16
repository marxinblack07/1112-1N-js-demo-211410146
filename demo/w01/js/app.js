/*
    Variables define.
*/
const userInput     =   document.querySelector('#input-number');

/*  Divisors Variables  */
const divisorBtn    =   document.querySelectorAll('button');
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
let getUserValue = () => parseInt(userInput.value);
let operation = (number,operator) =>{
    const operand   =   resultBuffer;
    let result      =   0;
    switch (operator) 
    {
        case '+':
            result =   operand + number;
        case '-':
            result =   operand - number;
        case '*':
            result =   operand * number;
        case '/':
            result =   operand / number;
    }
    return result; 
}

let doOperate = (divisorBtn) => {
    operand1    =   resultBuffer;
    operand2    =   getUserValue();
    operator    =   null;
    switch (divisorBtn)
    {
        case 0://Plus.
            operator = '+';
        case 1://Minus.
            operator = '-';
        case 2://Times.
            operator = '*';
        case 3://Divide.
            operator = '/';
    }
    result = operation(operand2,operator);
    operationText = `${operand1} ${operator} ${operand2} = ${result}`;
    resultFormula.textContent = operationText;
    resultNumber.textContent = result;
    console.log(operationText);
}

/*
    Event Listen.
*/

for (var i = 0; i<divisorBtn.length; i++)
{
    btn = divisorBtn[i].addEventListener('click', doOperate);
}


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
console.log('Btn: ', divisorBtn);
console.log('Result:', getUserValue());