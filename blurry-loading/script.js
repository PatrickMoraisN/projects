const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('section');

let load = 0;

let int = setInterval(blurry, 30);

function blurry() {
  load++

  if(load > 99) {
    clearInterval(int);
  }
  console.log(10 - load/10);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = 10 - load/10;
  bg.style.filter = `blur(${10 - load/10}px)`;
}

window.onload = {
  blurry,
}