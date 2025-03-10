import React from "react";
import Logo from "../assets/images/Logo-Text.png";
import Google from "../assets/images/google.png";

export default function Login() {
  return (
    <>
      <div class="container__auth login__bg">
        <div class="content__auth login__page">
          <div class="content__auth__logo">
            <img src={Logo} alt="Chill Logo" />
          </div>
          <div class="content__auth__header">
            <h3>Masuk</h3>
            <span>Selamat datang kembali!</span>
          </div>

          <div class="content__auth__form">
            <form action="dashboard.html" method="POST">
              <div class="form__group">
                <label for="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Masukkan username"
                  required
                />
              </div>
              <div class="form__group">
                <label for="password">Kata Sandi</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukkan kata sandi"
                  required
                />
                <div class="form__link">
                  <div class="form__link__register">
                    <span>Belum punya akun?</span>
                    <a href="/register">Daftar</a>
                  </div>
                  <a href="#">Lupa kata sandi?</a>
                </div>
              </div>
              <div class="form__group">
                <div class="form__submit">
                  <button type="submit" class="signin">
                    Masuk
                  </button>
                  <span>Atau</span>
                  <button class="google-signin">
                    <img src={Google} alt="Google Logo" /> Masuk dengan Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
