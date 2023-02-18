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

    const form = document.createElement('div')
    form.id = 'form'
    main.appendChild(form)

    const formContainer = document.createElement('div')
    formContainer.class = 'form-container'
    form.appendChild(formContainer)

    const formInputs = document.createElement('div')
    formInputs
