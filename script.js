function updateDateTime() {
  const dt = new Date();
  document.getElementById("datetime").innerText = dt.toLocaleString("id-ID");
}

// Slider otomatis
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.remove("hidden");
}

setInterval(showSlides, 3000);
