import { Character } from '../interfaces/character';

interface DetailsProps {
  characterDetails: Character;
}

export default function Details({ characterDetails }: DetailsProps) {
  return (
    <div className="flex gap-20 bg-gray-300 rounded-xl mx-20 p-4">
      <div>
        <img
          className="rounded-xl"
          src={characterDetails.image}
          alt="image of the character"
        />
      </div>
      <div className="flex flex-col p-4 gap-1">
        <h2 className='text-xl font-bold'>{characterDetails.name}</h2>
        <p className='text-lg font-medium'>{characterDetails.species}</p>
        <p>{characterDetails.status}</p>
        {characterDetails.type && <p>{characterDetails.type}</p>}
        <p>{characterDetails.location.name}</p>
        <div className='overflow-y-hidden max-h-[150px]'>
        <ul>
          {characterDetails.episode.length > 0 &&
            characterDetails.episode.map((episode) => <li>{episode}</li>)}
        </ul>
        </div>
      </div>
    </div>
  );
}
