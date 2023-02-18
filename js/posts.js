import { getPostsData, getCommentsData } from './api.js'
import { buildFilter, selectFilter, resetFilterForm, saveFilterSettings } from './filter.js'

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
            const filteredPosts = await selectFilter('posts')
            postsEngine(filteredPosts)
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
    const pagebody = document.createElement('div')
    pagebody.className = 'pagebody'
    app.appendChild(pagebody)
    const header =  document.createElement('header')
    pagebody.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Posty'
    header.appendChild(h1)
    const main = document.createElement('main')
    main.id = 'postsMain'
    pagebody.appendChild(main)
    const filterForm = document.createElement('div')
    filterForm.id = 'filterContainer'
    main.appendChild(filterForm)
    const posts = document.createElement('div')
    posts.id = 'postsContainer'
    main.appendChild(posts)
    postsContainer = document.getElementById('postsContainer')
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
    post.className = 'post'
    post.id = `post${postId}`
    
    const h2 = document.createElement('h2')
    const title = post.appendChild(h2)
    title.innerHTML =`Tytuł: ${postTitle}`

    const postB = document.createElement('p')
    const body = post.appendChild(postB)
    body.innerText = postBody
    
    const postA = document.createElement('p')
    const author = post.appendChild(postA)
    author.innerText = postAuthor

    const commentButton = document.createElement('button')
    commentButton.innerText = 'Komentarze'
    commentButton.value = 'notClicked'
    posts.appendChild(commentButton)

    commentButton.addEventListener('click', async (e) => {
        if(e.target.value === 'notClicked') {
            commentsData = await getCommentsData(postId)
            buildComments(post.id, commentsData)
            e.target.value = 'clicked'
        }
        else{
            e.target.value = 'notClicked'
            document.getElementById(`comments${post.id}`).remove()
        }
    })
}

const buildComments = (postId, commentsData) => {
    const posts = document.getElementById(postId)
    const commentsContainer = document.createElement('div')
    commentsContainer.className = 'commentsContainer'
    commentsContainer.id = `comments${postId}`
    commentsContainer.innerHTML = "<h3>Komentarze:</h3>"
    posts.appendChild(commentsContainer)
    for(comment in commentsData){
        const comments = document.createElement('div')
        comments.className = 'comments'
        commentsContainer.appendChild(comments)

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
}

const postsEngine = (data) => {
    for(const d in data){
        buildPosts(data[d])
    }
}

const postsData = async () => {
    postsContainer.innerHTML=''
    posts = await getPostsData()
    const filteredPosts = await selectFilter('posts')
    postsEngine(filteredPosts)
}

createPostsContainer()