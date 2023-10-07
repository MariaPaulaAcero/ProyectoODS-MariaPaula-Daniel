// script.js
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

function nextImage() {
    images[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = '1';
}

setInterval(nextImage, 3000);
