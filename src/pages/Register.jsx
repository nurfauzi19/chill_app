import React from "react";
import Logo from "../assets/images/Logo-Text.png";
import Google from "../assets/images/google.png";

export default function Register() {
  return (
    <>
      <main>
        <div className="container__auth register__bg">
          <div className="content__auth register__page">
            <div className="content__auth__logo">
              <img src={Logo} alt="Chill Logo" />
            </div>
            <div className="content__auth__header">
              <h3>Daftar</h3>
              <span>Selamat datang!</span>
            </div>

            <div className="content__auth__form">
              <form action="dashboard.html" method="POST">
                <div className="form__group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Masukkan username"
                    required
                  />
                </div>
                <div className="form__group">
                  <label for="password">Kata Sandi</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Masukkan kata sandi"
                    required
                  />
                </div>
                <div className="form__group">
                  <label for="password">Konfirmasi Kata Sandi</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Konfirmasi kata sandi"
                    required
                  />
                  <div className="form__link">
                    <div className="form__link__login">
                      <span>Sudah punya akun?</span>
                      <a href="/login">Masuk</a>
                    </div>
                  </div>
                </div>
                <div className="form__group">
                  <div className="form__submit">
                    <button type="submit" className="signin">
                      Daftar
                    </button>
                    <span>Atau</span>
                    <button className="google-signin">
                      <img src={Google} alt="Google Logo" /> Daftar dengan
                      Google
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
