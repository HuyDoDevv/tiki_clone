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

let currentPage = 1;
let totalTranslateX = 0;

function scrollTopDeal(direction) {
  const list = document.querySelector('.top__cheap-list');
  const slides = document.querySelectorAll('.top__cheap-item');
  const btnLeft = document.querySelector('.top__cheap-btn--left');
  const btnRight = document.querySelector('.top__cheap-btn--right');
  const pages = Math.ceil(slides.length / 6);

  totalTranslateX += direction === 'next' ? -100 : 100;
  currentPage += direction === 'next' ? 1 : -1;

  list.style.transition = "0.5s ease";
  list.style.transform = `translateX(${totalTranslateX}%)`;

  btnLeft.style.display = currentPage === 1 ? 'none' : 'block';
  btnRight.style.display = currentPage === pages ? 'none' : 'block';
}

