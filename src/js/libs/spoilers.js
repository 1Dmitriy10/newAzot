//   ===================================================Спойлеры=======================================================
{/* <details>
    <summary class="_spoiler-js">Заголовок 1</summary>
        <div class="spoiler-content">
            Контент 1
        </div>
</details> */}
// -----------------------------------------------------------------------------------------------

import { Spoilers } from "../vendor.js";



const faqSpoiler = new Spoilers({
    item: 'faq-spoiler-js', /*класс споилера*/
    timeAnimation: 300, /*время анимации*/
    accordion: true,    /*Режим аккордиона*/
    firstOpen: true    /*Первый элемент всегда открыт*/
})

const profileSpoiler = new Spoilers({
    item: 'profile_spoiler-js', /*класс споилера*/
    timeAnimation: 300, /*время анимации*/
    accordion: true,    /*Режим аккордиона*/
    firstOpen: true    /*Первый элемент всегда открыт*/
})



