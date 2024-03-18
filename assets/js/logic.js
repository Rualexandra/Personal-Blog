const darkLight = document.getElementById("dark-light");
const container = document.querySelector(".container");

let mode = "light";

darkLight.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    darkLight.textContent = "🌘";
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
    darkLight.textContent = "🌌";
  }
});
