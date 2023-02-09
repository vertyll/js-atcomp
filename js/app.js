import {validateForm} from './validate.js';

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

