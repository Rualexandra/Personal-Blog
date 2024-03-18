// submitButton.addEventListener("click") callback
usernameE1 = document.getElementById("username");
titleE1 = document.getElementById("title");
contentE1 = document.getElementById("content");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  savePost();

  function savePost() {
    const blogPost = {
      username: usernameEl.value.trim(),
      title: titleEl.value.trim(),
      content: contentEl.value.trim(),
    };
    const blogPosts = localStorage.setItem("blogPosts");
    blogPosts.PUSH(blogPost);

    localStorage.setItem("blogPosts", JSON.stringify(blogPost));
  }
  window.location.href = "blog.html";
});
