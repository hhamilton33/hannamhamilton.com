const menu_icon = document.querySelector('.menu-icon');
// const add_icon = document.querySelector('.add-icon');
const mobile_menu = document.querySelector('#mobile-nav');

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

// add_icon.addEventListener('click', () => {
//     add_icon.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// })

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    nav_menu.classList.remove('active');
    mobile_menu.classList.remove('active');
}))

// function show_menu_open() {
//     menu_icon.style.display = "block";
//     add_icon.style.display = "none";
// }

// function show_menu_close() {
//     add_icon.style.display = "block";
//     menu_icon.style.display = "none";
// }


