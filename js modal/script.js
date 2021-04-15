const findBtn = document.querySelector('.btn-find');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal-btn');

findBtn.addEventListener('click', () => {
  modalContainer.classList.add('show');
})


closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
})