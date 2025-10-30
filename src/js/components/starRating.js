export function starRating() {
    let ratingBoxes = document.querySelectorAll(".star-rating");
    if(!ratingBoxes.length) return null;
    
    ratingBoxes.forEach(ratingBox => {
        let arrItems = ratingBox.querySelectorAll("svg");
        let currentRating = 0;

        arrItems.forEach((el, index) => {
            el.addEventListener("click", () => changeRating(index, ratingBox));
            el.addEventListener("mouseenter", () => highlightStars(index, ratingBox));
            el.addEventListener("mouseleave", () => resetStars(ratingBox));
        });

        function changeRating(index, box) {
            currentRating = index + 1;
            updateStars(box);
            
        }

        function highlightStars(index, box) {
            let stars = box.querySelectorAll("svg");
            stars.forEach((star, i) => {
                if (i <= index) {
                    star.classList.add("hover");
                } else {
                    star.classList.remove("hover");
                }
            });
        }

        function resetStars(box) {
            let stars = box.querySelectorAll("svg");
            stars.forEach(star => {
                star.classList.remove("hover");
            });
            updateStars(box);
        }

        function updateStars(box) {
            let stars = box.querySelectorAll("svg");
            stars.forEach((star, i) => {
                if (i < currentRating) {
                    star.classList.add("active");
                } else {
                    star.classList.remove("active");
                }
            });
        }
    });
}
starRating();