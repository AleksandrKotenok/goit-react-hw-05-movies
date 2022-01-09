import { HomePage } from "../HomePage/HomePage";
import { MoviesPage } from "../MoviesPage/MoviesPage";
import { Trending, Search, MovieById, Credits, Reviews } from "../../API/api";
import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
export default function App() {
  const [query, setQuery] = useState("car");
  const [page, setPage] = useState(2);
  const [movieId, setMovieId] = useState(8859);

  const apiTrending = async () => {
    try {
      const data = await Trending();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  //apiTrending();
  const apiSearch = async () => {
    try {
      const data = await Search(query, page);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  //apiSearch();
  const apiMovieById = async () => {
    try {
      const data = await MovieById(movieId);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  //apiMovieById();
  const apiCredits = async () => {
    try {
      const data = await Credits(movieId);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  //apiCredits();
  const apiReviews = async () => {
    try {
      const data = await Reviews(movieId);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  apiReviews();
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
    </BrowserRouter>
  );
}
