// JS scripts placed here
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#offcanvas-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("expanded");
        menuToggle.classList.toggle("active");
    });
});