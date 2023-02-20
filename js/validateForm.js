import {
    regex,
    pesel,
    checkName,
    checkSurname,
    checkEmail,
    checkDescription,
    checkPesel
} from './validate.js'
import {
    validatePesel
} from './pesel.js'
import {
    customAlert
} from './customAlert.js'

const inputs = document.getElementById('form').elements,
    pesel = document.getElementById('pesel'),
    formValues = {
        name: inputs.namedItem('name'),
        surname: inputs.namedItem('surname'),
        email: inputs.namedItem('email'),
        age: inputs.namedItem('age'),
        description: inputs.namedItem('description'),
        gender: inputs.namedItem('gender'),
        pesel: inputs.namedItem('pesel'),
        dob: inputs.namedItem('dob'),
}

function addInfo() {

    const div = document.querySelector('.form-bottom')
    const oldItem = document.querySelector('p')
    const newItem = document.createElement('p')
    newItem.innerHTML = `
    <h2>Wynik</h2>
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

function validateInit() {
    const form = document.getElementById('form')
    let name = document.getElementById('name')
    let surname = document.getElementById('surname')
    let email = document.getElementById('email')
    let description = document.getElementById('description')
    let pesel = document.getElementById('pesel')

    form.addEventListener('submit', function(e) {
        e.preventDefault()
        validateForm()
    })

    name.addEventListener('keyup', function() {
        checkName()
    })

    surname.addEventListener('keyup', function() {
        checkSurname()
    })

    email.addEventListener('keyup', function() {
        checkEmail()
    })

    description.addEventListener('keyup', function() {
        checkDescription()
    })

    pesel.addEventListener('keyup', function() {
        checkPesel()
    })
}

validateInit()

export {
    addInfo,
    formValues
}
