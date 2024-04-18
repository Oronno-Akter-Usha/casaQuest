import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PropertyDetails from "../pages/Home/PropertyDetails/PropertyDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import Wishlist from "../pages/Wishlist/Wishlist";
// import Wishlist from "../pages/Wishlist/Wishlist";

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
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://oronno-akter-usha.github.io/real-estate-json/popular-properties.json?id=${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "/UpdateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },

      {
        path: "/wishList",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://oronno-akter-usha.github.io/real-estate-json/popular-properties.json"
          ),
      },
    ],
  },
]);

export default router;
