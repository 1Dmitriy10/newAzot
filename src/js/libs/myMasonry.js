/*
    <div class="_mansonry-js">
        <div ></div>
        <div ></div>
        <div ></div>
    </div>
*/

import { Masonry } from "../vendor/masonry.js";

const myMasonry = new Masonry({
    class: 'masonry', /*класс споилера*/
    cols: 2, /*колличество колонок*/
    rowGap: 16,    /*отступ по горизонтали*/
    colGap: 16,   /*отступ по вертикали*/
    breakpoints: { /*Брейкпоинты / кол-во колонок*/
        "1220": 1,
        // "768": 2,
        // "576": 1,
    }
})