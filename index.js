function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => {
    let html = ""
    data.forEach(e => {
        let postGrid = document.getElementById("posts-grid");
        html += `
        <div class="col-12 col-sm-6 col-md-4 mb-3">
            <a class="text-decoration-none text-dark" href="single-post-page.html" onClick="singleCard(${e.id})">
                <div class="card h-100 id="${e.id}">
                    <div class="card-body" id="${e.id}">
                        <h4 class="post-title">${e.title}</h4>
                        <p class="post-body">${e.body}</p>
                    </div>
                </div>
            </a>
        </div>
    `
     postGrid.innerHTML = html
    });
})
}

getPosts()

function singleCard(num) {
    localStorage.setItem("postId", num)
}