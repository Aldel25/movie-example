import Authtentication from "../features/Auth";
import Home from "../features/home";
import Layout from "../component/layout";
import MovieDetail from "../component/movie-details";
import Movies from "../features/movie";
import ProtectedRoutes from "./protected-routes";
import TvShow from "../features/tv-show";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/details/:id",
            element: <MovieDetail />,
          },
          {
            path: "/movie",
            element: <Movies />,
          },
          {
            path: "/tvshow",
            element: <TvShow />,
          },
          {
            path: "/login",
            element: <Authtentication />,
          },
        ],
      },
    ],
  },
]);
