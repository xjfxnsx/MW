import React from 'react';
import Toggle from '../components/Toggle';

interface TrailersProps {
  videos: Array<{ id: string; key: string; name: string }>;
}

const Trailers: React.FC<TrailersProps> = ({ videos }) => {
  return (
    <Toggle title="Trailers">
      {videos.length > 0 ? (
        <div>
          {videos.map((video) => (
            <div key={video.id}>
              <p>{video.name}</p>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      ) : (
        <div>Trailers not found.</div>
      )}
    </Toggle>
  );
};

export default Trailers;
