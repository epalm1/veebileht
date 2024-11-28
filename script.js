/**
 * Autor: ChatGPT (OpenAI)
 * Loodud: 28.11.2024
 * Kirjeldus: kood loob nupu, mis viib tagasi lehekülje algusesse
 */

// Nupu element
const keriÜles = document.getElementById('keriÜles');

// Kuula kerimisüritust, et näidata või peita nuppu
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Näita nuppu, kui keritud üle 300px
        keriÜles.style.display = 'block';
    } else {
        keriÜles.style.display = 'none';
    }
});

// Kuula klikki nupul ja kerige ülaossa
keriÜles.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Sujuv kerimine
    });
});
