//define all global variables needed//
let history = document.querySelector('#history');
let answer = document.querySelector('#answer');
let number = document.querySelectorAll('.number');
let operation = document.querySelectorAll('.operation');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let erase = document.querySelector('#erase');
let decimal = document.querySelector('#decimal');

//e in the event listener represents an element that was affected (button being clicked)//
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        let key = e.target;
        let action = key.dataset.action;
    }
})
