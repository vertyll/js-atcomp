const path = window.location.pathname
const routes = {
    '/' : {
        html() {
            return import("./../pages/home.html")
        },
        scripts() {
            return
        }
    },
    '/form' : {
        html() {
            return import("./../pages/form.html")
        },
        scripts() {
            return import("./validateInit.js")
        }
    },
    '/posts' : {
        html() {
            return import("../pages/posts.html")
        },
        scripts() {
            return import("./posts.js")
        }  
    },   
}

const loadPage = async () => {
    routes[path].html().then( (html) => {
        document.getElementById('template').innerHTML = html
        routes[path].scripts()
    })
    
}

const error404 = () => {
    document.getElementById('template').innerHTML = "<h1>404</h1>"
}

const switchPage = () => {
    if (routes[path]) {
        loadPage()
    } else {
        error404()
    }
}

switchPage()