fetch('https://jsonplaceholder.typicode.com/posts')

.then(response => response.json())
.then(data => {
    document.querySelector('.posts').innerHTML = data.map(post => {
    return `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `
    }).join('');
})
.catch(error => console.log(error));

document.querySelector('#filterContent').addEventListener('input', function() {
const filter = this.value.toLowerCase();
const posts = document.querySelectorAll('.post');
posts.forEach(post => {
const body = post.querySelector('p').innerText.toLowerCase();
if (body.includes(filter) || filter === ''){
    post.style.display = 'block';
} else {
    post.style.display = 'none';
}
})
})

document.querySelector('#filterTitle').addEventListener('input', function() {
const filter = this.value.toLowerCase();
const posts = document.querySelectorAll('.post');
posts.forEach(post => {
const title = post.querySelector('h2').innerText.toLowerCase();
if (title.includes(filter)) {
    post.style.display = 'block';
} else {
    post.style.display = 'none';
}
})
})