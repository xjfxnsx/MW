import React from 'react';
import Toggle from '../components/Toggle';

interface CastProps {
  cast: Array<{ id: number; name: string; character: string }>;
}

const Cast: React.FC<CastProps> = ({ cast }) => {
  return (
    <Toggle title="Cast">
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li className="ListItem" key={actor.id}>
              {actor.name} as {actor.character}
            </li>
          ))}
        </ul>
      ) : (
        <div>Cast data not found.</div>
      )}
    </Toggle>
  );
};

export default Cast;