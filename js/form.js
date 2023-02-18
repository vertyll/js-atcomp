const createFormContainer = () => {
    const app = document.getElementById('app')
    const pageContent = document.createElement('div')
    pageContent.className = 'pageContent'
    app.appendChild(pageContent)

    const header =  document.createElement('header')
    pageContent.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Formularz'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.id = 'formMain'
    pageContent.appendChild(main)

    const formContainer = document.createElement('div')
    formContainer.className = 'form-container'
    main.appendChild(formContainer)

    const form = document.createElement('form')
    form.id = 'form'
    formContainer.appendChild(form)

    inputWrapForm1 = document.createElement('div')
    inputWrapForm1.className = 'input-wrap-form'
    form.appendChild(inputWrapForm1)

    inputWrapForm2 = document.createElement('div')
    inputWrapForm2.className = 'input-wrap-form'
    form.appendChild(inputWrapForm2)

    inputWrapForm3 = document.createElement('div')
    inputWrapForm3.className = 'input-wrap-form'
    form.appendChild(inputWrapForm3)

    inputWrapForm4 = document.createElement('div')
    inputWrapForm4.className = 'input-wrap-form'
    form.appendChild(inputWrapForm4)

    inputWrapForm5 = document.createElement('div')
    inputWrapForm5.className = 'input-wrap-form'
    form.appendChild(inputWrapForm5)
    
    inputWrapForm6 = document.createElement('div')
    inputWrapForm6.className = 'input-wrap-form'
    form.appendChild(inputWrapForm6)

    inputWrapForm7 = document.createElement('div')
    inputWrapForm7.className = 'input-wrap-form'
    form.appendChild(inputWrapForm7)

    inputWrapForm8 = document.createElement('div')
    inputWrapForm8.className = 'input-wrap-form'
    form.appendChild(inputWrapForm8)

    inputWrapForm9 = document.createElement('div')
    inputWrapForm9.className = 'input-wrap-form'
    form.appendChild(inputWrapForm9)

    const formBottom = document.createElement('div')
    formBottom.className = 'form-bottom'
    formContainer.appendChild(formBottom)

    const p = document.createElement('p')
    formBottom.appendChild(p)

    const labelName = document.createElement('label')
    labelName.htmlFor = 'name'
    labelName.innerHTML = 'Wprowadź imię'
    inputWrapForm1.appendChild(labelName)

    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.id = 'name'
    inputWrapForm1.appendChild(inputName)

    const labelSurname = document.createElement('label')
    labelSurname.htmlFor = 'surname'
    labelSurname.innerHTML = 'Wprowadź nazwisko'
    inputWrapForm2.appendChild(labelSurname)

    const inputSurname = document.createElement('input')
    inputSurname.type = 'text'
    inputSurname.name = 'surname'
    inputSurname.id = 'surname'
    inputWrapForm2.appendChild(inputSurname)

    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'
    labelEmail.innerHTML = 'Wprowadź email'
    inputWrapForm3.appendChild(labelEmail)

    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.name = 'email'
    inputEmail.id = 'email'
    inputWrapForm3.appendChild(inputEmail)

    const labelDescription = document.createElement('label')
    labelDescription.htmlFor = 'description'
    labelDescription.innerHTML = 'Wprowadź opis'
    inputWrapForm4.appendChild(labelDescription)

    const textAreaDescription = document.createElement('textarea')
    textAreaDescription.className = 'description'
    textAreaDescription.name = 'description'
    textAreaDescription.id = 'description'
    inputWrapForm4.appendChild(textAreaDescription)

    const labelPesel = document.createElement('label')
    labelPesel.htmlFor = 'pesel'
    labelPesel.innerHTML = 'Wprowadź PESEL'
    inputWrapForm5.appendChild(labelPesel)

    const inputPesel = document.createElement('input')
    inputPesel.type = 'text'
    inputPesel.name = 'pesel'
    inputPesel.id = 'pesel'
    inputWrapForm5.appendChild(inputPesel)

    const labelDate = document.createElement('label')
    labelDate.htmlFor = 'dob'
    labelDate.innerHTML = 'Data urodzenia'
    inputWrapForm6.appendChild(labelDate)

    const inputDate = document.createElement('input')
    inputDate.type = 'text'
    inputDate.name = 'dob'
    inputDate.id = 'dob'
    inputWrapForm6.appendChild(inputDate)
    document.getElementById('dob').disabled = true

    const labelAge = document.createElement('label')
    labelAge.htmlFor = 'age'
    labelAge.innerHTML = 'Wiek'
    inputWrapForm7.appendChild(labelAge)

    const inputAge = document.createElement('input')
    inputAge.type = 'number'
    inputAge.name = 'age'
    inputAge.id = 'age'
    inputWrapForm7.appendChild(inputAge)
    document.getElementById('age').disabled = true

    const labelGender = document.createElement('label')
    labelGender.htmlFor = 'gender'
    labelGender.innerHTML = 'Płeć'
    inputWrapForm8.appendChild(labelGender)

    const selectGender = document.createElement('select')
    selectGender.name = 'gender'
    selectGender.id = 'gender'
    inputWrapForm8.appendChild(selectGender)
    document.getElementById('gender').disabled = true

    const optionGender1 = document.createElement('option')
    optionGender1.value = 'Kobieta'
    optionGender1.innerText = 'Kobieta'
    selectGender.appendChild(optionGender1)

    const optionGender2 = document.createElement('option')
    optionGender2.value = 'Mężczyzna'
    optionGender2.innerText = 'Mężczyzna'
    selectGender.appendChild(optionGender2)

    const button = document.createElement('button')
    button.id = 'button'
    button.className = 'button'
    button.innerHTML = 'Zapisz'
    inputWrapForm9.appendChild(button)

}

createFormContainer()