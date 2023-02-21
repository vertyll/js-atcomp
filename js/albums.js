import {
    getAlbums
} from './api.js'
import {
    buildFilter,
    selectFilter,
    resetFilterForm,
    saveFilterSettings
} from './filter.js'
import loading from './customLoader.js'

const inputs = {
    author: {
        label: 'Autor:',
        defaultValue: '',
        filterKey: 'userId',
        type: 'input',
        inputType: 'number'
    },
    title: {
        label: 'Tytuł:',
        defaultValue: '',
        filterKey: 'title',
        type: 'input',
        inputType: 'text'
    },
    filter: {
        type: 'button',
        id: 'filter',
        body: 'Filtruj',
        btnFunction: async () => {
            loading.loading(app)
            const filter = await getAlbums()
            const filteredPosts = await selectFilter(filter)
            albumsData(filteredPosts)
            saveFilterSettings()
            loading.removeLoading()
        }
    },
    reset: {
        type: 'button',
        id: 'reset',
        body: 'Resetuj',
        btnFunction: async () => {
            loading.loading(app)
            resetFilterForm()
            await albumsData()
            loading.removeLoading()
        }
    },
}

const createAlbumsContainer = () => {
    const app = document.getElementById('app')
    const pageBody = document.createElement('div')
    pageBody.classList.add('page-body')
    app.appendChild(pageBody)

    const header = document.createElement('header')
    pageBody.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Albumy'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.classList.add('main')
    pageBody.appendChild(main)

    const filterForm = document.createElement('div')
    filterForm.classList.add('filter-container')
    filterForm.classList.add('center')
    main.appendChild(filterForm)

    const albums = document.createElement('div')
    albums.classList.add('albums-container')
    albums.classList.add('width-max')
    main.appendChild(albums)
    albumsContainer = document.querySelector('.albums-container')

    buildFilter(inputs)
    albumsData()
}

const buildAlbums = (albumData) => {
    const albumNumber = albumData.id
    const albumAuthor = albumData.userId
    const albumTitle = albumData.title

    const albums = document.createElement('div')
    const album = albumsContainer.appendChild(albums)
    album.classList.add('card')
    album.classList.add('width-max')
    album.id = `album${albumNumber}`

    const h2 = document.createElement('h3')
    const title = album.appendChild(h2)
    title.innerHTML = `Tytuł: ${albumTitle}`

    const albumA = document.createElement('p')
    const author = album.appendChild(albumA)
    author.innerText = `Autor: ${albumAuthor}`

    const albumUrl = document.createElement('a')
    const url = album.appendChild(albumUrl)
    url.href = `./photos?albumId=${albumNumber}`
    url.innerText = 'Link do albumu'
}

const albumsEngine = (data) => {

    if (data.length) {
        for (const albums of data) {
            buildAlbums(albums)
        }
    } else {
        const noAlbums = document.createElement('div')
        noAlbums.classList.add('no-card')
        noAlbums.classList.add('width-max')
        noAlbums.classList.add('center')
        noAlbums.classList.add('wrap')
        noAlbums.innerHTML = '<h2>Brak albumów spełniających kryteria wyszukiwania</h2>'
        albumsContainer.appendChild(noAlbums)
    }
}

const albumsData = async () => {
    albumsContainer.innerHTML = ''
    albums = await getAlbums()
    const filter = await getAlbums()
    const filteredAlbums = await selectFilter(filter)
    albumsEngine(filteredAlbums)
}

createAlbumsContainer()