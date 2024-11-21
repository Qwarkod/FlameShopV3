document.getElementById('buy').addEventListener('click', function(e) {
    e.preventDefault(); // Скасувати стандартну поведінку форми
    window.location.href = 'https://stream-lizard-golf.glitch.me/?product=5&productName=Безпровідна-зарядка-30w'; // Перенаправлення на інший сайт
    console.log('YES');
});