import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Catagory from "../Pages/Catagory";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Components/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivatRoute from "../Components/PrivatRoute";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { path: "", Component: Home },
      { path: "about", Component: About },
      { path: "career", Component: Career },
      {
        path: "/catagory/:id",
        Component: Catagory,
        loader: () => fetch("/news.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivatRoute>
        <NewsDetails></NewsDetails>
      </PrivatRoute>
    ),
    loader: () => fetch("/news.json").then((res) => res.json()),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    Component: <h2>error page 404 </h2>,
  },
]);
