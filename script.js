/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*===== THEME TOGGLE =====*/
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check localStorage for theme
if (currentTheme) {
    document.body.classList.add(currentTheme);

    // Change icon based on theme
    if (currentTheme === 'dark-mode') {
        themeToggle.classList.replace('bx-moon', 'bx-sun');
    }
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change icon when toggling theme
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        themeToggle.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Initialize Typed.js
var type = new Typed(".text", {
    strings: ["Software Engineer", "Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true
});
