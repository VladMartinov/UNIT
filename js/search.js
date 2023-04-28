const searchForm = document.querySelector(".search");
const searchButton = document.querySelector(".search__button");

// Button click "Search"
searchButton.addEventListener("click", function (e) {
  if (!searchForm.classList.contains("search--visible")) {
    e.preventDefault();
    searchForm.classList.toggle("search--visible");
  }
});
