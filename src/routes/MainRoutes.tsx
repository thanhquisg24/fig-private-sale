import ErrorPage from "../view/error";
import HomeView from "../view/home";
import RequireAuth from "./RequireAuth";

// project imports

const MainRoutes = [
  {
    path: "/",
    index: true,
    element: (
      <RequireAuth>
        <HomeView />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
];

export default MainRoutes;
