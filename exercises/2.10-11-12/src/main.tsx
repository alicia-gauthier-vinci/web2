import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './components/App/App.tsx'
import HomePage from './components/pages/HomePage.tsx';
import CinemaPage from "./components/pages/Cinema.tsx";
import MovieListPage from "./components/pages/MovieListPage.tsx";
/** crées les routes et regroupe les pages en un children
 * on appelera alors un outlet dans l'app.tsx
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
