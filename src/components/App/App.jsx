import { HomePage } from "../HomePage/HomePage";
import { MoviesPage } from "../MoviesPage/MoviesPage";
import { MovieDetailsPage } from "../MovieDetailsPage/MovieDetailsPage";
import { Header } from "../Header/Header";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ROUTES } from "../../consts";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path={ROUTES.HomePage} exact component={HomePage} />
      <Route path={ROUTES.MoviesPage} exact component={MoviesPage} />
      <Route path={ROUTES.MovieDetailsPage} component={MovieDetailsPage} />
    </BrowserRouter>
  );
}
