const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// cria as bolinhas
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if(i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(i){
  index = i;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

// autoplay igual Shopee
setInterval(() => {
  index = (index + 1) % slides.length;
  goToSlide(index);
}, 3000); // troca a cada 3 segundos
