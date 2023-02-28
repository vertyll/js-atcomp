import loading from './../js/customLoader.js'

const pages = {
    '404': {
        html() {
            import ('./../pages/error404.html')
        },
        scripts() {
            import ('./../js/navbar.js').then(() => {
                import ('./../js/hamburger.js')
                import ('./../js/error404.js')
            })
        }
    },
    '/': {
        html() {
            import ('./../pages/home.html')
        },
        scripts() {
            import ('./../js/navbar.js').then(() => {
                import ('./../js/hamburger.js')
                import ('./../js/home.js')
            })
        }
    },
    '/form': {
        html() {
            import ('./../pages/form.html')
        },
        scripts() {
            import ('./../js/navbar.js').then(() => {
                import ('./../js/form.js').then(() => {
                    import ('./../js/hamburger.js')
                    import ('./../js/validateForm.js')
                })
            })
        }
    },
    '/posts': {
        html() {
            import ('./../pages/posts.html')
        },
        scripts() {
            import ('./../js/navbar.js').then(() => {
                import ('./../js/hamburger.js')
                import ('./../js/posts.js')
            })
        }
    },
    '/albums': {
        html() {
            import ('./../pages/albums.html')
        },
        scripts() {
            import ('./../js/navbar.js').then(() => {
                import ('./../js/hamburger.js')
                import ('./../js/albums.js')
            })
        }
    },
    '/photos': {
        html() {
            import ('../pages/photos.html')
        },
        scripts() {
            import ('./../js/navbar.js').then(() => {
                import ('./../js/hamburger.js')
                import ('./../js/photos.js')
            })
        }
    }
}

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const content = document.getElementById('app')
    const { pathname } = window.location
    const page = pages[pathname] ? pages[pathname] : pages['404']
    content.innerHTML = await page.html()
    page.scripts()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            navigateTo(e.target.href)
        })
    })
    router()
})