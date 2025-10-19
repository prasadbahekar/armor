const header = document.querySelector("header");

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 550) {
        header.classList.add("active");
    } else if (header.classList.contains("active")) {
        header.classList.remove("active");
    }
});


