const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Troca o ícone do sol para a lua e vice-versa
    if (body.classList.contains('dark-theme')) {
        toggleButton.src = './imgs/icons/sun.png';  // Imagem do sol para o modo escuro
        toggleButton.alt = "Modo claro";  // Texto alternativo
    } else {
        toggleButton.src = './imgs/icons/moon.png';  // Imagem da lua para o modo claro
        toggleButton.alt = "Modo escuro";  // Texto alternativo
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.display = 'block';
});

document.querySelector('.next').addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
});
