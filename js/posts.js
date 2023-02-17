import { getPostsData, getCoomentsData } from './api.js'

const postEngine = async (postId) => {

    const posts = await getPostsData()
    const postsContainer = document.getElementById('posts')

    posts.forEach( (post) => {
        const postContainer = document.createElement('div')
        postContainer.classList.add('post')

        const postTitle = document.createElement('h3')
        postTitle.innerHTML = `Tytuł: ${post.title}`

        const postBody = document.createElement('p')
        postBody.innerHTML = post.body

        const postAuthor = document.createElement('p')
        postAuthor.innerHTML = `Autor: ${post.userId}`

        const buttonShowHide = document.createElement('button')
        buttonShowHide.innerHTML = 'Komentarze'
        buttonShowHide.classList.add('btn-show-hide')

        const postComments = document.createElement('div')
        postComments.id = `comments-${post.id}`
        postComments.classList.add('comments')

        postsContainer.appendChild(postContainer)
        postContainer.appendChild(postTitle)
        postContainer.appendChild(postBody)
        postContainer.appendChild(postAuthor)
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

const saveFilterSettings = () => {
    let path = window.location.pathname.substring(1)
    for(inputName in inputsFromPosts){
        if(inputsFromPosts[inputName].type != 'button'){
            localStorage.setItem(`${path}::${inputName}`, form[inputName].value);
        }
    }
}

window.addEventListener('beforeunload', () => {
    saveFilterSettings();
})

let inputs = {
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
    content: {
        label: 'Treść:', 
        defaultValue: '', 
        filterKey: 'body', 
        type: 'input', 
        inputType: 'text'
    },
    sortBy: {
        label: 'Sortowanie po:', 
        defaultValue: 'userId', 
        type: 'select', 
        selectOptions: ['userId', 'title', 'body'], 
        textForOptions: ['Autor', 'Tytuł', 'Treść']
    },
    filter: {
        type: 'button', 
        id: 'filter', 
        content: 'Filtruj', 
        btnFunction: async () =>{
        let filteredPosts = await filter('posts');
        postBuilder(filteredPosts);
        saveFilterSettings();
        }
    },
    clean: {
        type: 'button', 
        id: 'clean', 
        content: 'Wyczyść', 
        btnFunction: async () =>{
        clean();
        await postsData();
        }
    },
}

postEngine()