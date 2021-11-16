var storedValue = localStorage.getItem("postId");

fetch(`https://jsonplaceholder.typicode.com/posts/${storedValue}`)
    .then(Response => Response.json())
    .then((data) => {
    console.log(data)
    let postGrid = document.getElementById("posts-grid");
    let html = ""
    html += `
        <div class="col mb-3 text-center">
            <a class="text-decoration-none text-dark"></a>
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="post-title">${data.title}</h4>
                    <p class="post-body">${data.body}</p>
                </div>
            </div>
        </div>
    `
    postGrid.innerHTML = html
})
