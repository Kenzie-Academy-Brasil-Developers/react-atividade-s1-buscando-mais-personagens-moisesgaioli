import './App.css';
import Characters from './components/Characters';
import { useEffect, useState } from 'react';

function App() {

  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect (() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(response => setCharacterList(response.results))
    .catch(error => console.log(error));
  }, [page]);

  const previousPage = () => {
    if(page > 1) {
      setPage(page - 1)
    }
  }
  
  const nextPage = () => {
    if(page < 34) {
      setPage(page + 1)
    }
  }

  return (
      <main className="main-container">

        <Characters characterList={characterList} />

        <section className="btn-container">
          <button className="btn previous" onClick={previousPage} > Voltar </button>
          <button className="btn next" onClick={nextPage} > Avançar </button>
        </section>

      </main>
  );
}

export default App;
