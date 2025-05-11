export function stickyHeader() {
let btnOpen = document.querySelector('#sticky-menu-open');
let menu = document.querySelector('.sticky__nav-list');
let stickyHeader = document.querySelector('.sticky-header');

window.addEventListener("scroll", getStickyHeader)

btnOpen.addEventListener("click", function() {
let svgOpen = document.querySelector('.menu-open-svg-open')
let svgClose = document.querySelector('.menu-open-svg-close')  

    event.target.classList.toggle("active");
    menu.classList.toggle("active");
    svgOpen.classList.toggle("hidden");
    svgClose.classList.toggle("show");


})

function getStickyHeader() {
    let x = pageYOffset;
    if(x > 150) {
        stickyHeader.classList.add("show")
    }else{
        stickyHeader.classList.remove("show")
    }
}
};
stickyHeader();