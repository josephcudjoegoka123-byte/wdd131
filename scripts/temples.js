
const btn = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  btn.classList.toggle('open');
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;


document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;