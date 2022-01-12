import { Trending } from "../../API/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import s from "./HomePage.module.css";

export const HomePage = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const apiTrending = async () => {
      try {
        const data = await Trending();
        console.log(data);
        setTrends(data);
        console.log("clg1", trends);
      } catch (e) {
        console.error(e);
      }
    };
    apiTrending();
    console.log("clg2", trends);
  }, []);
  console.log("clg3", trends);
  return (
    <ul className={s.list}>
      {trends.map((trend) => (
        <li key={trend.id} className={s.item}>
          <Link to={`${ROUTES.MoviesPage}/${trend.id}`}>{trend.title}</Link>
        </li>
      ))}
    </ul>
    //<p>ololo</p>
  );
};
