import { HomePage } from "../HomePage/HomePage";
import { MoviesPage } from "../MoviesPage/MoviesPage";
import { MovieDetailsPage } from "../MovieDetailsPage/MovieDetailsPage";
import { Trending, Search, MovieById, Credits, Reviews } from "../../API/api";
import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { ROUTES } from "../../consts";
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
  apiMovieById();
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
  // apiReviews();
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.HomePage}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.MoviesPage}>Movies</Link>
        </li>
      </ul>

      <Route path={ROUTES.HomePage} exact component={HomePage} />
      <Route path={ROUTES.MoviesPage} component={MoviesPage} />
      <Route path={ROUTES.MovieDetailsPage} component={MovieDetailsPage} />
    </BrowserRouter>
  );
}
