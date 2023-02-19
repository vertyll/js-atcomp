const app = document.getElementById('app')

const path = window.location.pathname
const pages = {
    '404': {
        html() {
            import ('./../pages/error404.html')
        },
        scripts() {
            import ('./navbar.js')
            import ('./error404.js')
        }
    },
    '/': {
        html() {
            import ('./../pages/home.html')
        },
        scripts() {
            import ('./navbar.js')
            import ('./home.js')
        }
    },
    '/form': {
        html() {
            import ('./../pages/form.html')
        },
        scripts() {
            import ('./navbar.js')
            import ('./form.js')
            import ('./validateForm.js')
        }
    },
    '/posts': {
        html() {
            import ('../pages/posts.html')
        },
        scripts() {
            import ('./navbar.js')
            import ('./posts.js')
        }
    },
    '/albums': {
        html() {
            import ('../pages/albums.html')
        },
        scripts() {
            import ('./navbar.js')
            import ('./albums.js')
        }
    },
    '/photos': {
        html() {
            import ('../pages/photos.html')
        },
        scripts() {
            import ('./navbar.js')
            import ('./photos.js')
        }
    }
}

const loadPage = async (path) => {
    const page = pages[path]
    if (!page) {
        return pages['404']
    }
    await page.html()
    await page.scripts()
}

const init = async () => {
    await loadPage(path)
}

init()