const init = async () => {
    const navbar = await import ('./../js/navbar.js')
    navbar.mounted()
    const hamburger = await import ('./../js/hamburger.js')
    hamburger.mounted()
}

const pages = {
    '404': {
        html() {
            return import ('./../pages/error404.html')
        },
        async scripts() {
            const error404Container = await import ('./../js/error404.js')
            error404Container.mounted()
        }
    },
    '/': {
        html() {
            return import ('./../pages/home.html')
        },
        async scripts() {
            const homeContainer = await import ('./../js/home.js')
            homeContainer.mounted()
        }
    },
    '/form': {
        html() {
            return import ('./../pages/form.html')
        },
        async scripts() {
            const formContainer = await import ('./../js/form.js')
            formContainer.mounted()

            const validateForm = await import ('./../js/validateForm.js')
            validateForm.mounted()
        }
    },
    '/posts': {
        html() {
            return import ('./../pages/posts.html')
        },
        async scripts() {
            const postsContainer = await import ('./../js/posts.js')
            postsContainer.mounted()
        }
    },
    '/albums': {
        html() {
            return import ('./../pages/albums.html')
        },
        async scripts() {
            const albumsContainer = await import ('./../js/albums.js')
            albumsContainer.mounted()
        }
    },
    '/photos': {
        html() {
            return import ('../pages/photos.html')
        },
        async scripts() {
            const photosContainer = await import ('./../js/photos.js')
            photosContainer.mounted()
        }
    }
}

const router = async () => {
    const path = window.location.pathname
    const route = pages[path] || pages[404]
    document.getElementById("app").innerHTML =
    await route.html()
    await init()
    await route.scripts()
}

window.addEventListener("popstate", router)

router()

export { router }