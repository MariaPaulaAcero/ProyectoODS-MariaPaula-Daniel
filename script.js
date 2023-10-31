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

 const buttons = document.querySelectorAll(".btn-mas");

  buttons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      
      const cardText = this.closest(".card-body").querySelector(".card-text");
      
      if (cardText.style.display === "none" || cardText.style.display === "") {
        cardText.style.display = "block";
      } else {
        cardText.style.display = "none";
      }
      
      // Recalcular la altura de todas las tarjetas después de hacer clic en el botón
      const cards = document.querySelectorAll(".card");
      let maxHeight = 0;
      cards.forEach(card => {
        card.style.height = "auto"; // Restablecer la altura a automática
        const cardHeight = card.clientHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });
      cards.forEach(card => {
        card.style.height = maxHeight + "px"; // Establecer la misma altura para todas las tarjetas
      });
    });
  });