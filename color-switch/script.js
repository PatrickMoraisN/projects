const btn = document.querySelector('button');
const p = document.querySelector('p');
const body = document.querySelector('body');

const showInfo = (color) => {
  p.innerText = color;
}

const changeColor = () => {
  const color = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
  body.style.backgroundColor = color;
  showInfo(color);
}

btn.addEventListener('click', changeColor);