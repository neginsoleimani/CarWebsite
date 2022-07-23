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
    {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1.3,
                spaceBetween: 20,
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


// Scroll Reveal 

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true,
})

sr.reveal(`.home-title , .popular-container , .features-img , .featured-filters , .footer-copy ,.about-data`)
sr.reveal(`.home-subtitle`,{delay:500})
sr.reveal(`.home-elec`,{delay:600})
sr.reveal(`.home-img`,{delay:800})
sr.reveal(`.home-car-data`,{delay:900,interval:100,origin:'bottom'})
sr.reveal(`.home-button`,{delay:1000,origin:'bottom'})
sr.reveal(`.about-group , .offer-data`,{origin:'left'})
sr.reveal(`.offer-img`,{origin:'right'})
sr.reveal(`.features-map`,{delay:600,origin:'bottom'})
sr.reveal(`.features-card`,{interval:300})
sr.reveal(`.featured-card , .logos-content , .footer-content`,{interval:100})









