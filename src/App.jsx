import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/contact";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getApiData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getApiData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ]
    }
    
  ]);

  return(
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;