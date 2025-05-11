import { event } from "jquery";

export function mobMenuSlider(){
    let mobSlider = document.querySelector(".mob-slider");
    let width = mobSlider.clientWidth
    let btnCatalog = document.querySelector(".mob-nav-catalog__btn");
    let sliderTrack = document.querySelector(".mob-slider-wrap");
    let countSlide = sliderTrack.querySelectorAll(".mob-slide")
    let position = 0;
    let closeBtn = document.querySelectorAll(".navi-box__close");
    let backBtn = document.querySelectorAll(".navi-box__arrow");
    let btnOpenMenuStiky = document.querySelector(".menu-open_second-sticky");
    let arrMenuItems = document.querySelectorAll(".mob-nav-list-products .mob-nav-item")
    let thirtSlide = document.querySelector(".mob-menu-thirt-slide")
    let thirtSlideWrap = thirtSlide.querySelector(".mob-menu-thirt-slide__munu-wrap")
 
    
    btnOpenMenuStiky.addEventListener("click", function(event) {
        let mob = document.querySelector(".mob-nav")
        mob.classList.add("active")
    })

    sliderTrack.style.width = `${width * 3}px`;
    countSlide.forEach(el=>{
        el.style.minWidth = `${width}px`;
    })

    btnCatalog.addEventListener("click", nextSlide)

    closeBtn.forEach(el=>{
        el.addEventListener("click", closeMenu)
        
    })

    backBtn.forEach(el=>{
        el.addEventListener("click", prevSlide)
    })

    arrMenuItems.forEach(el=>{
        if(el.querySelector(".sub-menu")) {
            el.addEventListener("click", function(event){
                getThirtSlide(event)
                nextSlide()
            })
        }
    })

    function nextSlide() {
        sliderTrack.style.transform = `translateX(${position-width}px)`
        position = position-width

    }

    function prevSlide() {
        if(position != 0) {
            sliderTrack.style.transform = `translateX(${position+width}px)`
            position = position+width
        }

    }

    function closeMenu() {
        let exit = document.querySelector('.mob-menu-close');
        exit.click();
        position = 0
        sliderTrack.style.transform = `translateX(${position})`
    }

    function getThirtSlide(event) {
        let menu = event.currentTarget.querySelector(".sub-menu");
        let menuСlone = menu.cloneNode(true);
        thirtSlideWrap.innerHTML="";
        thirtSlideWrap.insertAdjacentElement("beforeend", menuСlone)

    }
    
};
mobMenuSlider();