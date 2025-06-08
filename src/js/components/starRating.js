export function starRating() {
    let ratingBox = document.querySelector("#starRating");
    if(!ratingBox) return null
    let arrItems = ratingBox.querySelectorAll("svg");

    arrItems.forEach(el => {
     el.addEventListener("click", changeRating)   
    })

    function changeRating() {
        let item = event.currentTarget;
        item.classList.toggle("active")
    }
};
starRating();