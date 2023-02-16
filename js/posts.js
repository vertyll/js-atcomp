import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}

const uploadePosts = async () => {
    const posts = await getPostsData()
    const postsContainer = document.getElementById('posts')
    posts.forEach( (post) => {
        const postContainer = document.createElement('div')
        postContainer.classList.add('post')
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button class="btn${post.id}">Comments</button>

            <div class="comments" id="comments-${post.id}"></div>
        `
        postsContainer.appendChild(postContainer)
    })
}

uploadePosts()

const getCoomentsData = async (postId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return res.data
}

const uploadeComments = async (postId) => {
    const comments = await getCoomentsData(postId)
    const commentsContainer = document.getElementById(`comments-${postId}`)
    comments.forEach( (comment) => {
        const commentContainer = document.createElement('div')
        commentContainer.classList.add('comment')
        commentContainer.innerHTML = `
            <h3>${comment.name}</h3>
            <p>${comment.body}</p>
        `
        commentsContainer.appendChild(commentContainer)
    })
}