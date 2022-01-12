import { Search } from "../../API/api";
import { ROUTES } from "../../consts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./MoviesPage.module.css";

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!query) {
      return;
    }
    const apiSearch = async () => {
      try {
        const data = await Search(query);
        setMovies(data);
      } catch (e) {
        console.error(e);
      }
    };
    apiSearch();
  }, [query]);

  const searchChange = (event) => setQuery(event.currentTarget.value.toLowerCase());
  const submit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      console.error("Enter your query!");
      return;
    }
    setQuery("");
  };
  return (
    <section>
      <div>
        <form className={s.form} onSubmit={submit}>
          <input className={s.input} type="text" autoComplete="off" autoFocus placeholder="Search ..." onChange={searchChange} />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </div>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${ROUTES.MoviesPage}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
};
