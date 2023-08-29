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

const backBtns = document.querySelectorAll('.back')

// Parse the current URL
const currentURL = new URL(window.location.href);

// Get the original path (e.g., '/index.html')
const originalPath = currentURL.origin;
console.log(originalPath);

// Add a click event listener to the back button
backBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // Navigate back to the original path
        window.location.href = originalPath;
    });
});