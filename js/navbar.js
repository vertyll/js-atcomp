const createNavbar = () => {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')
    app.appendChild(navbar)

    const navbarUl = document.createElement('ul')
    navbarUl.classList.add('navbar-ul')
    navbar.appendChild(navbarUl)

    for (let i = 0; i < 4; i++) {
        const navbarLi = document.createElement('li')
        navbarLi.classList.add('navbar-li')
        navbarUl.appendChild(navbarLi)

        const navbarA = document.createElement('a')
        navbarA.classList.add('navbar-a')
        navbarLi.appendChild(navbarA)
    }

    const navbarA = document.querySelectorAll('.navbar-a')
    navbarA[0].setAttribute('href', '/')
    navbarA[0].textContent = 'Strona główna'
    navbarA[1].setAttribute('href', '/form')
    navbarA[1].textContent = 'Formularz'
    navbarA[2].setAttribute('href', '/posts')
    navbarA[2].textContent = 'Posty'
    navbarA[3].setAttribute('href', '/albums')
    navbarA[3].textContent = 'Albumy'
}

createNavbar()