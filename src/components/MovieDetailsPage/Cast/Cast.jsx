import { Credits } from "../../../API/api";
import noImage from "../../../image/noImage.jpg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "../Cast/Cast.module.css";

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const apiCredits = async () => {
      try {
        const data = await Credits(movieId);
        setCasts(data);
      } catch (e) {
        console.error(e);
      }
    };
    apiCredits();
  }, []);
  return (
    <section>
      <ul className={s.list}>
        {casts.map((cast) => (
          <li key={cast.id} className={s.item}>
            {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.original_name} /> : <img src={noImage} alt={cast.original_name} height="450" width="300" />}
            <p>{cast.original_name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
