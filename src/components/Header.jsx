import React from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import KeyboardArrowDown from "../assets/images/KeyboardArrowDown.png";

export default function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <a href="/dashboard">
              <img src={logo} alt="Home" />
              <span className="logo__text"></span>
            </a>
          </div>
          <a href="/series">Series</a>
          <a href="/film">Film</a>
          <a href="/daftarsaya">Daftar Saya</a>
        </nav>
        <div className="profile">
          <img src={profile} alt="Profile images" className="profile__images" />
          <a>
            <img
              src={KeyboardArrowDown}
              alt="Profile menu"
              className="profile__menu"
            />
          </a>
        </div>
      </header>
    </>
  );
}
