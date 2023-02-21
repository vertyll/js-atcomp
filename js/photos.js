import {
    getPhotosAlbums
} from './api.js'

const createPhotosContainer = () => {
    const app = document.getElementById('app')
    const pageBody = document.createElement('div')
    pageBody.classList.add('page-body')
    app.appendChild(pageBody)

    const header = document.createElement('header')
    pageBody.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Zdjęcia'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.classList.add('main')
    pageBody.appendChild(main)

    const photos = document.createElement('div')
    photos.classList.add('photos-container')
    photos.classList.add('width-max')
    main.appendChild(photos)
}

const loadPhotosGerUrlToSlider = () => {
    const url = new URL(window.location.href)
    const albumId = url.searchParams.get('albumId')
    const photoId = url.searchParams.get('photoId')
    loadPhotosToSlider(albumId, photoId)
}

const buildSliderWithButtons = (photos) => {

    const slider = document.querySelector('.photos-container')

    const sliderButtons = document.createElement('div')
    sliderButtons.classList.add('slider-buttons')
    sliderButtons.classList.add('center')
    slider.appendChild(sliderButtons)

    const sliderButtonLeft = document.createElement('button')
    sliderButtonLeft.classList.add('slider-button-left')
    sliderButtonLeft.innerHTML = '<'
    sliderButtons.appendChild(sliderButtonLeft)

    const sliderButtonRight = document.createElement('button')
    sliderButtonRight.classList.add('slider-button-right')
    sliderButtonRight.innerHTML = '>'
    sliderButtons.appendChild(sliderButtonRight)

    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-container')
    sliderContainer.classList.add('center')
    sliderContainer.classList.add('wrap')
    sliderContainer.classList.add('width-max')
    slider.appendChild(sliderContainer)

    return sliderContainer

}
const loadPhotosToSlider = async (albumId, photoId) => {
    const photos = await getPhotosAlbums(albumId)
    const sliderContainer = buildSliderWithButtons(photos)

    const sliderButtonLeft = document.querySelector('.slider-button-left')
    const sliderButtonRight = document.querySelector('.slider-button-right')

    let index = 0
    if (photoId) {
        index = photos.findIndex((photo) => photo.id === Number(photoId))
    }

    const showPhoto = (index) => {
        const photo = photos[index]
        sliderContainer.innerHTML = `<img src="${photo.url}" alt="${photo.title}">`
    }

    showPhoto(index)

    sliderButtonLeft.addEventListener('click', () => {
        index--
        if (index < 0) {
            index = photos.length - 1
        }
        showPhoto(index)
    })

    sliderButtonRight.addEventListener('click', () => {
        index++
        if (index >= photos.length) {
            index = 0
        }
        showPhoto(index)
    })
}

const photos = () => {
    createPhotosContainer()
    loadPhotosGerUrlToSlider()
}

photos()