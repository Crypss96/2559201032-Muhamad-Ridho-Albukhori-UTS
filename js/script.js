// Menu navigasi untuk tampilan layar kecil.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show-menu");
        const menuTerbuka = navigation.classList.contains("show-menu");
        menuButton.setAttribute("aria-expanded", String(menuTerbuka));
    });
}
