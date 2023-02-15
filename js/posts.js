import axios from 'axios'

const getPostsData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/")
    return res.data
}