const btn = document.querySelector('.toggle-btn');
const header = document.querySelector('.main-header');
const over = document.querySelector('.overlay');
const links = document.querySelectorAll('.links');

const addOpen = () => {
  btn.classList.toggle('open')
  header.classList.toggle('open')
  over.classList.toggle('open')
}

btn.addEventListener('click', addOpen)
links.forEach((link) => link.addEventListener('click', addOpen))