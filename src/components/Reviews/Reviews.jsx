import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/themoviedb-API';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsMovie = async movieId => {
      try {
        const reviewsMovie = await getReviews(movieId);
        const reviews = reviewsMovie.map(({ author, content, created_at }) => ({
          author,
          content,
          created_at,
        }));

        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviewsMovie(movieId);
  }, [movieId]);

  return (
    <div>
      Reviews
      {reviews &&
        reviews.map(({ author, content, created_at }) => (
          <li key={author}>
            <span>Author: {author}</span>
            <p>{content}</p>
            <p>{created_at}</p>
          </li>
        ))}
    </div>
  );
};
