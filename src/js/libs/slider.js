// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";


const mainBannerSlider = new Swiper('.main-banner__slider', {
    // Стрелки
    navigation: {
        nextEl: '.main-banner__slider-next',
        prevEl: '.main-banner__slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
      },

    

    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    // breakpoints: {
    //     1220: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 15,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         spaceBetween: 15,
    //     }
    // },

});

const stocksPrevSlider = new Swiper('.stocks-prev__slider', {
    // Стрелки
    navigation: {
        nextEl: '.stocks-prev__slider-next',
        prevEl: '.stocks-prev__slider-prev',
    },

    

    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
    centeredSlides: true,
    initialSlide: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        }
    },

});

const pricesPrevSlider = new Swiper('.prices-prev__slider', {
    // Стрелки
    navigation: {
        nextEl: '.prices-prev__slider-next',
        prevEl: '.prices-prev__slider-prev',
    },

    

    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1.5,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1400: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    },

});



