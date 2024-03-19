// submitButton.addEventListener("click") callback
var usernameEl = document.getElementById("username");
var titleEl = document.getElementById("title");
var contentEl = document.getElementById("content");
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  savePost();
  window.location.href = "blog.html";
});

function savePost() {
  {
    console.log("save");
    // add if
    // if (mode === "submit") {
    //   mode = "save";
    //   container.setAttribute("", "");
    //   darkLight.textContent = "";
    // } else {
    //   mode = "alert";
    //   container.setAttribute("", "");
    //   darkLight.textContent = "";
    // }
  }
  const blogPost = {
    username: usernameEl.value.trim(),
    title: titleEl.value.trim(),
    content: contentEl.value.trim(),
  };

  const oldPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  console.log(oldPosts);
  oldPosts.push(blogPost);

  localStorage.setItem("blogPosts", JSON.stringify(oldPosts));
}
// else ()
// }
