const panels = document.querySelectorAll('.panel');

const handleClick = (event) => {
  panels.forEach(panel => panel.classList.remove('active'));
  event.target.classList.add('active');
}

panels.forEach(panel => {
  panel.addEventListener('click', handleClick)
})