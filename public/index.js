const init = async () => {
    const navbar = await import ('./../js/navbar.js')
    navbar.mounted()
    // const hamburger = await import ('./../js/hamburger.js')
    // hamburger.mounted()
}

const pages = {
    '404': {
        html() {
            import ('./../pages/error404.html')
        },
        async scripts() {
            const error404Container = await import ('./../js/error404.js')
            error404Container.mounted()
        }
    },
    '/': {
        html() {
            import ('./../pages/home.html')
        },
        async scripts() {
            const homeContainer = await import ('./../js/home.js')
            homeContainer.mounted()
        }
    },
    '/form': {
        html() {
            import ('./../pages/form.html')
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
            import ('./../pages/posts.html')
        },
        async scripts() {
            const postsContainer = await import ('./../js/posts.js')
            postsContainer.mounted()
        }
    },
    '/albums': {
        html() {
            import ('./../pages/albums.html')
        },
        async scripts() {
            const albumsContainer = await import ('./../js/albums.js')
            albumsContainer.mounted()
        }
    },
    '/photos': {
        html() {
            import ('../pages/photos.html')
        },
        async scripts() {
            const photosContainer = await import ('./../js/photos.js')
            photosContainer.mounted()
        }
    }
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    router();
};

const router = async () => {
    const path = window.location.pathname;
    const route = pages[path] || pages[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("app").innerHTML = html;
    init();
    route.scripts();
};

window.onpopstate = router;
window.route = route;

router();

export { router }