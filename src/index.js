const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__nav-btn');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function () {
    navIcon.classList.remove('nav-icon--active');
    nav.classList.remove('header__top-row--mobile');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('active');
});