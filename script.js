// script.js
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

function nextImage() {
    images[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = '1';
}

setInterval(nextImage, 3000);

// Agrega la funcionalidad de agrandar imágenes al pasar el cursor
const imagenes = document.querySelectorAll('.image-container img');

imagenes.forEach((imagen) => {
  imagen.addEventListener('mouseenter', () => {
    imagen.classList.add('imagen-ampliada');
  });

  imagen.addEventListener('mouseleave', () => {
    imagen.classList.remove('imagen-ampliada');
  });
});