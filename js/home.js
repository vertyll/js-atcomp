const createHomeContainer = () => {
    const app = document.getElementById('app')
    const pageBody = document.createElement('div')
    pageBody.classList.add('page-body')
    app.appendChild(pageBody)

    const header = document.createElement('header')
    pageBody.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Strona główna'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.classList.add('main')
    pageBody.appendChild(main)

    const home = document.createElement('div')
    home.classList.add('home-container')
    main.appendChild(home)
    homeContainer = document.querySelector('.home-container')

    const homeText = document.createElement('p')
    homeText.innerText = 'Aplikacja do zarządzania postami, albumami i komentarzami.'
    homeContainer.appendChild(homeText)
}

export function mounted() {
    createHomeContainer()
}