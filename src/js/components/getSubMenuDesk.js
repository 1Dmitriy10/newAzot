export function getSubMenuDesk(){
let menuItems = document.querySelectorAll(".nav .nav-list .nav-item");
let arrItems = []
let subMenu = {}
let navItem = {}
// let wrap = document.querySelector(".sub-menu-wrap");

if(menuItems){
menuItems.forEach(el => {
    if(el.querySelector(".sub-menu")){
        arrItems.push(el);
    }
});

arrItems.forEach(el=>{
    console.log(el)
    el.addEventListener("mouseenter", cloneSubMenu)
    el.addEventListener("mouseleave", test)
    
})
// wrap.addEventListener("mouseleave", test)
}

function cloneSubMenu() {
    let test = document.querySelector(".nav .nav-list");
    test.classList.add("show")
     
    // navItem = event.target
    // subMenu = event.target.querySelector(".sub-menu")
    // let item = subMenu

    // if(item) {
    // wrap.innerHTML = '';
    // wrap.insertAdjacentElement("beforeend",item);
   
    // }

    
}

function test() {
    let test = document.querySelector(".nav .nav-list");
    test.classList.remove("show")
    // console.log("ok")
    //  navItem.insertAdjacentElement("beforeend",subMenu);
    }
};
getSubMenuDesk();