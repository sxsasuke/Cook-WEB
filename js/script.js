const addEventOnElem = (elems, event, callback) => {
    elems.forEach(elem => elem.addEventListener(event, callback));
  };
  
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);


// Map restaurants

// Initialize the map
var map = L.map('map').setView([47.0945, 51.9238], 14); // Coordinates for Atyrau, Kazakhstan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
L.marker([47.0945, 51.9238]).addTo(map)
    .bindPopup('JIDA Restaurant')
    .openPopup();


var map2 = L.map('map2').setView([47.0945, 51.9238], 14); // Coordinates for Atyrau, Kazakhstan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

// Add a marker
L.marker([47.0945, 51.9238]).addTo(map2)
    .bindPopup('JIDA Restaurant')
    .openPopup();


var map3 = L.map('map3').setView([47.0945, 51.9238], 14); // Coordinates for Atyrau, Kazakhstan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

// Add a marker
L.marker([47.0945, 51.9238]).addTo(map3)
    .bindPopup('JIDA Restaurant')
    .openPopup();