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
      <h2 className="mb-4">Sprawdzian Nikodem P</h2>


      <div className="card p-4 shadow-sm">
        <p><strong>id: </strong> {wybranyElement.id}</p>
        <p><strong>produkt: </strong> {wybranyElement.produkt}</p>
        <p><strong>gatunek: </strong> {wybranyElement.gatunek}</p>
        <p><strong>ilosc: </strong> {wybranyElement.ilosc}</p>
        <p><strong>nowosci: </strong> {wybranyElement.nowosc ? 'JEST ' : 'NIE JEST'}</p>
        <button className="btn btn-secondary mt-3" onClick={() => setWybranyElement(null)}>
          POWRÓC</button>
      </div>


    </div>




  )


}

export default App
