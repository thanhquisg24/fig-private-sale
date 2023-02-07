// ==============================|| AUTHENTICATION ROUTING ||============================== //

import ErrorPage from "../view/error";
import LoginView from "../view/login";

const AuthenticationRoutes = [
  {
    path: "login",
    element: <LoginView />,
    errorElement: <ErrorPage />,
  },
];

export default AuthenticationRoutes;
