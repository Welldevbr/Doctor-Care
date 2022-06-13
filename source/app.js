// Scorll Navigation

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('show')
}

function closeMenu() {
  document.body.classList.remove('show')
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    document.body.classList.remove('show')
  })
}

ScrollReveal().reveal('#home')
