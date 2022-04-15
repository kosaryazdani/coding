const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const renderDetails = async () => {
  const response =await fetch("http://localhost:3000/posts/" + id);
  const post=await (await response).json();

  const template=`
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `
  details.innerHTML=template;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());
