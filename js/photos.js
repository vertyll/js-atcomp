import axios from 'axios'

const getPhotosAlbums = async (albumId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    return res.data
}

const loadPhotosGetUrl = () => {
    const url = new URL(window.location.href)
    const albumId = url.searchParams.get('albumId')
    loadPhotos(albumId)
}

const loadPhotos = async (albumId) => {
    const photos = await getPhotosAlbums(albumId)
    const photosContainer = document.getElementById('photos')
    photos.forEach( (photo) => {
        const photoContainer = document.createElement('div')
        photoContainer.classList.add('photo')

        const photoTitle = document.createElement('h3')
        photoTitle.innerHTML = photo.title

        const photoImage = document.createElement('img')
        photoImage.src = photo.thumbnailUrl

        photosContainer.appendChild(photoContainer)
        photoContainer.appendChild(photoTitle)
        photoContainer.appendChild(photoImage)
    })
}

loadPhotosGetUrl()


