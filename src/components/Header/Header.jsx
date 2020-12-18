import React from "react";
import "./Header.scss";
import logo from "./assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип: конвертер криптовалют"
        />
        <nav className="header-nav">
          <NavLink to="/" className="header-nav__link">
            Главная
        </NavLink>
          <NavLink to="/portfolio" className="header-nav__link">
            Портфель
        </NavLink>
        </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
