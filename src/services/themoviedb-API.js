import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3b120c16b34f353f70d8604b6ed477b2';
const axiosParams = {
  api_key: API_KEY,
};

const getTrendingToday = async abortController => {
  const response = await axios.get('/trending/movie/day', {
    params: axiosParams,
    signal: abortController.signal,
  });

  return response.data.results;
};

const getSearch = async (query, abortController) => {
  const response = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
    signal: abortController.signal,
  });

  return response.data.results;
};

const getDetails = async (movieId, abortController) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: axiosParams,
    signal: abortController.signal,
  });

  return response.data;
};

const getCredits = async (movieId, abortController) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: axiosParams,
    signal: abortController.signal,
  });

  return response.data.cast;
};

const getReviews = async (movieId, abortController) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: axiosParams,
    signal: abortController.signal,
  });

  return response.data.results;
};

export { getTrendingToday, getSearch, getDetails, getCredits, getReviews };
