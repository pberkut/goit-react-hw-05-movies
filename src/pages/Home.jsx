import { useEffect } from 'react';
import {
  getTrendingToday,
  getSearch,
  getDetails,
  getCredits,
  getReviews,
} from '../services/themoviedb-API';

export const Home = () => {
  useEffect(() => {
    const fetchTrendingToday = async () => {
      try {
        const trendingMovies = await getTrendingToday();
        console.log(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingToday();

    const fetchSearchMovie = async query => {
      try {
        const searchMovie = await getSearch(query);
        console.log(searchMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchMovie('man');

    const fetchDetailsMovie = async movieId => {
      try {
        const searchMovie = await getDetails(movieId);
        console.log(searchMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsMovie(739405);

    const fetchCreditsMovie = async movieId => {
      try {
        const creditsMovie = await getCredits(movieId);
        console.log(creditsMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreditsMovie(739405);

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

  return <div>Home</div>;
};
