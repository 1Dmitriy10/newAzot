export function modalSearch() {
let search = document.querySelector(".header__search>input");
let stickyHeader = document.querySelector(".sticky-header__search>input");

search.addEventListener("focus", getModal)
stickyHeader.addEventListener("focus", getStickyModal)


function getModal() {
    let modalSearch = document.querySelector(".modal-search");
    let blackout = document.querySelector(".blackout");

    modalSearch.classList.add("active");
    blackout.classList.add("show");

    let body = document.querySelector("body");
    body.addEventListener("click",function() {
        if(event.target.classList.contains("modal-search") || event.target == search) {

        }else{
            modalSearch.classList.remove("active")
            blackout.classList.remove("show");
        }
    })
}

function getStickyModal() {
    let modalSearch = document.querySelector(".sticky-modal-search");
    let blackout = document.querySelector(".blackout");

    modalSearch.classList.add("active");
    blackout.classList.add("show");

    let body = document.querySelector("body");
    body.addEventListener("click",function() {
        if(event.target.classList.contains("sticky-modal-search") || event.target == stickyHeader) {

        }else{
            modalSearch.classList.remove("active")
            blackout.classList.remove("show");
        }
    })
}
};
modalSearch();