const buttonSearch = document.querySelector('.search button');
const searchContainer = document.querySelector('.search');

buttonSearch.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
})