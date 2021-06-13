const btn = document.querySelector('.toggle-btn');
const header = document.querySelector('.main-header');
const over = document.querySelector('.overlay');

const addOpen = () => {
  btn.classList.toggle('open')
  header.classList.toggle('open')
  over.classList.toggle('open')
}

btn.addEventListener('click', addOpen)