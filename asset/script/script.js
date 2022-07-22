// Show Menu
const navMenu = document.querySelector("#nav-menu")
const navToggle = document.querySelector("#nav-toggle")
const navClose = document.querySelector("#nav-close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// Remove Mobile Menu
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Change Background Header
function scrollHeader() {
    const header = document.getElementById("header")
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener("scroll", scrollHeader)

//Swiper
let swiper = new Swiper(".popular-container", {
    loop: true,
    spaceBetween: 24,
    slidesPreView: "auto",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

