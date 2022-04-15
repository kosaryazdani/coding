const blogs = document.querySelector(".blogs");
const renderPosts = async () => {
  let url = "http://localhost:3000/posts";
  const response = await fetch(url);

  const posts = await response.json();
  let template = "";
  posts.forEach((post) => {
    template += `
        <div class="post">
        <h2>
            ${post.title}
        </h2>
        <p><small>${post.likes}</small>  Likes</p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="./details.html?id=${post.id}">read more...</a>
        </div>
        
        `;
  });

  blogs.innerHTML=template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
