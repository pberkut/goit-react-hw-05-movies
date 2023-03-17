import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/themoviedb-API';
import dateFormat from 'dateformat';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchReviewsMovie = async movieId => {
      try {
        const reviewsMovie = await getReviews(movieId, abortController);
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

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      Reviews
      {reviews.length > 0 ? (
        reviews.map(({ author, content, created_at }) => (
          <li key={author}>
            <span>Author: {author}</span>
            <p>{content}</p>
            <p>{dateFormat(created_at, 'fullDate')}</p>
          </li>
        ))
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
