import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}

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

    const posts = await getPostsData()
    const postsContainer = document.getElementById('posts')
    posts.forEach( (post) => {
        const postContainer = document.createElement('div')
        postContainer.classList.add('post')

        const postTitle = document.createElement('h2')
        postTitle.innerHTML = post.title

        const postBody = document.createElement('p')
        postBody.innerHTML = post.body

        const postButton = document.createElement('button')
        postButton.innerHTML = 'Comments'
        postButton.classList.add('btn')

        const buttonHide = document.createElement('button')
        buttonHide.innerHTML = 'Hide'
        buttonHide.classList.add('btn')

        postButton.addEventListener('click', () => {
            uploadeComments(post.id)
            postButton.style.display = 'none'
            postContainer.appendChild(buttonHide)
        })
        
        buttonHide.addEventListener('click', () => {
            postButton.style.display = 'block'
            buttonHide.style.display = 'none'
            postContainer.removeChild(postComments)
        })

        const postComments = document.createElement('div')
        postComments.id = `comments-${post.id}`
        postComments.classList.add('comments')

        postsContainer.appendChild(postContainer)
        postContainer.appendChild(postTitle)
        postContainer.appendChild(postBody)
        postContainer.appendChild(postButton)
        postContainer.appendChild(postComments)
    })
}

uploadeComments()




