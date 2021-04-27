const sections = document.querySelectorAll('section');
const trans = document.querySelector('.trans');
const gradients = ['coral', 'chocolate', 'yellow'];

const options = {
  threshold: 0.7,
}

function navScroll(entries) {
  entries.forEach((entry) => {
    console.log(entry)
    const className = entry.target.className
    const activeLink = document.querySelector(`[data-page="${className}"]`)
    const elementIndex = entry.target.getAttribute('data-index')
    const coordinates = activeLink.getBoundingClientRect()
    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    }

    if(entry.isIntersecting){
      trans.style.setProperty('height', `${directions.height}px`)
      trans.style.setProperty('width', `${directions.width}px`)
      trans.style.setProperty('top', `${directions.top}px`)
      trans.style.setProperty('left', `${directions.left}px`)
      trans.style.backgroundColor = gradients[elementIndex]
    }
  })
}
let observer = new IntersectionObserver(navScroll, options);

sections.forEach((section) => {
  observer.observe(section)
})
