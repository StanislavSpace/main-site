new Swiper('.slider__swiper', {
    // Стрелки
    navigation: {
        nextEl: '.slider__swiper--button__next',
        prevEl: '.slider__swiper--button__prev'
    },
    // Включение/отключение перетаскивания на пк
    simulateTouch: false,
    // Чуствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: false,
    // Переключение при клике на слайд
    slideToClickedSlide: false,
    // Управление клавиатурой
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // Включить/выключить управление клавишами PageUp, PageDown
        pageUpDown: false,
    },
    // Управление колесом мыши
    mousewheel: {
        // Чуствительность колеса мыши
        sensivity: 1,
        // Класс объекта на котором будет срабатывать прокрутка мышью
        eventsTarget: ".slider__swiper",
    },
    // Автовысота
    autoHeight: true,
    // Количество слайдов для показа
    slidesPerView: 1,
     // Количество пролистываемых слайдов
    slidersPerGroup: 1, 
    // Активный слайд по центру
    centeredSlides: true,
    // Стартовый слайд
    initialSlide: 0,
    // Мультирядность
    slidesPerColumn: 1,
    // Бесконечный слайдер
    loop: true,
    // Кол-во  дублирующих слайдов
    loopedSlides: 0,
    // Свободный режим
    freeMode: false,
    // Автопрокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 5000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения 
        disableOnInteraction: true,
    },
    // Скорость
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // Вертикальный/горизонтальный слайдер
    direction: 'horizontal',
});