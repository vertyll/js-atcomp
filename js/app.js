import {
    validateForm,
    checkName,
    checkSurname,
    checkEmail,
    checkDescription,
    checkPesel
} from './validate.js';

const form = document.getElementById('form');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let description = document.getElementById('description');
let pesel = document.getElementById('pesel');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

name.addEventListener('keyup', function() {
    checkName();
});

surname.addEventListener('keyup', function() {
    checkSurname();
});

email.addEventListener('keyup', function() {
    checkEmail();
});

description.addEventListener('keyup', function() {
    checkDescription();
});

pesel.addEventListener('keyup', function() {
    checkPesel();
});

/*
form.addEventListener('focus', function(e) {
    if(e.target.id === 'name') {
        checkName();
    };
    if(e.target.id === 'surname') {
        checkSurname();
    };
    if(e.target.id === 'email') {
        checkEmail();
    };
    if(e.target.id === 'description') {
        checkDescription();
    };
    if(e.target.id === 'pesel') {
        checkPesel();
    };
});
*/