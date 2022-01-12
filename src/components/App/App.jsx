import { HomePage } from "../HomePage/HomePage";
import { MoviesPage } from "../MoviesPage/MoviesPage";
import { MovieDetailsPage } from "../MovieDetailsPage/MovieDetailsPage";
import { Header } from "../Header/Header";
import { Search } from "../../API/api";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ROUTES } from "../../consts";
export default function App() {
  const [query, setQuery] = useState("car");
  const [page, setPage] = useState(2);

  const apiSearch = async () => {
    try {
      const data = await Search(query, page);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  //apiSearch();

  return (
    <BrowserRouter>
      <Header />

      <Route path={ROUTES.HomePage} exact component={HomePage} />
      <Route path={ROUTES.MoviesPage} exact component={MoviesPage} />
      <Route path={ROUTES.MovieDetailsPage} component={MovieDetailsPage} />
    </BrowserRouter>
  );
}
