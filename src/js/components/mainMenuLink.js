export function mainMenuLink(){
    let arrMenuLinks = document.querySelectorAll(".nav-list .nav-link");
    let arrItems = [];
    let count = 0;
    let item = {};

    arrMenuLinks.forEach(el=>{
        if(el.parentElement.querySelector(".sub-menu-container")) {
            // arrItems.push(el)
            el.addEventListener("click", ()=>{prevent(el)} )
        }
    })

    function prevent(el) {
        
        if(count == 0 && item != el) {
            event.preventDefault()
            item = el;
        }else{
            count++
        }
        
        
    }
};
mainMenuLink();