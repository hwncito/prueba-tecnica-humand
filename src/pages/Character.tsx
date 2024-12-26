import { useEffect, useState } from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';
import Details from '../components/Details';

function Character() {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);

  const fetchCharacterDetails = async () => {
    if (!id) return;
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacterDetails(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [id]);

  return (
    <div>
      <Link to={'/'}>
        <button className="rounded-md bg-gray-200 px-4 py-2 m-6">
          Back
        </button>
      </Link>
      <h1 className="text-3xl my-20 font-bold text-center">Character Page</h1>
      <div className="flex items-center justify-center">
        {characterDetails && <Details characterDetails={characterDetails} />}
      </div>
    </div>
  );
}

export default Character;
