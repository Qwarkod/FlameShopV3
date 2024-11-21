const pricePerMeter = {
  1: 99,
  2: 115,
  3: 130,
  4: 145, 
  5: 160,
  6: 190,
  7: 250,
  8: 300
};



const imagePaths = {
  'Теплий Білий': [
      '../material/shtoriger/shtoriger3.png'
  ],
  'Білий': [
    '../material/shtoriger/shtoriger2.png'
]
};

let lengthString = '';
let colorString = ''; 
let selectedColor = ''; 

const basePrice = 150;
const lengthOptions = document.querySelectorAll('.length-option');
const priceDisplay = document.getElementById('priceDisplay');




// Ініціалізація слайдів
const slides = document.querySelectorAll('.slide');
const colorOptions = document.querySelectorAll('.color-option');
const slider = document.querySelector('.slider');
let currentIndex = 0;

// Оновлюємо слайд
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Функція для переходу на наступний слайд
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}


function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    
    selectedColor = option.getAttribute('data-color');
    console.log("Selected Color: ", selectedColor);

    if (imagePaths[selectedColor]) {
      slides.forEach((slide, index) => {
        if (imagePaths[selectedColor][index]) {
          slide.src = imagePaths[selectedColor][index];
        }
      });
    }
    currentIndex = 0;
    showSlide(currentIndex);
  });
});
showSlide(currentIndex);




lengthOptions.forEach(option => {
  option.addEventListener('click', () => {

      lengthOptions.forEach(opt => opt.classList.remove('selected'));
      
      option.classList.add('selected');

      const selectedLength = option.getAttribute('data-length');
      selectedPrice = parseInt(option.getAttribute('data-price'), 10);
      
      priceDisplay.textContent = `${selectedPrice} ₴`;
  });
});




// Модальне вікно
const buyButton = document.querySelector('.buy-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

const productLengthElements = document.querySelectorAll('.length-option');
const productPriceElements = document.querySelector('productPrice')


// Відстежуємо зміну довжини
productLengthElements.forEach(option => {
    option.addEventListener('click', () => {
        selectedLength = option.getAttribute('data-length');
        productLengthElements.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});


let selectedLength = 1;
let selectedPrice = 150;


// Показуємо модальне вікно при натисканні на "Купити"
buyButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (selectedLength === 1) {
        lengthString = '1Mx3M'; // Встановлюємо текст для 1 метра
    } else {
        lengthString = `${selectedLength}`; // Додаємо текст для інших варіантів
    }


    if (selectedColor === '') {
      colorString = 'Теплий Білий'; 
    } else {
        colorString = `${selectedColor}`; // Додаємо текст для інших варіантів
    }

  

    document.getElementById('productLength').innerText = lengthString;
    document.getElementById('productColor').innerText = colorString;
    document.getElementById('productPrice').innerText = selectedPrice;

    modal.style.display = 'flex'; 
    modal.style.visibility = 'visible'
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриваємо модальне вікно при натисканні за його межами
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


window.addEventListener('load', () => {
  modal.style.display = 'none';
});









const endBuyButton = document.querySelector('.buy-button-modal');


endBuyButton.addEventListener('click', (e) => {
  e.preventDefault();

  window.location.href = `https://SITE/?product=1&productName=Герлянда-Штора&Length=${lengthString}&Price=${selectedPrice}&Color=${colorString}`;

  // ?product=1&productName=Герлянда-Штора&Length=5m&Price=200&Color=red
});
