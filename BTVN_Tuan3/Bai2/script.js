document.getElementById("learn-more").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("projects").offsetTop,
    behavior: "smooth",
  });
});
