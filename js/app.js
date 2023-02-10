import {validateForm} from './validate.js';
import {dobFromPesel, validatePesel, ageFromPesel, genderFromPesel} from './pesel.js';

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});