import { Cast } from "./Cast/Cast";
import { Review } from "./Reviews/Reviews";
import { MovieById } from "../../API/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import s from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const apiMovieById = async () => {
      try {
        const data = await MovieById(movieId);
        setDetails(data);
        setGenres(data.genres);
        console.log("details1", genres);
      } catch (e) {
        console.error(e);
      }
    };
    apiMovieById();
    console.log("details2", genres);
  }, []);
  console.log("details3", details);
  //const year = details.release_date.slice(0, 4);
  return (
    <section>
      <div className={s.container}>
        <div className={s.poster}>
          <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.original_title} />
        </div>
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
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to={`${ROUTES.MoviesPage}/${movieId}/${"cast"}`}>Cast</Link>
          </li>
          <li>
            <Link to={`${ROUTES.MoviesPage}/${movieId}/${"reviews"}`}>Review</Link>
          </li>
        </ul>
      </div>
      <Route path={ROUTES.Cast} component={Cast} />
      <Route path={ROUTES.Review} component={Review} />
    </section>
  );
};
// {
//   match: {
//     params: { movieId },
//   },
// }
