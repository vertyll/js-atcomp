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
    const photosContainer = document.getElementById('slider')
    photos.forEach( (photo) => {
        const photoImage = document.createElement('img')
        photoImage.src = photo.thumbnailUrl

        photosContainer.appendChild(photoImage)
    })
}

loadPhotosGetUrl()






