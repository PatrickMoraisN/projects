const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('li');

const cursor = (e) => {
  mouseCursor.style.top = `${e.pageY}px`
  mouseCursor.style.left = `${e.pageX}px`
}

const hover = () => {
  mouseCursor.style.height = '5.9rem';
  mouseCursor.style.width = '5.9rem';
}

const hoverout = () => {
  mouseCursor.style.height = '3rem';
  mouseCursor.style.width = '3rem';
}

window.addEventListener('mousemove', cursor)
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    hover();
    link.style.color = `white`;
  })
  link.addEventListener('mouseleave', () => {
    hoverout();
    link.style.color = `black`;
  })
})