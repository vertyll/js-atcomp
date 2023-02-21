import loading from './../js/customLoader.js'

const app = document.getElementById('app')

const path = window.location.pathname
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

const loadPage = async (path) => {
    const page = pages[path] || pages['404']
    await page.html()
    await page.scripts()
}

const loadPageWithLoader = async (path) => {
    loading.loading(app)
    await loadPage(path)
}

loadPageWithLoader(path)