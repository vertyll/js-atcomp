import { router } from '../public/index.js'

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

export { navigateTo }