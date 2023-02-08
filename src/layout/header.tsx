/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAppDispatch, useAppSelector } from "@hooks/useReduxToolKit";
import { doLogoutRequest } from "@store/actions";
import { getUserSelector } from "@store/selector";
import ConnectWalletContainer from "./ConnectWalletContainer";

export default function Header() {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector(getUserSelector);
  const handleLogout = async () => {
    // console.log("Logout");
    dispatch(doLogoutRequest());
  };
  return (
    <header id="header" className="header fixed-top header-scrolled">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="/static/img/logo.png" alt="" />
          <span>FIG</span>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            {userData && (
              <li className="dropdown user-info-li">
                <a href="#">
                  <span>hello, {userData.email}</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="#" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}

            <li>
              <ConnectWalletContainer />
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
}
