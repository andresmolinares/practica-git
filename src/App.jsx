import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';

import { Buscador } from './components/Buscador';
import { EmojiList } from './components/EmojiList';
import Pagination from 'react-js-pagination';
import { TituloEncabezado } from './components/Titulo';

let LIMIT = 24;
let URL = `http://localhost:3001/emojis?_limit=${LIMIT}`;

function App() {
  let [emojis, setEmojis] = useState([]);
  let [busqueda, setBusqueda] = useState('');
  let [pagina, setPagina] = useState(1);

  // Este filter solo busca los elementos que estan actualmente en la pagina activa
  let emojisFilters = emojis.filter((emoji) => {
    let emojiTitleLowerCase = emoji.title.toLowerCase();
    let busquedaLowerCase = busqueda.toLowerCase();

    if (emojiTitleLowerCase.includes(busquedaLowerCase)) {
      return emoji;
    }
  });

  useEffect(() => {
    /*  
   async function obtenerDatos() {
      let respuesta = await fetch(URL);
      let datos = await respuesta.json();
      setEmojis(datos);
    } 
    
    obtenerDatos();
    */
    fetch(`${URL}&_page=${pagina}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setEmojis(datos);
      });
  }, [pagina]);

  function actualizarInput(evento) {
    let entradaTeclado = evento.target.value;
    setBusqueda(entradaTeclado);
  }

  function handlePageChange(nuevaPagina) {
    setPagina(nuevaPagina);
  }

  return (
    <div className='container'>
      <TituloEncabezado />

      <Buscador valorInput={busqueda} onInputChange={actualizarInput} />

      <EmojiList datos={busqueda ? emojisFilters : emojis} />

      <div className='d-flex justify-content-center'>
        <Pagination
          itemClass='page-item'
          linkClass='page-link'
          activePage={pagina}
          itemsCountPerPage={LIMIT}
          totalItemsCount={1820}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
