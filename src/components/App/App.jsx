import { Trending, Search, MovieById, Credits, Reviews } from "../../API/api";
import { Fragment, useState, useEffect } from "react";

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
    <div className="App">
      <p>init</p>
    </div>
  );
}
