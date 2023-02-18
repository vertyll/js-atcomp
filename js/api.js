import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}

const getCommentsData = async (postId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return res.data
}

const getAlbums = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums/')
    return res.data
}

const getPhotosAlbums = async (albumId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    return res.data
}

export { getPostsData, getCommentsData, getAlbums, getPhotosAlbums }