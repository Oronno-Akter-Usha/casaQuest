import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PropertyDetails from "../pages/Home/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://oronno-akter-usha.github.io/real-estate-json/popular-properties.json"
          ),
      },
      {
        path: "/property/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://oronno-akter-usha.github.io/real-estate-json/popular-properties.json?id=${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
