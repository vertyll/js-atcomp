const app = document.getElementById('app')

const path = window.location.pathname
const pages = {
    '404' : {
        html() {
            return import('./../pages/error404.html')
        },
        scripts() {
            return import('./error404.js')
        }
    },
    '/' : {
        html() {
            return import('./../pages/home.html')
        },
        scripts() {
            return import('./home.js')
        }
    },
    '/form' : {
        html() {
            return import('./../pages/form.html')
        },
        scripts() {
            return import('./validateForm.js')
        }
    },
    '/posts' : {
        html() {
            return import('../pages/posts.html')
        },
        scripts() {
            return import('./posts.js')
        }  
    },
    '/albums' : {
        html() {
            return import('../pages/albums.html')
        },
        scripts() {
            return import('./albums.js')
        }
    },
    '/photos' : {
        html() {
            return import('../pages/photos.html')
        },
        scripts() {
            return import('./photos.js')
        }
    }
}

const loadPage = async () => {
    if(pages[path]){
        app.innerHTML = await pages[path].html()
        if(pages[path].scripts){
            await pages[path].scripts()
        }
    } else {
        app.innerHTML = await pages['404'].html()
        await pages['404'].scripts()
    }
}

const init = async () => {
    await loadPage()
}

init()