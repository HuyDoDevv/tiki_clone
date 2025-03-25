const list = document.querySelector('.slideshow__list');
const slides = document.querySelectorAll('.slideshow__item');
const dots = document.querySelectorAll('.pagation__dot');
let index = 1;

// Clone và set vị trí ban đầu
list.append(slides[0].cloneNode(true));
list.prepend(slides[slides.length - 1].cloneNode(true));
list.style.transform = `translateX(-100%)`;

const updateSlide = () => {
  list.style.transition = "0.5s ease";
  list.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('pagation__dot--active', i === (index - 1 + slides.length) % slides.length));
};

// Reset khi qua clone
list.addEventListener('transitionend', () => {
  if (index >= slides.length + 1) index = 1;
  if (index <= 0) index = slides.length;
  list.style.transition = "none";
  list.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.slideshow__action-left').onclick = () => updateSlide(--index);
document.querySelector('.slideshow__action-right').onclick = () => updateSlide(++index);

// Chấm trang
dots.forEach((dot, i) => dot.onclick = () => updateSlide(index = i + 1));

// Tự động chạy
setInterval(() => updateSlide(++index), 3000);
updateSlide();

let currentPageTopDeal = 1;
let totalTranslateXTopDeal = 0;

function scrollTopDeal(direction) {
  const list = document.querySelector('.top__cheap-list');
  const slides = document.querySelectorAll('.top__cheap-item');
  const btnLeft = document.querySelector('.top__cheap-btn--left');
  const btnRight = document.querySelector('.top__cheap-btn--right');
  const pages = Math.ceil(slides.length / 6);

  totalTranslateXTopDeal += direction === 'next' ? -100 : 100;
  currentPageTopDeal += direction === 'next' ? 1 : -1;

  list.style.transition = "0.5s ease";
  list.style.transform = `translateX(${totalTranslateXTopDeal}%)`;

  btnLeft.style.display = currentPageTopDeal === 1 ? 'none' : 'block';
  btnRight.style.display = currentPageTopDeal === pages ? 'none' : 'block';
}



let currentPageFlashSale = 1;
let totalTranslateXFlashSale = 0;

function scrollFlashSale (direction) {
  const list = document.querySelector('.flash__sale-list');
  const slides = document.querySelectorAll('.flash__sale-item');
  const btnLeft = document.querySelector('.flash__sale-btn--left');
  const btnRight = document.querySelector('.flash__sale-btn--right');
  const pages = Math.ceil(slides.length / 6);

  totalTranslateXFlashSale += direction === 'next' ? -100 : 100;
  currentPageFlashSale += direction === 'next' ? 1 : -1;

  list.style.transition = "0.5s ease";
  list.style.transform = `translateX(${totalTranslateXFlashSale}%)`;

  btnLeft.style.display = currentPageFlashSale === 1 ? 'none' : 'block';
  btnRight.style.display = currentPageFlashSale === pages ? 'none' : 'block';
}


let currentPageFamousBrand = 1;
let totalTranslateXFamousBrand = 0;
let countSlides = document.querySelectorAll('.famous__brand-item').length;

function scrollFamousBrand(direction) {
  let translateStep = 0;
  const list = document.querySelector('.famous__brand-list');
  const slides = document.querySelectorAll('.famous__brand-item');
  const totalSlides = slides.length;
  const btnLeft = document.querySelector('.famous__brand-btn--left');
  const btnRight = document.querySelector('.famous__brand-btn--right');
  const itemOfPage = 6;
  const pages = Math.ceil(slides.length / itemOfPage);

  if (direction == 'next') {
    translateStep = (countSlides - itemOfPage) < itemOfPage ? (100 / itemOfPage) * Math.abs(countSlides - itemOfPage) : 100;
    countSlides -= (countSlides - itemOfPage) < itemOfPage ? Math.abs(countSlides - itemOfPage) : itemOfPage;
    totalTranslateXFamousBrand += -translateStep;
    currentPageFamousBrand += 1;
  } else {
    translateStep = (countSlides + itemOfPage) < totalSlides ? 100 : (100 / itemOfPage) * Math.abs(totalSlides - countSlides);
    countSlides += (countSlides + itemOfPage) < totalSlides ? itemOfPage : Math.abs(totalSlides - countSlides);
    totalTranslateXFamousBrand += translateStep;
    currentPageFamousBrand += -1;
  }

  list.style.transition = "0.5s ease";
  list.style.transform = `translateX(${totalTranslateXFamousBrand}%)`;
  btnLeft.style.display = currentPageFamousBrand === 1 ? 'none' : 'block';
  btnRight.style.display = currentPageFamousBrand === pages ? 'none' : 'block';
}
