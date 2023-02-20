import { formValues } from './validateForm.js'

const regex = {
        name: /^[a-zA-Z]+$/,
        surname: /^[a-zA-Z]+$/,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        age: /^(1[89]|[2-9]\d)$/gm,
        pesel: /^[0-9]{11}$/
}

const styleBorder = (element, color) => element.style.border = `0.1rem solid ${color}`
const styleBorderRed = (element) => styleBorder(element, 'red')
const styleBroderGreen = (element) => styleBorder(element, 'green')

function checkName() {
    if (regex.name.test(formValues.name.value)) styleBroderGreen(formValues.name)
    else styleBorderRed(formValues.name)
}

function checkSurname() {
    if (regex.surname.test(formValues.surname.value)) styleBroderGreen(formValues.surname)
    else styleBorderRed(formValues.surname)
}

function checkEmail() {
    if (regex.email.test(formValues.email.value)) styleBroderGreen(formValues.email)
    else styleBorderRed(formValues.email)
}

function checkDescription() {
    if (formValues.description.value !== '') styleBroderGreen(formValues.description)
    else styleBorderRed(formValues.description)
}

function checkPesel() {
    if (regex.pesel.test(formValues.pesel.value)) styleBroderGreen(formValues.pesel)
    else styleBorderRed(formValues.pesel)
}

export {
    regex,
    pesel,
    addInfo,
    checkName,
    checkSurname,
    checkEmail,
    checkDescription,
    checkPesel
}