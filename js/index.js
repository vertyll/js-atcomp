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

loadPage()

const switchPage = () => {
    const links = document.querySelectorAll('a')
    links.forEach( (link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            window.history.pushState(null, null, link.href)
            loadPage()
        })
    })
}