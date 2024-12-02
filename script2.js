/**
 * Autor: w3schools
 * Kuupäev:30.11.2024
 * Kirjeldus: Esimene osa muudab lehekülje alajaotused sektsioonideks, mida saab avada nendele klikkimisega. Teine osa loob slideshow, mida saab veebileheküljel vaadata noolte abil.
 */


//Loob accordion elemendi
var acc = document.getElementsByClassName("accordion");
var i;

//Sektsiooni pealkirja klikkides avaneb vastav tekstiosa
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}

//Määrab slaidide indeksi, millele vastavalt muutub esitletav pilt
let slideIndex = 1;
showSlides(slideIndex);

// Eelmine/järgmine slaid
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Millist slaidi esitletakse
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Slaidi muutumine
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



