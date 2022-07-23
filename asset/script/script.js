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

let swiper = new Swiper(".popular-container", 
{  slidesPerView: 1,
    spaceBetween: 10,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});

//Mixitup

let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 300
    }
});

// Link Featured Active

const featuredLink = document.querySelectorAll('.featured-item')

function activeFeatured() {
    featuredLink.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
featuredLink.forEach(l => l.addEventListener("click", activeFeatured))


//Scroll Up

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up")
    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)


//Scroll Section Active Link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}

window.addEventListener("scroll", scrollActive)


