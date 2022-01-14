import { Cast } from "./Cast/Cast";
import { Review } from "./Reviews/Reviews";
import { MovieById } from "../../API/api";
import { useState, useEffect } from "react";
import { Route, NavLink, useParams, useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "../../consts";

import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  function back() {
    const arr = location.pathname.split("/");
    const lastElement = arr[arr.length - 1];
    if (lastElement === "reviews" || lastElement === "cast") {
      history.push("/");
    } else {
      history.goBack();
    }
  }
  useEffect(() => {
    const apiMovieById = async () => {
      try {
        const data = await MovieById(movieId);
        setDetails(data);
        setGenres(data.genres);
      } catch (e) {
        console.error(e);
      }
    };
    apiMovieById();
  }, [movieId]);
  return (
    <section>
      <div>
        <button className={s.button} onClick={back} type="submit">
          GoBack
        </button>
      </div>
      <div className={s.container}>
        <div className={s.poster}>{details.poster_path && <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.original_title} />}</div>
        <div className={s.description}>
          <h1> {details.title} </h1>
          <p>Release date: {details.release_date}</p>
          <p>IMDb: {details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Aditional information</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink className={s.link} activeClassName={s.activelink} to={`${ROUTES.MoviesPage}/${movieId}/${"cast"}`}>
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={s.link} activeClassName={s.activelink} to={`${ROUTES.MoviesPage}/${movieId}/${"reviews"}`}>
              Review
            </NavLink>
          </li>
        </ul>
      </div>
      <Route path={ROUTES.Cast} component={Cast} />
      <Route path={ROUTES.Review} component={Review} />
    </section>
  );
}
