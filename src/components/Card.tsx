import { Link } from 'react-router-dom';
import { Character } from '../interfaces/character';

interface CardProps {
  character: Character;
}

export default function Card({ character }: CardProps) {

  return (
    <Link to={`/${character.id}`} className='flex flex-col w-[240px] rounded-md p-4 bg-gray-100 shadow-md'>
      <img className='rounded-md' src={character.image} alt="image of the character" />
      <h3 className='font-semibold text-xl my-2'>{character.name}</h3>
      <p className='font-medium text-lg'>{character.species}</p>
    </Link>
  );
}
