const pricePerMeter = {
    1: 99,
    2: 115,
    3: 130,
    4: 145, 
    5: 160,
    6: 190,
    7: 250,
  };
  
  let lengthString = '';
  
  let colorString = ''; 
  let selectedColor = ''; 
  
  const basePrice = 200;
  const lengthOptions = document.querySelectorAll('.length-option');
  const slider = document.querySelector('.slider');
  const priceDisplay = document.getElementById('priceDisplay');
  
  const colorOptions = document.querySelectorAll('.color-option');
  
  colorOptions.forEach(option => {
      option.addEventListener('click', () => {
          colorOptions.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
          
          selectedColor = option.getAttribute('data-color');
          console.log("Selected Color: ", selectedColor); 
      });
  });
  
  
  
  let selectedLength = 1;
  let selectedPrice = basePrice;
  
  // Функція для оновлення ціни
  function updatePrice(length) {
    selectedPrice = pricePerMeter[length] || basePrice + (length - 1) * 50;
    priceDisplay.textContent = `${selectedPrice} ₴`;
  }
  
  // Обробник для вибору довжини
  lengthOptions.forEach(option => {
    option.addEventListener('click', () => {
        lengthOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        
        selectedLength = parseInt(option.getAttribute('data-length')) || 1;
        updatePrice(selectedLength);
    });
  });
  
  updatePrice(selectedLength);
  
  // Слайдер зображень
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  showSlide(currentIndex);
  
  
  
  
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
  
  
  
  
  
  // Показуємо модальне вікно при натисканні на "Купити"
  buyButton.addEventListener('click', (e) => {
      e.preventDefault();
  
      if (selectedLength === 1) {
          lengthString = '1 meter 30 leds'; // Встановлюємо текст для 1 метра
      } else {
          lengthString = `${selectedLength}`; // Додаємо текст для інших варіантів
      }
  
  
      if (selectedColor === '') {
        colorString = 'Червоний🟥'; // Встановлюємо текст для 1 метра
      } else {
          colorString = `${selectedColor}`; // Додаємо текст для інших варіантів
      }
  
      document.getElementById('productLength').innerText = lengthString;
      document.getElementById('productColor').innerText = colorString;
      document.getElementById('productPrice').innerText = selectedPrice;
  
      modal.style.display = 'flex'; // показуємо вікно тільки при натисканні
      modal.style.visibility = 'visible'
  });
  
  // Закриваємо модальне вікно при натисканні на кнопку закриття
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
    
    window.location.href = `http://localhost:3000/?product=1&productName=Герлянда-на-трьох-батарейках&Length=${lengthString}&Price=${selectedPrice}&Color=${colorString}`;
  
  
  });
  