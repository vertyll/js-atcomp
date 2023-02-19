import {
    getAlbums
} from './api.js'
import {
    buildFilter,
    selectFilter,
    resetFilterForm,
    saveFilterSettings
} from './filter.js'

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
            const filteredAlbums = await selectFilter('albums')
            albumsEngine(filteredAlbums)
            saveFilterSettings()
        }
    },
    reset: {
        type: 'button',
        id: 'reset',
        body: 'Resetuj',
        btnFunction: async () => {
            resetFilterForm()
            await albumsData()
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
    main.classList.add('albums-main')
    pageBody.appendChild(main)

    const filterForm = document.createElement('div')
    filterForm.classList.add('filter-container')
    main.appendChild(filterForm)

    const albums = document.createElement('div')
    albums.classList.add('albums-container')
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
    album.classList.add('album')
    album.id = `album${albumNumber}`

    const h2 = document.createElement('h2')
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
    for (const d in data) {
        buildAlbums(data[d])
    }
}

const albumsData = async () => {
    albumsContainer.innerHTML = ''
    albums = await getAlbums()
    const filteredAlbums = await selectFilter('albums')
    albumsEngine(filteredAlbums)
}

createAlbumsContainer()