import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouty from "../layouts/AuthLayouty";
import NewsDetails from "../pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  //Home Layout
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },

  //Auth-Layout
  {
    path: "/auth",
    element: <AuthLayouty></AuthLayouty>,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  },

  //News Layout (Logic & Card)
  {
    path: "/news-details/:id",
    loader: () => fetch("/news.json"),
    element: <PrivetRoute>
      <NewsDetails></NewsDetails>,
    </PrivetRoute>

  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
