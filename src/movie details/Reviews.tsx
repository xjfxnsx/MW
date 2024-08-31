import React from 'react';
import Toggle from '../components/Toggle';

type ReviewsProps = {
  reviews: Array<{ id: string; author: string; content: string }>;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <Toggle title="TMDB users' review">
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review) => (
            <div key={review.id} className="Review">
              <h3 className="ReviewAuthor">{review.author}</h3>
              <p className="ReviewContent">{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>TMDB users' review not found.</div>
      )}
    </Toggle>
  );
};

export default Reviews;