import { createBrowserRouter } from "react-router-dom";
import config from "../config";
import ErrorPage from "../view/error";
import HomeView from "../view/home";
import LoginView from "../view/login";

export const routerConfig = createBrowserRouter(
  [
    {
      path: "/",
      index: true,
      element: <HomeView />,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <LoginView />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: config.basename,
  },
);
