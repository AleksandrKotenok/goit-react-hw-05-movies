import { Header } from "../Header/Header";
import { ROUTES } from "../../consts";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("../MovieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../MoviesPage/MoviesPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={ROUTES.HomePage} exact component={HomePage} />
        <Route path={ROUTES.MoviesPage} exact component={MoviesPage} />
        <Route path={ROUTES.MovieDetailsPage} component={MovieDetailsPage} />
        <Redirect to={ROUTES.HomePage} />
      </Suspense>
    </BrowserRouter>
  );
}
