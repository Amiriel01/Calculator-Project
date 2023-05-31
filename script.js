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

//e in the event listener represents an element that was affected (button being clicked)//
buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        let buttons = e.target;
        let action = buttons.dataset.action;
    }
})
