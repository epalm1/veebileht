/**
 * Autor: w3schools
 * Kirjeldus: Esimene osa muudab lehekülje alajaotused sektsioonideks, mida saab avada nendele klikkimisega. Teine osa loob slideshow, mida saab veebileheküljel vaadata noolte abil.
 */


//Otsib elemendid, mille class on accordion
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

//Määrab slaidi indeksile algväärtuse
let slideIndex = 1;
showSlides(slideIndex);

// Eelmise/järgmise slaidi kuvamine
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Funktsioon kindlale slaidile liikumiseks
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Slaidi muutumine
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}//Kui slaidiindeks ületab slaidie arvu, siis indeks omandab jälle algväärtuse ja liigub tagasi esimesele pildile
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



