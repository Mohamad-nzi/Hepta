var headerFix = document.querySelector(".header")
var hamMenu = document.querySelector(".menu");
var showNavMenu = document.querySelector(".nav-menu")
hamMenu.addEventListener('click', function(e) {
    headerFix.classList.toggle('fix');
    hamMenu.classList.toggle('active');
    showNavMenu.classList.toggle('show');
})