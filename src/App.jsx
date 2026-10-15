import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/contact";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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