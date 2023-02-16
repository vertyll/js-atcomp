import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}

const getCoomentsData = async (postId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return res.data
}

const postEngine = async (postId) => {

    const posts = await getPostsData()
    const postsContainer = document.getElementById('posts')

    posts.forEach( (post) => {
        const postContainer = document.createElement('div')
        postContainer.classList.add('post')

        const postTitle = document.createElement('h2')
        postTitle.innerHTML = post.title

        const postBody = document.createElement('p')
        postBody.innerHTML = post.body

        const buttonShow = document.createElement('button')
        buttonShow.innerHTML = 'Comments'
        buttonShow.classList.add('btn-show')

        const buttonHide = document.createElement('button')
        buttonHide.innerHTML = 'Hide'
        buttonHide.classList.add('btn-hide')

        const postComments = document.createElement('div')
        postComments.id = `comments-${post.id}`
        postComments.classList.add('comments')

        postsContainer.appendChild(postContainer)
        postContainer.appendChild(postTitle)
        postContainer.appendChild(postBody)
        postContainer.appendChild(buttonShow)
        postContainer.appendChild(buttonHide)
        postContainer.appendChild(postComments)

        buttonShow.addEventListener('click', async () => {
            const comments = await getCoomentsData(post.id)
            comments.forEach( (comment) => {
                const commentContainer = document.createElement('div')
                commentContainer.classList.add('comment')

                const commentName = document.createElement('h3')
                commentName.innerHTML = comment.name

                const commentEmail = document.createElement('p')
                commentEmail.innerHTML = comment.email

                const commentBody = document.createElement('p')
                commentBody.innerHTML = comment.body

                postComments.appendChild(commentContainer)
                commentContainer.appendChild(commentName)
                commentContainer.appendChild(commentEmail)
                commentContainer.appendChild(commentBody)
                buttonShow.style.display = 'none'
                buttonHide.style.display = 'block'
            })
        })
        buttonHide.style.display = 'none'
        buttonHide.addEventListener('click', () => {
            postComments.innerHTML = ''
            buttonShow.style.display = 'block'
            buttonHide.style.display = 'none'
        })
    })
}

postEngine()