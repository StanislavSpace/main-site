
// Слайдер
let slide = 0;
let amount = document.querySelectorAll('.slider-js-inner img').length;
let images = document.querySelector('.images');

function forward() {
  slide++;
  if (slide === amount)
    slide = 0;
  
  images.style.transform = `translateX(-${slide * 100}%)`;
}

function back() {
  slide--;
  if (slide === -1)
    slide = amount - 1;
  
  images.style.transform = `translateX(-${slide * 100}%)`;
}
