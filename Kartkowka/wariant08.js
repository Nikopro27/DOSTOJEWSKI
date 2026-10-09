// Wariant W08 — dane do kartkówki 1
// Podejście do formularza: useState (pola kontrolowane)
//
// Gotowe teksty do wklejenia w komponencie:
// - Nagłówek:          `Liczba aplikacji: {aplikacje.length}`
// - Etykieta pola:      "Numer aplikacji:"
// - Komunikat błędu:    "Nieprawidłowy numer aplikacji"
// - Przycisk:           "Zatwierdź wybór" (ten sam we wszystkich wariantach)

const aplikacje = [
  "Spotify",
  "Instagram",
  "WhatsApp",
  "Duolingo",
  "Revolut",
];

document.getElementById('naglowek').textContent = `Liczba aplikacji: ${aplikacje.length}`;

document.getElementById('formularz').addEventListener('submit', function(e) {
   
  e.preventDefault();
});

document.getElementById('numerApp').addEventListener('input', function(e) {
  const numer = parseInt(e.target.value);
  if (numer >= 1 && numer <= aplikacje.length) {
    document.getElementById('komunikatBleduu').classList.add('d-none');
  } else {
    document.getElementById('komunikatBleduu').classList.remove('d-none');
  }
});

export default aplikacje;
