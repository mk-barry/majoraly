// const sections = document.querySelectorAll('.section');
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//   let current = "";

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 100; // marge pour détection
//     if (scrollY >= sectionTop) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href') === '#' + current) {
//       link.classList.add('active');
//     }
//   });
// });

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.link');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  let current = "";
  const navHeight = nav.offsetHeight; // hauteur en px, peu importe l’unité CSS

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight; // correction automatique
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});