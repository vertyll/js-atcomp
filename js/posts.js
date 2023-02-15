import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}

const uploadePosts = async () => {
    const posts = await getPostsData()
    const postsContainer = document.getElementById('posts-bottom')
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

uploadePosts()