import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './components/App/App.tsx'
import HomePage from './components/pages/HomePage.tsx';
import CinemaPage from "./components/pages/CinemaPage.tsx";
import MovieListPage from "./components/pages/MovieListPage.tsx";
import AddMoviePage from './components/pages/AddMoviePage.tsx';

/** crées les routes et regroupe les pages en un children
 * on appelle alors un outlet dans l'app.tsx
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "cinemas",
        element: <CinemaPage/>,
      },
      {
        path: "add-movie",
        element: <AddMoviePage/>,
      },
      {
        path: "movie-list",
        element: <MovieListPage/>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
