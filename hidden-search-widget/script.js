const buttonSearch = document.querySelector('.search button');
const searchContainer = document.querySelector('.search');
const inputSearch = document.querySelector('.search input');

buttonSearch.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  inputSearch.focus();
})