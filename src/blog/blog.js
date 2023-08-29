const blogSection = document.getElementById('blogSection')



const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('post');
// console.log('Index:', index);

const userData = JSON.parse(localStorage.getItem('defaultPost'));
// console.log('User Data:', userData);

if (userData && Array.isArray(userData) && index >= 0 && index < userData.length) {
    const blogPost = userData[index];

    let showBlog = () => {
        const blogSection = document.getElementById('blogSection');
        const cont = document.createElement('div');
        cont.classList.add('bigbox');

        cont.innerHTML = `
            <button class="back">&larr;</button>
            <div class="sm-box">
                <div class="left">
                    <h2 class="title">${blogPost.title}</h2>
                    <p class="description">${blogPost.description}</p>
                </div>
                <div class="right">
                    <img class="blogImg" src="${blogPost.blogUrl}" alt="blogImage">
                </div>
            </div>
            <p class="content">
                ${blogPost.write}
            </p>`;

        blogSection.appendChild(cont);
    }

    if (blogPost) {
        showBlog();
    } else {
        alert("blog post not available");
    }
} else {
    alert("Invalid data in localStorage or index out of range.");
}

const backBtn = document.querySelectorAll('.back')

backBtn.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
})