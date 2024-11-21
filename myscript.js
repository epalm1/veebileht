const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showNextSlide() {
  // Eemalda aktiivsus praeguselt pildilt
  slides[currentSlide].classList.remove('active');
  
  // Liigu järgmisele pildile (või algusesse)
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Lisa aktiivsus uuele pildile
  slides[currentSlide].classList.add('active');
}

// Algata slaidishow
setInterval(showNextSlide, 5000); // Vaheta pilti iga 3 sekundi järel

// Alusta esimese pildiga
slides[currentSlide].classList.add('active');
