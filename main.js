/// Change Navbar Styles on Scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

/// Show Hide Faq Answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        ///Change Icon

        const icon = faq.querySelector('.faqs_icon i')
        if (icon.className === 'uil uil-plus-circle') {
            icon.className === "uil uil-minus-circle";
        } else {
            icon.className = "uil uil-minus-circle";
        }
    })
})

// SHOW/HIDE NAV MENU
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
// CLOSE NAV MENU
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)
