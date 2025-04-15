export function stickyHeader() {
let btnOpen = document.querySelector('#sticky-menu-open');
let menu = document.querySelector('.sticky__nav-list');
let stickyHeader = document.querySelector('.sticky-header');

window.addEventListener("scroll", getStickyHeader)

btnOpen.addEventListener("click", function() {
    console.log("ok")
    event.target.classList.toggle("active");
    menu.classList.toggle("active");
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