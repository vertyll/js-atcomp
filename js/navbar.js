import { navigateTo } from '../router/navigate.js'

const createNavbar = () => {
    const app = document.getElementById('app')
    const menuToggle = document.createElement('div')
    menuToggle.classList.add('menu-toggle')
    app.appendChild(menuToggle)

    const hamburger = document.createElement('div')
    hamburger.classList.add('hamburger')
    menuToggle.appendChild(hamburger)

    const span = document.createElement('span')
    hamburger.appendChild(span)

    const sidebar = document.createElement('aside')
    sidebar.classList.add('sidebar')
    sidebar.classList.add('width-max')
    app.appendChild(sidebar)

    const h3 = document.createElement('h3')
    h3.innerText = 'Menu'
    sidebar.appendChild(h3)

    const nav = document.createElement('nav')
    nav.classList.add('menu')
    sidebar.appendChild(nav)
        
        
    for (let i = 0; i < 4; i++) {
        const navA = document.createElement('a')
        navA.classList.add('menu-item')
        nav.appendChild(navA)
    }
    
    const navA = document.querySelectorAll('.menu-item')
    navA[0].setAttribute('href', '/')
    navA[0].textContent = 'Strona główna'
    navA[0].addEventListener('click', (e) => {
        e.preventDefault()
        navigateTo(e.target.href)
    })
    navA[1].setAttribute('href', '/form')
    navA[1].textContent = 'Formularz'
    navA[1].addEventListener('click', (e) => {
        e.preventDefault()
        navigateTo(e.target.href)
    })
    navA[2].setAttribute('href', '/posts')
    navA[2].textContent = 'Posty'
    navA[2].addEventListener('click', (e) => {
        e.preventDefault()
        navigateTo(e.target.href)
    })
    navA[3].setAttribute('href', '/albums')
    navA[3].textContent = 'Albumy'
    navA[3].addEventListener('click', (e) => {
        e.preventDefault()
        navigateTo(e.target.href)
    })
}

export function mounted() {
    createNavbar()
}