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

document.addEventListener("DOMContentLoaded", function() {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach(details => {
        details.addEventListener("toggle", function() {
            const content = details.querySelector(".content");

            if (details.open) {
                const height = content.scrollHeight;
                content.style.maxHeight = `${height}px`;
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});


