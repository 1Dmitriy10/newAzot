import { Menu } from "../vendor.js"

// let menu = new Menu({
//     /*Класс меню */
//     class: 'nav-list',
//     /*Разрешение при котором меню исчезнет*/
//     mediaOff: "100px",
//     /*Добавление не помещающихся элементов меню в специальный контейнер*/
//     opacityItem: false,
//     /*Обертка для подменю скрытых элементов
//     Разместить в нужном месте <div class="sub-menu-wrap"></div>*/
//     solutionForSubmenu: false,
//     /*Когда скрыть меню*/
//     mediaHidden: "100px",
//     /*Стрелка для выпадающего меню (svg/i)*/
//     arrowSubmenu: `
            
// `
// })

let topMenu = new Menu({
    /*Класс меню */
    class: 'top-nav-list',
    /*Разрешение при котором меню исчезнет*/
    mediaOff: "400px",
    /*Добавление не помещающихся элементов меню в специальный контейнер*/
    opacityItem: true,
    /*Обертка для подменю скрытых элементов
    Разместить в нужном месте <div class="sub-menu-wrap"></div>*/
    solutionForSubmenu: true,
    /*Когда скрыть меню*/
    mediaHidden: "700px",
    /*Стрелка для выпадающего меню (svg/i)*/
    arrowSubmenu: `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66634 5.33334L7.99967 10.6667L13.333 5.33334" stroke="#979797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
`
})