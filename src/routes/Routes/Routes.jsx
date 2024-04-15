import {createBrowserRouter} from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../../error/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Contact from "../../pages/Contact/Contact";
import UpdateProfile from "../../pages/UpdateProfile/UpdateProfile";
import EstateDetails from "../../components/EstateDetails/EstateDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/estate/:id",
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
