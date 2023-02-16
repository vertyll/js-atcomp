import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}

const getPosts = async () => {
    const posts = await getPostsData()
    const postsContainer = document.getElementById('posts-bottom')
    postsContainer.innerHTML = ''
    posts.forEach( (post) => {
        postsContainer.innerHTML += `
            <table>
                <tr>
                    <td>
                        <b>User Id:</b>
                        ${post.userId}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Tytuł:</b>
                        ${post.title}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Treść:</b>
                        ${post.body}
                    </td>
                </tr>
            </table>
        `
    })
}

getPosts()