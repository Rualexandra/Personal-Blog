back = document.getElementById("back");
blogSection = document.getElementById("blog");

backButton.addEventListener("click", function () {
  window.location.href = "index.html";
});

function renderBlog() {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
  if (lastPost !== null) {
    for (blog of blogPosts) console.log(blog.username);
    console.log(blog.title);
    console.log(blog.content);
    blogSection.append();
  }
}

function init() {
  renderBlog();
}
init();
