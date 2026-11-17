
const btn = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  btn.classList.toggle('open');
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, Sauth Korea",
    dedicated: "1985, December, 14-15",
    area: 28057,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  }
];

const container = document.getElementById("temple-container");

function display(list) {
  container.innerHTML = "";
  list.forEach(t => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h3>${t.templeName}</h3>
      <p>Location: ${t.location}</p>
      <p>Dedicated: ${t.dedicated}</p>
      <p>Size: ${t.area} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" width="400" height="250">
    `;
    container.appendChild(card);
  });
}

display(temples);

document.getElementById("home").addEventListener("click", e => { e.preventDefault(); display(temples); });
document.getElementById("old").addEventListener("click", e => { e.preventDefault(); display(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)); });
document.getElementById("new").addEventListener("click", e => { e.preventDefault(); display(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)); });
document.getElementById("large").addEventListener("click", e => { e.preventDefault(); display(temples.filter(t => t.area > 90000)); });
document.getElementById("small").addEventListener("click", e => { e.preventDefault(); display(temples.filter(t => t.area < 10000)); });