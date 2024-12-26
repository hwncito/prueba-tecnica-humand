import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Character } from '../interfaces/character';
import Card from '../components/Card';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState<string>('');

  const fetchCharacter = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  const filteredCharacters = filter
    ? characters.filter((char) => char.name.toLocaleLowerCase().includes(filter.toLowerCase()))
    : characters;

  return (
    <main className="App flex flex-col justify-center">
      <h1 className="text-3xl my-20 font-bold">
        Prueba Técnica Personajes Rick & Morty
      </h1>
      <div className="flex justify-center gap-5">
        <label className="text-xl" htmlFor="name">
          Busqueda por nombre:
        </label>
        <input
          className="bg-gray-300 rounded-md px-2"
          name="name"
          type="text"
          placeholder="Realizar Búsqueda"
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-20 justify-center">
        {filteredCharacters &&
          filteredCharacters.length > 0 &&
          filteredCharacters.map((char) => {
            return <Card key={char.id} character={char} />;
          })}
      </div>
    </main>
  );
}

export default App;
