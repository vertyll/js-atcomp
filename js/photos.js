import { getPhotosAlbums } from './api.js'

const loadPhotosGetUrl = () => {
     const url = new URL(window.location.href)
     const albumId = url.searchParams.get('albumId')
     loadPhotos(albumId)
}

