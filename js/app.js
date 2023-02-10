import {validateForm} from './validate.js';
import {peselCheck} from './pesel.js';

const form = document.getElementById('form');
const pesel = document.getElementById('pesel');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
    peselCheck(pesel.value);
});