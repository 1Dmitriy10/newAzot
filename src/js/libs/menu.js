import { Menu } from "../vendor.js"

let menu = new Menu({
    /*Класс меню */
    class: 'nav-list',
    /*Разрешение при котором меню исчезнет*/
    mediaOff: "100px",
    /*Добавление не помещающихся элементов меню в специальный контейнер*/
    opacityItem: false,
    /*Обертка для подменю скрытых элементов
    Разместить в нужном месте <div class="sub-menu-wrap"></div>*/
    solutionForSubmenu: false,
    /*Когда скрыть меню*/
    mediaHidden: "100px",
    /*Стрелка для выпадающего меню (svg/i)*/
    arrowSubmenu: `
            <svg width="10" height="10" viewBox="0 0 52 27"         fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1.20711 1.70711L25.2929 25.7929C25.6834 26.1834 26.3166 26.1834 26.7071 25.7929L50.7929 1.70711C51.4229 1.07714 50.9767 1.57952e-06 50.0858 1.57952e-06H1.91422C1.02331 1.57952e-06 0.577144 1.07714 1.20711 1.70711Z" fill="black"/>
             </svg>
`
})

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