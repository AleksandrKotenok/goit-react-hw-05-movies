import { Trending } from "../../API/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import s from "./HomePage.module.css";

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const apiTrending = async () => {
      try {
        const data = await Trending();
        setTrends(data);
      } catch (e) {
        console.error(e);
      }
    };
    apiTrending();
  }, []);
  return (
    <ul className={s.list}>
      {trends.map((trend) => (
        <li key={trend.id} className={s.item}>
          <Link className={s.link} to={`${ROUTES.MoviesPage}/${trend.id}`}>
            {trend.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
