import {customAlert} from './alert.js';
import {validatePesel} from './pesel.js';

    const inputs = document.getElementById('form').elements;
    const pesel = document.getElementById('pesel');

    const formValues = {
        name: inputs.namedItem('name'),
        surname: inputs.namedItem('surname'),
        email: inputs.namedItem('email'),
        age: inputs.namedItem('age'),
        description: inputs.namedItem('description'),
        gender: inputs.namedItem('gender'),
        pesel: inputs.namedItem('pesel'),
        dob: inputs.namedItem('dob'),
    };

function validateForm() {

    const regex = {
        name: /^[a-zA-Z]+$/,
        surname: /^[a-zA-Z]+$/,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        age: /^(1[89]|[2-9]\d)$/gm,
        pesel: /^[0-9]{2}([02468]1|[13579][012])(0[1-9]|1[0-9]|2[0-9]|3[01])[0-9]{5}$/

    };

    if (formValues.name.value == "" && formValues.surname.value == "" && formValues.email.value == "" && formValues.pesel.value == "" && formValues.description.value == "") {
        customAlert("Proszę wypełnić wszystkie pola");
    }
    else if(!regex.name.test(formValues.name.value))
    {
        customAlert("Proszę wprowadzić poprawne imie");
    }
    else if(!regex.surname.test(formValues.surname.value))
    {
        customAlert("Proszę wprowadzić poprawne nazwisko");
    }
    else if(!regex.email.test(formValues.email.value))
    {
        customAlert("Proszę wprowadzić poprawny email");
    }
    else if(formValues.description.value == "")
    {
        customAlert("Proszę wprowadzić opis");
    }
    else if(!regex.pesel.test(formValues.pesel.value))
    {
        customAlert("Proszę wprowadzić poprawny PESEL");
    }
    else
    {
        validatePesel(pesel.value);
    };
};

function addInfo(){
    
    const div1 = document.querySelector('.form-bottom');
    const oldItem1 = document.querySelector('p');
    const newItem1 = document.createElement('p');
    newItem1.innerHTML = `
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
    div1.replaceChild(newItem1, oldItem1);
};

export {
    validateForm,
    addInfo
};