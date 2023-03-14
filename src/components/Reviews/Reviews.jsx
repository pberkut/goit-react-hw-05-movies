import { useEffect } from 'react';
import { getReviews } from 'services/themoviedb-API';

export const Reviews = () => {
  useEffect(() => {
    const fetchReviewsMovie = async movieId => {
      try {
        const reviewsMovie = await getReviews(movieId);
        console.log(reviewsMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviewsMovie(739405);
  }, []);
  return <div>Reviews</div>;
};
