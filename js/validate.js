import { customAlert } from './alert.js'
import { validatePesel } from './pesel.js'

const inputs = document.getElementById('form').elements, pesel = document.getElementById('pesel'), formValues = {
    name: inputs.namedItem('name'),
    surname: inputs.namedItem('surname'),
    email: inputs.namedItem('email'),
    age: inputs.namedItem('age'),
    description: inputs.namedItem('description'),
    gender: inputs.namedItem('gender'),
    pesel: inputs.namedItem('pesel'),
    dob: inputs.namedItem('dob'),
}, regex = {
    name: /^[a-zA-Z]+$/,
    surname: /^[a-zA-Z]+$/,
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    age: /^(1[89]|[2-9]\d)$/gm,
    pesel: /^[0-9]{11}$/
};

function validateForm() {

    if (formValues.name.value === '' && formValues.surname.value === '' && formValues.email.value === '' && formValues.description.value === '' && formValues.pesel.value === '') {
        customAlert('Proszę wypełnić wszystkie pola')
    } else if (!regex.name.test(formValues.name.value)) {
        customAlert('Proszę wprowadzić poprawne imie')
    } else if (!regex.surname.test(formValues.surname.value)) {
        customAlert('Proszę wprowadzić poprawne nazwisko')
    } else if (!regex.email.test(formValues.email.value)) {
        customAlert('Proszę wprowadzić poprawny email')
    } else if (formValues.description.value === '') {
        customAlert('Proszę wprowadzić opis')
    } else if (!regex.pesel.test(formValues.pesel.value)) {
        customAlert('Proszę wprowadzić poprawny PESEL')
    } else {
        validatePesel(pesel.value)
    }
}

function checkName() {
    if (regex.name.test(formValues.name.value)) formValues.name.style.border = '0.1rem solid green'
    else formValues.name.style.border = '0.1rem solid red'
}

function checkSurname() {
    if (regex.surname.test(formValues.surname.value)) formValues.surname.style.border = '0.1rem solid green'
    else formValues.surname.style.border = '0.1rem solid red'
}

function checkEmail() {
    if (regex.email.test(formValues.email.value)) formValues.email.style.border = '0.1rem solid green'
    else formValues.email.style.border = '0.1rem solid red'
}

function checkDescription() {
    if (formValues.description.value !== '') formValues.description.style.border = '0.1rem solid green'
    else formValues.description.style.border = '0.1rem solid red'
}

function checkPesel() {
    if (regex.pesel.test(formValues.pesel.value)) formValues.pesel.style.border = '0.1rem solid green'
    else formValues.pesel.style.border = '0.1rem solid red'
}

function addInfo() {

    const div = document.querySelector('.form-bottom')
    const oldItem = document.querySelector('p')
    const newItem = document.createElement('p')
    newItem.innerHTML = `
    <h2>Wynik</h2><br>
    <p>Imie: ${formValues.name.value}</p>
    <p>Nazwisko: ${formValues.surname.value}</p>
    <p>Email: ${formValues.email.value}</p>
    <p>Opis: ${formValues.description.value}</p>
    <p>PESEL: ${formValues.pesel.value}</p>
    <p>Data urodzenia: ${formValues.dob.value}</p>
    <p>Wiek: ${formValues.age.value}</p>
    <p>Płeć: ${formValues.gender.value}</p>
    `;
    div.replaceChild(newItem, oldItem)
}

export {
    validateForm,
    addInfo,
    checkName,
    checkSurname,
    checkEmail,
    checkDescription,
    checkPesel
}