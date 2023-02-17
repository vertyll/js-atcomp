import { getPostsData, getCoomentsData } from './api.js'

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

        const buttonShowHide = document.createElement('button')
        buttonShowHide.innerHTML = 'Comments'
        buttonShowHide.classList.add('btn-show-hide')

        const postComments = document.createElement('div')
        postComments.id = `comments-${post.id}`
        postComments.classList.add('comments')

        postsContainer.appendChild(postContainer)
        postContainer.appendChild(postTitle)
        postContainer.appendChild(postBody)
        postContainer.appendChild(buttonShowHide)
        postContainer.appendChild(postComments)

        buttonShowHide.addEventListener('click', async () => {
            const comments = await getCoomentsData(post.id)
            const commentsContainer = document.getElementById(`comments-${post.id}`)
            commentsContainer.innerHTML = ''

            comments.forEach( (comment) => {
                const commentContainer = document.createElement('div')
                commentContainer.classList.add('comment')

                const commentName = document.createElement('h3')
                commentName.innerHTML = comment.name

                const commentEmail = document.createElement('p')
                commentEmail.innerHTML = comment.email

                const commentBody = document.createElement('p')
                commentBody.innerHTML = comment.body

                commentsContainer.appendChild(commentContainer)
                commentContainer.appendChild(commentName)
                commentContainer.appendChild(commentEmail)
                commentContainer.appendChild(commentBody)
            })
            if (commentsContainer.style.display === 'block') {
                commentsContainer.style.display = 'none'
            }
            else {
                commentsContainer.style.display = 'block'
            }
        }) 
    })
}

postEngine()