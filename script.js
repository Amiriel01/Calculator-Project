//define all global variables needed//
let history = document.querySelector('#history');
let answer = document.querySelector('#answer');
let number = document.querySelectorAll('.number');
let operation = document.querySelectorAll('.operation');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let erase = document.querySelector('#erase');
let decimal = document.querySelector('#decimal');
let buttons = document.querySelectorAll('button');

//Makes start values for display: history and answer blank and able to be filled with answers later//
displayHistory = "";
displayAnswer = "";

//Set last operation to empty and decimal is not in use right now//
let lastOperation = "";
let useDecimal = false;


//e in the event listener represents an element that was affected (button being clicked). This section is for making the .number buttons and displays work.//
number.forEach(number => {
    number.addEventListener('click', (e) => {
        //set up for decimal. If you have no decimal add decimal, else if you have decimal return with no additional decimals. Only allows one decimal per number string//
        if (e.target.innerText === "." && !useDecimal) {
            useDecimal = true;
        }
        else if (e.target.innerText === "." && useDecimal) {
            return;
        }
        /*displayAnswer += e.target.innerText;
        answer.innerText = displayAnswer;*/
        //this will cause the number clicked to display in the answer section//
        if (!!lastOperation) {
            displayAnswer = e.target.innerText;
            lastOperation = null;
        } else {
            displayAnswer += e.target.innerText;
        }
        
        answer.innerText = displayAnswer;
    })
});

//This section makes the operations clicks work//
operation.forEach(operation => {
    operation.addEventListener('click', (e) => {
        //this keeps the user from using the operation before entering a number//
        if (!answer) result;
        //this allows user to use decimals again after entering the operation//
        useDecimal = false;
        //this sets the operation to register as the button clicked//
        let operationSign = e.target.innerText;
        //lastOperation = operationSign;
        //console.log(operationSign);
        if (answer && history && lastOperation) {
             mathOperation();
        } else {
            result = parseFloat(answer);
        }
        //this will start to move the number from answer to history when the operation is entered//
        moveNumber(operationSign);
        lastOperation=operationSign;
    })
});

//this will complete the number move from answer to history and also show sign in history. Until styled it will make the answer display appear to disapear//
function moveNumber(sign = '') {
    displayHistory += displayAnswer + ' ' + sign + ' ';
    history.innerText = displayHistory;
    answer.innerText = '';
    answer = '';
}

