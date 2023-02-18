const createError404Container = () => {
    const app = document.getElementById('app')
    const pageContent = document.createElement('div')
    pageContent.className = 'pageContent'
    app.appendChild(pageContent)

    const header =  document.createElement('header')
    pageContent.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Error 404'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.id = 'error404Main'
    pageContent.appendChild(main)

    const error404 = document.createElement('div')
    error404.id = 'error404Container'
    main.appendChild(error404)
    error404Container = document.getElementById('error404Container')

    const error404Text = document.createElement('p')
    error404Text.innerText = 'Strona nie istnieje.'
    error404Container.appendChild(error404Text)
}

createError404Container()