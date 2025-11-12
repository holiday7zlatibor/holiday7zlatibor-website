/* ================= Slider galerija ================= */
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Automatski slider (opciono)
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

/* ================= Rezervacije forma ================= */
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Hvala! Vaš zahtev za rezervaciju je poslat. Uskoro ćemo vas kontaktirati.");
  // Ovde kasnije možeš dodati slanje na email ili bazu
});
