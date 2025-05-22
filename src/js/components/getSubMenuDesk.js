export function getSubMenuDesk(){
let menuItems = document.querySelectorAll(".nav .nav-list .nav-item");
let arrItems = []
let subMenu = {}
let navItem = {}
let wrap = document.querySelector(".sub-menu-wrap");
let body = document.querySelector("body")

body.addEventListener("click", function(){
    if(event.target.classList !="nav-item" && event.target.classList !="sub-menu" && event.target.classList !="nav-link"){
    wrap.classList.remove("show")
    console.log(event.target.classList.contains("nav-item"))
   }
})

if(menuItems){
menuItems.forEach(el => {
    if(el.querySelector(".sub-menu")){
        arrItems.push(el);
    }
});

arrItems.forEach(el=>{
    console.log(el)
    el.addEventListener("click", cloneSubMenu)
    // el.addEventListener("mouseleave", test)
    
})
// wrap.addEventListener("mouseleave", test)
}

function cloneSubMenu() {
    let test = document.querySelector(".nav .nav-list");
    // test.classList.add("show")
     
    let navItemLeft = event.currentTarget.getBoundingClientRect().left
    subMenu = event.currentTarget.querySelector(".sub-menu")
    let item = subMenu.cloneNode(true)
console.log(navItemLeft)
    if(item) {
    wrap.innerHTML = '';
    wrap.insertAdjacentElement("beforeend",item);
    wrap.style.left = `${navItemLeft}px`
    wrap.classList.add("show")
    }

    
}

function test() {
    let test = document.querySelector(".nav .nav-list");
    test.classList.remove("show")
    // console.log("ok")
     navItem.insertAdjacentElement("beforeend",subMenu);
    }
};
getSubMenuDesk();