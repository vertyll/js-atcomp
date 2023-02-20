const app = document.getElementById('app')

const path = window.location.pathname
const pages = {
    '404': {
        html() {
            import ('./../pages/error404.html')
        },
        scripts() {
            import ('./../js/navbar.js')
            import ('./../js/error404.js')
        }
    },
    '/': {
        html() {
            import ('./../pages/home.html')
        },
        scripts() {
            import ('./../js/navbar.js')
            import ('./../js/home.js')
        }
    },
    '/form': {
        html() {
            import ('./../pages/form.html')
        },
        scripts() {
            import ('./../js/navbar.js')
            import ('./../js/form.js')
            import ('./../js/validateForm.js')
        }
    },
    '/posts': {
        html() {
            import ('./../pages/posts.html')
        },
        scripts() {
            import ('./../js/navbar.js')
            import ('./../js/posts.js')
        }
    },
    '/albums': {
        html() {
            import ('./../pages/albums.html')
        },
        scripts() {
            import ('./../js/navbar.js')
            import ('./../js/albums.js')
        }
    },
    '/photos': {
        html() {
            import ('../pages/photos.html')
        },
        scripts() {
            import ('./../js/navbar.js')
            import ('./../js/photos.js')
        }
    }
}

const loadPage = async (path) => {
    const page = pages[path]
    const error404 = pages['404']
    try {
        if(page) {
            await page.html()
            await page.scripts()
        }
    } catch (error) {
        return error404
    }
}

const init = async () => {
    await loadPage(path)
}

init()