import {
    getPostsData,
    getCommentsData
} from './api.js'
import {
    buildFilter,
    selectFilter,
    resetFilterForm,
    saveFilterSettings
} from './filter.js'

import loading  from './customLoader.js'

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
    body: {
        label: 'Treść:',
        defaultValue: '',
        filterKey: 'body',
        type: 'input',
        inputType: 'text'
    },
    filter: {
        type: 'button',
        id: 'filter',
        body: 'Filtruj',
        btnFunction: async () => {
            postsData()
            saveFilterSettings()
        }
    },
    reset: {
        type: 'button',
        id: 'reset',
        body: 'Resetuj',
        btnFunction: async () => {
            resetFilterForm()
            await postsData()
        }
    }
}

const createPostsContainer = () => {
    const app = document.getElementById('app')
    const pageBody = document.createElement('div')
    pageBody.classList.add('page-body')
    app.appendChild(pageBody)
    const header = document.createElement('header')
    pageBody.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Posty'
    header.appendChild(h1)
    const main = document.createElement('main')
    main.classList.add('main')
    pageBody.appendChild(main)
    const filterForm = document.createElement('div')
    filterForm.classList.add('filter-container')
    filterForm.classList.add('center')
    main.appendChild(filterForm)
    const posts = document.createElement('div')
    posts.classList.add('posts-container')
    posts.classList.add('center')
    posts.classList.add('wrap')
    posts.classList.add('widht-max')
    main.appendChild(posts)
    postsContainer = document.querySelector('.posts-container')
    buildFilter(inputs)
    postsData()
}

const buildPosts = (postData) => {
    const postId = postData.id
    const postAuthor = postData.userId
    const postTitle = postData.title
    const postBody = postData.body

    const posts = document.createElement('div')
    const post = postsContainer.appendChild(posts)
    post.classList.add('card')
    post.classList.add('width-max')
    post.id = `post${postId}`

    const h2 = document.createElement('h3')
    const title = post.appendChild(h2)
    title.innerHTML = `Tytuł: ${postTitle}`

    const postB = document.createElement('p')
    const body = post.appendChild(postB)
    body.innerHTML = `Treść: ${postBody}`

    const postA = document.createElement('p')
    const author = post.appendChild(postA)
    author.innerHTML = `Autor: ${postAuthor}`

    const commentButton = document.createElement('button')
    commentButton.innerText = 'Komentarze'
    commentButton.value = 'notClicked'
    posts.appendChild(commentButton)

    commentButton.addEventListener('click', async (e) => {
        if (e.target.value === 'notClicked') {

            const buildCommentsDiv = document.createElement('div')
            buildCommentsDiv.classList.add('comments-container')
            buildCommentsDiv.classList.add('width-max')
            buildCommentsDiv.id = `comments${postId}`
            buildCommentsDiv.innerHTML = "<h3>Komentarze:</h3>"
            posts.appendChild(buildCommentsDiv)

            const loader = document.createElement('div')
            loader.classList.add('comments-loading')
            buildCommentsDiv.appendChild(loader)

            const commentsData = await getCommentsData(postId)
            for (comment in commentsData) {

                const comments = document.createElement('div')
                comments.classList.add('comments')
                buildCommentsDiv.appendChild(comments)

                const commentEmail = document.createElement('h4')
                commentEmail.innerHTML = commentsData[comment].email
                comments.appendChild(commentEmail)

                const commentName = document.createElement('h5')
                commentName.innerHTML = commentsData[comment].name
                comments.appendChild(commentName)

                const commentBody = document.createElement('p')
                commentBody.innerText = commentsData[comment].body
                comments.appendChild(commentBody)
            }
            loader.remove()
            e.target.value = 'clicked'
        } else {
            const commentsDiv = document.getElementById(`comments${postId}`)
            commentsDiv.remove()
            e.target.value = 'notClicked'
        }
    })
}

// const buildComments = (postId, commentsData) => {

//     posts = document.getElementById(postId)
//     const commentsContainer = document.createElement('div')
//     commentsContainer.classList.add('comments-container')
//     commentsContainer.classList.add('width-max')
//     commentsContainer.id = `comments${postId}`
//     commentsContainer.innerHTML = "<h3>Komentarze:</h3>"
//     posts.appendChild(commentsContainer)

//     for (comment in commentsData) {
//         const comments = document.createElement('div')
//         comments.classList.add('comments')
//         commentsContainer.appendChild(comments)

//         const commentEmail = document.createElement('h4')
//         commentEmail.innerHTML = commentsData[comment].email
//         comments.appendChild(commentEmail)

//         const commentName = document.createElement('h5')
//         commentName.innerHTML = commentsData[comment].name
//         comments.appendChild(commentName)

//         const commentBody = document.createElement('p')
//         commentBody.innerText = commentsData[comment].body
//         comments.appendChild(commentBody)
//     }
// }

const postsEngine = (data) => {
    if (data.length) {
        for (const post of data) {
            buildPosts(post)
        }
    } else {
        const noPosts = document.createElement('div')
        noPosts.classList.add('no-card')
        noPosts.classList.add('center')
        noPosts.classList.add('wrap')
        noPosts.classList.add('width-max')
        noPosts.innerHTML = '<h2>Brak postów spełniających kryteria wyszukiwania</h2>'
        postsContainer.appendChild(noPosts)
    }
}

const postsData = async () => {
    postsContainer.innerHTML = ''
    posts = await getPostsData().then((posts) => {
        const filteredPosts = selectFilter(posts)
        postsEngine(filteredPosts)
    })
}

// const postsData = async () => {
//     postsContainer.innerHTML = ''
//     const filter = await getPostsData()
//     const filteredPosts = selectFilter(filter)
//     postsEngine(filteredPosts)
// }

createPostsContainer()