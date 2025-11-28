const header = document.querySelector("header");

const rightButton = document.querySelector("i .ri-arrow-right-s-line");
const leftButton = document.querySelector("i .ri-arrow-left-s-line");


// Header
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 550) {
        header.classList.add("active");
    } else if (header.classList.contains("active")) {
        header.classList.remove("active");
    }
});

// Images
