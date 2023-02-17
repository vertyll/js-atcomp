import { getAlbums } from './api.js'

const showAlbumsInPhotos = async () => {
    const albums = await getAlbums()
    const albumsContainer = document.getElementById('albums-bottom')

    albums.forEach( (album) => {
        const albumContainer = document.createElement('div')
        albumContainer.classList.add('album')

        const albumTitle = document.createElement('h2')
        albumTitle.innerHTML = album.title

        const albumUrl = document.createElement('a')
        albumUrl.href = `./photos?albumId=${album.id}`
        albumUrl.innerHTML = 'Go to album'
        albumUrl.classList.add('album-url')

        albumsContainer.appendChild(albumContainer)
        albumContainer.appendChild(albumTitle)
        albumContainer.appendChild(albumUrl)
    })
}

showAlbumsInPhotos()
