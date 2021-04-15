const pic = document.querySelector('.photo');
const pic2 = document.querySelector('.pictures')
const modal = document.querySelector('.modal-container')
const fullimg = document.querySelector('.fullImg')

pic2.addEventListener('click', (event) => {
  if(event.target.classList.contains('phot')){
  modal.classList.add('open')
  fullimg.src = event.target.src
  }
})

modal.addEventListener('click', (event) => {
  if(event.target.classList.contains('open')){
    modal.classList.remove('open')
  }
})