const path = window.location.pathname
const routes = {
    '404' : import('./../pages/404.html'),
    '/' : {
        html() {
            return import('./../pages/home.html')
        },
        scripts() {
            return
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
    routes[path].html().then( (html) => {
        document.getElementById('template').innerHTML = html
        routes[path].scripts()
    })
    
}

const load404 = async () => {
    routes[404].then( (html) => {
        document.getElementById('template').innerHTML = html
    })
}

const router = () => {
    if (routes[path]) {
        loadPage()
    } else {
        load404()
    }
}

router()