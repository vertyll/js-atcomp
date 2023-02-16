import axios from 'axios'

const getAlbums = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums/')
    return res.data
}

const getPhotosAlbums = async (albumId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    return res.data
}

const showAlbums = async () => {
    const albums = await getAlbums()
    const albumsContainer = document.getElementById('albums-bottom')

    albums.forEach( (album) => {
        const albumContainer = document.createElement('div')
        albumContainer.classList.add('album')

        const albumTitle = document.createElement('h2')
        albumTitle.innerHTML = album.title

        const buttonShow = document.createElement('button')
        buttonShow.innerHTML = 'Show album'
        buttonShow.classList.add('btn-show')

        const albumPhotos = document.createElement('div')
        albumPhotos.id = `photos-${album.id}`
        albumPhotos.classList.add('photos')

        albumsContainer.appendChild(albumContainer)
        albumContainer.appendChild(albumTitle)
        albumContainer.appendChild(buttonShow)
        albumContainer.appendChild(albumPhotos)

        buttonShow.addEventListener('click', async () => {
            const photos = await getPhotosAlbums(album.id)
            photos.forEach( (photo) => {
                const photoContainer = document.createElement('div')
                photoContainer.classList.add('photo')

                const photoTitle = document.createElement('h3')
                photoTitle.innerHTML = photo.title

                const photoImage = document.createElement('img')
                photoImage.src = photo.thumbnailUrl

                albumPhotos.appendChild(photoContainer)
                photoContainer.appendChild(photoTitle)
                photoContainer.appendChild(photoImage)
            })
        })
    })
}

showAlbums()