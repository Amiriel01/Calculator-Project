//define all global variables needed//
let history = document.querySelector('#history');
let answer = document.querySelector('#answer');
let number = document.querySelectorAll('.number');
let operation = document.querySelectorAll('.operation');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let erase = document.querySelector('#erase');
let decimal = document.querySelector('#decimal');
//let buttons = document.querySelectorAll('button'); (Not Needed)//

//Makes start values for display: history and answer blank and able to be filled with answers later//
displayHistory = "";
displayAnswer = "";

//Set last operation to empty and decimal is not in use right now//
let lastOperation = "";
let useDecimal = false;
let result = null;

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

        displayAnswer += e.target.innerText;
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
        if (history && answer && lastOperation) {
            mathOperations();
        } else {
            result = parseFloat(displayAnswer);
        }
        //this will start to move the number from answer to history when the operation is entered//
        moveNumber(operationSign);
        lastOperation = operationSign;
        console.log(result);
    })
});

//this will complete the number move from answer to history and also show sign in history. Until styled it will make the answer display appear to disapear//
function moveNumber(sign = '') {
    displayHistory += displayAnswer + ' ' + sign + ' ';
    history.innerText = displayHistory;
    answer.innerText = '';
    displayAnswer = '';
}

function mathOperations() {
    //use parseFloat because numbers are storing in the variables answer and history as strings//
    if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(displayAnswer);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(displayAnswer);
    } else if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(displayAnswer);
    } else if (lastOperation === '&#247') {
        result = parseFloat(result) / parseFloat(displayAnswer);
    }
};

//this section will make the = sign functional//
equal.addEventListener('click', (e) => {
    //set the = to only work after there is a number,operation, and second number//
    if (!displayAnswer || !displayHistory) return;
    // reset decimal again to be used just like before //
    useDecimal = false;
    //as long as there are two numbers 
    mathOperations();
    //this will move the second number up when the = sign is pressed//
    moveNumber();
    //this will put the answer in the answer display window//
    answer.innerText = result;
    displayAnswer = result;
});

//this will set up the clear button by deleting all info in stored and display//
clear.addEventListener('click', (e) => {
    history.innerText = "0";
    answer.innerText = "0";
    displayHistory = "";
    displayAnswer = "";
    result = "";
});

//this will set up the delete button to delete the last last numbers entered//
erase.addEventListener('click', (e) => {
    answer.innerText = "0";
    displayAnswer = "";
});