const menu_icon = document.querySelector('.menu-icon');
const mobile_menu = document.querySelector('#mobile-nav');

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    nav_menu.classList.remove('active');
    mobile_menu.classList.remove('active');
}))


