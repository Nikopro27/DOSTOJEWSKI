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


}

export default App
