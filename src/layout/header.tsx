/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <header id="header" className="header fixed-top header-scrolled">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="/static/img/logo.png" alt="" />
          <span>FlexStart</span>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li className="dropdown user-info-li">
              <a href="#">
                <span>welcome, example@gmail.com</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </li>

            <li>
              <b className="btn-connect-wallet getstarted scrollto">Connect Wallet</b>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
}
