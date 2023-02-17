import { formValues, regex, pesel, checkName, checkSurname, checkEmail, checkDescription, checkPesel } from './validate.js'
import { validatePesel } from './pesel.js'

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

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        validateForm()
    })

    name.addEventListener('keyup', function () {
        checkName()
    })

    surname.addEventListener('keyup', function () {
        checkSurname()
    })

    email.addEventListener('keyup', function () {
        checkEmail()
    })

    description.addEventListener('keyup', function () {
        checkDescription()
    })

    pesel.addEventListener('keyup', function () {
        checkPesel()
    })
}

validateInit()