const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

const myDiv = document.querySelectorAll(".feature");
myDiv.forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("clicked");
  });
});
