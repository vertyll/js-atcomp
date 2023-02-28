const createError404Container = () => {
    const app = document.getElementById('app')
    const pageBody = document.createElement('div')
    pageBody.classList.add('page-body')
    app.appendChild(pageBody)

    const header =  document.createElement('header')
    pageBody.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Error 404'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.classList.add('main')
    pageBody.appendChild(main)

    const error404 = document.createElement('div')
    error404.classList.add('error404-container')
    main.appendChild(error404)
    error404Container = document.querySelector('.error404-container')

    const error404Text = document.createElement('p')
    error404Text.innerText = 'Strona nie istnieje.'
    error404Container.appendChild(error404Text)
}

export function mounted() {
    createError404Container()
}