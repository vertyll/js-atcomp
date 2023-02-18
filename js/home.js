const createHomeContainer = () => {
    const app = document.getElementById('app')
    const pageContent = document.createElement('div')
    pageContent.className = 'pageContent'
    app.appendChild(pageContent)

    const header =  document.createElement('header')
    pageContent.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Strona główna'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.id = 'homeMain'
    pageContent.appendChild(main)

    const home = document.createElement('div')
    home.id = 'homeContainer'
    main.appendChild(home)
    homeContainer = document.getElementById('homeContainer')

    const homeText = document.createElement('p')
    homeText.innerText = 'Aplikacja do zarządzania postami, albumami i komentarzami.'
    homeContainer.appendChild(homeText)
}

createHomeContainer()