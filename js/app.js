import {validateForm} from './validate.js';
import {dobFromPesel, validatePesel, ageFromPesel, genderFromPesel} from './pesel.js';

const form = document.getElementById('form');
const pesel = document.getElementById('pesel');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
    dobFromPesel(pesel.value);
    ageFromPesel(pesel.value);
    genderFromPesel(pesel.value);
});