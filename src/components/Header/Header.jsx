import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activelink} to={ROUTES.HomePage} exact>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.activelink} to={ROUTES.MoviesPage} exact>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
