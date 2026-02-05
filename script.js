'use strict'

const addEventOnElem = function (elem, type, callback) {
  if (elem.length) {
    elem.forEach(el => el.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
};

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");
const sections = document.querySelectorAll("[data-section]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

const headerActive = () => {
  window.scrollY > 150
    ? header.classList.add("active")
    : header.classList.remove("active");
};

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = () => {
  if (lastScrolledPos > window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }
  lastScrolledPos = window.scrollY;
};

addEventOnElem(window, "scroll", headerSticky);


/*const scrollReveal = () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
      section.classList.add("active");
    }
  });
};*/

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight * 0.8) {
      const reveals = section.querySelectorAll("[data-reveal]");

      reveals.forEach((el, index) => {
        if (!el.classList.contains("active")) {
          setTimeout(() => {
            el.classList.add("active");
          }, index * 150);
        }
      });
    }
  });
};

scrollReveal();
window.addEventListener("scroll", scrollReveal);


const reveals = document.querySelectorAll("[data-reveal]");


scrollReveal();
addEventOnElem(window, "scroll", scrollReveal);


scrollReveal();
addEventOnElem(window, "scroll", scrollReveal);

