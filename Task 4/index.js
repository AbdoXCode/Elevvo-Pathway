const searchInput = document.querySelector(".search input");
const posts = document.querySelectorAll(".post");
const filterTags = document.querySelectorAll(".filter-tags a");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();

  filterTags.forEach((tag) => {
    tag.classList.remove("active");
  });
  filterTags[0].classList.add("active");

  posts.forEach((post) => {
    const title = post.querySelector("h1").textContent.toLowerCase();
    const description = post
      .querySelector(".post-description")
      .textContent.toLowerCase();

    if (title.includes(filter) || description.includes(filter)) {
      post.classList.remove("hidden");
    } else {
      post.classList.add("hidden");
    }
  });
});

filterTags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    e.preventDefault();
    const category = tag.dataset.filter;

    posts.forEach((post) => {
      const postTag = post.querySelector(".tag").textContent;

      if (category === "All" || postTag === category) {
        post.classList.remove("hidden");
      } else {
        post.classList.add("hidden");
      }

      filterTags.forEach((tag) => {
        tag.classList.remove("active");
      });
      tag.classList.add("active");
    });
  });
});
