// Wariant W08 – dane do kartkówki 1
const aplikacje = [
    "Spotify",
    "Instagram",
    "WhatsApp",
    "Duolingo",
    "Revolut"
];

document.getElementById('naglowek').textContent = `Liczba aplikacji: ${aplikacje.length}`;
document.getElementById('formularz').addEventListener('submit', function(e) {
    e.preventDefault();
    const numerInput = document.getElementById('numerApp').value;
    const indeks = parseInt(numerInput, 10) - 1;
    const komunikatBledu = document.getElementById('komunikatBledu');
    const wynikDiv = document.getElementById('wynik');

    if (indeks >= 0 && indeks < aplikacje.length) {
        komunikatBledu.classList.add('d-none');
        wynikDiv.textContent = `Wybrana aplikacja: ${aplikacje[indeks]}`;
        wynikDiv.classList.remove('d-none');
    } else {
        komunikatBledu.classList.remove('d-none');
        wynikDiv.classList.add('d-none');
    }
});