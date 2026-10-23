import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import dane from './wariant08.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //Dodanie gatunów 
  const gatunki = ['Wszystkie', 'Gitarowe', 'Taneczne', 'Klubowe'];
  const pierwszaZListy = 'Gitarowe'; //Pierwszy z listy wartosc

  const [wybranyGatunek, setWybranyGatunek] = useState('Wszystkie');
  const [rosnaco, setRosnaco] = useState(true);
  const [wybranyElement, setWybranyElement] = useState(null);

  // FILTROWANIE Z POLECENIA
  let przefiltrowanaLista = dane.filter((przedmiot) => {
    if (wybranyGatunek === 'Wszystkie')
      return true;
    return przedmiot.gatunek === wybranyGatunek;
  });

  //Dodanie funkcji sortowania 
  przefiltrowanaLista.sort((a, b) => {
    return rosnaco ? a.ilosc - b.ilosc : b.ilosc - a.ilosc;
  })

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Sprawdzian Nikodem P</h1>

      {wybranyElement ? (
        <div className="card p-4 shadow-sm">
          <h2>Szczegóły elementu</h2>
          <p><strong>id: </strong> {wybranyElement.id}</p>
          <p><strong>produkt: </strong> {wybranyElement.produkt}</p>
          <p><strong>gatunek: </strong> {wybranyElement.gatunek}</p>
          <p><strong>ilosc: </strong> {wybranyElement.ilosc}</p>
          <p><strong>nowosci: </strong> {wybranyElement.nowosc ? 'JEST ' : 'NIE JEST ELEMENT'}</p>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setWybranyElement(null)}
          >
            POWRÓĆ
          </button>
        </div>
      ) : (
        // GŁÓWNY WIDOK 
        <div>
          <div className="row mb-4 align-items-center">
            <div className="col-md-6">
              <label className="form-label"><strong>Filtruj po gatunku:</strong></label>
              <select
                className="form-select"
                value={wybranyGatunek}
                onChange={(e) => setWybranyGatunek(e.target.value)}
              >
                {gatunki.map((g, index) => (
                  <option key={index} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6 text-end mt-3 mt-md-0">
              <button
                className="btn btn-primary"
                onClick={() => setRosnaco(!rosnaco)}
              >
                Sortuj po ilości: {rosnaco ? 'Rosnąco' : 'Malejąco'}
              </button>
            </div>
          </div>

          {/* LISTA KART */}
          <div className="row">
            {przefiltrowanaLista.map((item) => {

              const czyPierwszy = item.gatunek === pierwszaZListy;
              const borderClass = czyPierwszy ? 'border-primary border-3 shadow' : '';

              return (
                <div key={item.id} className="col-md-4 mb-3">
                  <div className={`card h-100 ${borderClass}`}>
                    <div className="card-body">
                      <h5 className="card-title">{item.produkt}</h5>
                      <p className="card-text mb-1"><strong>Gatunek:</strong> {item.gatunek}</p>
                      <p className="card-text mb-1"><strong>Ilosc:</strong> {item.ilosc}</p>
                      <p className="card-text mb-3">
                        <strong>Nowosci :</strong> {item.nowosc ? 'JEST' : 'NIE JEST'}
                      </p>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setWybranyElement(item)}
                      >
                        Info
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;