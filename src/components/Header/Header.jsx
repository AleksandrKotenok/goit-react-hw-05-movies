import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to={ROUTES.HomePage}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to={ROUTES.MoviesPage}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
