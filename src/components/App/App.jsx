import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Header } from "../Header/Header";
import { ROUTES } from "../../routes";

const AsyncHomePage = lazy(() => import("../HomePage/HomePage"));
const AsyncMovieDetailsPage = lazy(() => import("../MovieDetailsPage/MovieDetailsPage"));
const AsyncMoviesPage = lazy(() => import("../MoviesPage/MoviesPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={ROUTES.HomePage} exact component={AsyncHomePage} />
        <Route path={ROUTES.MoviesPage} exact component={AsyncMoviesPage} />
        <Route path={ROUTES.MovieDetailsPage} component={AsyncMovieDetailsPage} />
        <Redirect to={ROUTES.HomePage} />
      </Suspense>
    </BrowserRouter>
  );
}
