function toggleNav() {
    const navLinks = document.querySelector(".h-nav");
    const navButton = document.querySelector(".nav-btn");
    const img = document.querySelector(".s1 img");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        navButton.innerHTML = "☰";
        document.body.style.backgroundColor = "#fff";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.width = img.width + "px";
        navLinks.style.height = img.height + "px";
        navLinks.style.left = `calc(50% - ${img.width / 2}px)`;
        navButton.innerHTML = "⨉";
        document.body.style.backgroundColor = "#bbb";
    }
}

function handleVisible(photoId) {
    const dotId = 'dot' + photoId.at(-1);
    const dot = document.getElementById(dotId);
    dot.style.backgroundColor = "hsl(12, 88%, 59%)";
}
function handleInvisible(photoId) {
    const dotId = 'dot' + photoId.at(-1);
    const dot = document.getElementById(dotId);
    dot.style.backgroundColor = "white";
}
const photoIds = ['photo1', 'photo2', 'photo3', 'photo4'];
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
photoIds.forEach(photoId => {
    const targetPhoto = document.getElementById(photoId);
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                handleVisible(photoId);
            } else {
                handleInvisible(photoId);
            }
        });
    }, options);
    observer.observe(targetPhoto);
});

function validateForm(event) {
    event.preventDefault();
    const input = document.querySelector('.email');
    const err = document.querySelector('.invalid');
    const form = document.querySelector('form');
    if (isSmallScreen()) {
        if (input.value.trim() === '') {
            err.style.display = 'block';
            err.style.top = '-30px';
            form.style.paddingBottom = '34px';
        } else if (!isValidEmail(input.value.trim())) {
            input.style.color = '#f7401f';
            err.style.display = 'block';
            err.style.top = '-30px';
            form.style.paddingBottom = '34px';
        }
        else {
            err.style.display = 'none';
            input.style.color = '#999';
            form.style.paddingBottom = '50px';
        }
    } else {
        if (input.value.trim() === '') {
            err.style.display = 'block';
        } else if (!isValidEmail(input.value.trim())) {
            err.style.display = 'block';
            input.style.color = '#f7401f';
        }
        else {
            err.style.display = 'none';
            input.style.color = '#999';
        }
    }
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isSmallScreen() {
    return window.matchMedia("(max-width: 480px)").matches;
}