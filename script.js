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

 // Obtén todos los botones con la clase "btn btn-primary"
 const buttons = document.querySelectorAll(".btn.btn-primary");

 // Agrega un evento click a cada botón
 buttons.forEach(button => {
   button.addEventListener("click", function(event) {
     // Evita que el enlace se comporte como un enlace predeterminado
     event.preventDefault();

     // Encuentra el elemento "card-text" más cercano al botón que se ha hecho clic
     const cardText = this.closest(".card-body").querySelector(".card-text");

     // Verifica si el elemento "card-text" está oculto o visible
     if (cardText.style.display === "none" || cardText.style.display === "") {
       // Si está oculto, muéstralo
       cardText.style.display = "block";
     } else {
       // Si está visible, ocúltalo
       cardText.style.display = "none";
     }
   });
 });