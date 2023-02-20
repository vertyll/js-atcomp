import {
    customAlert
} from './customAlert'
import {
    addInfo
} from './validateForm.js'

function dobFromPesel(pesel) {

    let year = parseInt(pesel.substring(0, 2))
    let month = parseInt(pesel.substring(2, 4))
    let day = parseInt(pesel.substring(4, 6))

    if (month > 80) {
        year = year + 1800
        month = month - 80
    } else if (month > 60) {
        year = year + 2200
        month = month - 60
    } else if (month > 40) {
        year = year + 2100
        month = month - 40
    } else if (month > 20) {
        year = year + 2000
        month = month - 20
    } else {
        year += 1900
    }

    document.getElementById('dob').value = `${day}.${month}.${year}`
}

function ageFromPesel(pesel) {
    let year = parseInt(pesel.substring(0, 2))
    let month = parseInt(pesel.substring(2, 4))

    if (month > 80) {
        year = year + 1800
    } else if (month > 60) {
        year = year + 2200
    } else if (month > 40) {
        year = year + 2100
    } else if (month > 20) {
        year = year + 2000
    } else {
        year += 1900
    }
    const now = new Date()
    let nowDate = now.getFullYear()
    document.getElementById('age').value = nowDate - year
}

function genderFromPesel(pesel) {
    let gender

    if (parseInt(pesel.substring(9, 10)) % 2 === 1) {
        gender = 'Mężczyzna'
    } else {
        gender = 'Kobieta'
    }

    document.getElementById('gender').value = gender
}

function validatePesel(pesel) {

    let weight = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7]
    let sum = 0

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i])
    }
    sum = sum % 10

    let valid = (sum === parseInt(pesel.substring(10, 11)))
    if (!pesel === valid) {
        customAlert('Pesel jest niepoprawny')
    } else {
        dobFromPesel(pesel)
        ageFromPesel(pesel)
        genderFromPesel(pesel)
        addInfo(pesel)
    }
}

export {
    validatePesel
}