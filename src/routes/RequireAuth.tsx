import { Navigate, useLocation } from "react-router-dom";

import { Loading } from "@components/SpinerWrapper";
import { RootStateType } from "@store/types";
import { useAppSelector } from "@hooks/useReduxToolKit";

function RequireAuth({ children }: any) {
  const { authChecked, loggedIn, currentUser, isLoading } = useAppSelector((state: RootStateType) => state.auth);

  const location = useLocation();

  if (!loggedIn && isLoading === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return isLoading ? <Loading /> : children;
}

// const PrivateRoute = ({ children, ...rest }: any) => {
//   const { authChecked, loggedIn, currentUser, isLoading } = useAppSelector((state: RootStateType) => state.auth);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <Route
//       {...rest}
//       render={({ location }: any) => (loggedIn ? children : <Navigate to="/" state={{ from: location }} />)}
//     />
//   );
// };
// function PrivateRoute({ children, ...rest }: any) {
//   const auth = false;
//   return <Route {...rest} render={() => children} />;
// }

export default RequireAuth;
