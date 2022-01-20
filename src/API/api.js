import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {  api_key: '7483e932537577abdaa29f08ebe6fdbf'};


// + /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// + /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// + /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

export const Trending = async () => {
  try {
    const {data} = await axios.get('/trending/movie/day');
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
export const Search = async (query) => {
  try {
    const {data} = await axios.get(`/search/movie?&query=${query}&page=1`);
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
export const MovieById = async (movieId) => {
  try {
    const {data} = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const Credits = async (movieId) => {
  try {
    const {data} = await axios.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (e) {
    console.error(e);
  }
};
export const Reviews = async (movieId) => {
  try {
    const {data} = await axios.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (e) {
    console.error(e);
  }
};


