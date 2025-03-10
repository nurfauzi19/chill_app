import React from "react";
import Logotext from "../assets/images/Logo-Text.png";
import Chevronright from "../assets/images/chevron-right.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="company">
          <img src={Logotext} alt="Chill Logo" />
          <span>@2023 Chill All Rights Reserved.</span>
        </div>
        <div class="genre">
          <a>
            <span>Genre</span>
            <img class="chevron" src={Chevronright} />
          </a>
          <ul>
            <li>
              <a href="#">Aksi</a>
            </li>
            <li>
              <a href="#">Anak-anak</a>
            </li>
            <li>
              <a href="#">Anime</a>
            </li>
            <li>
              <a href="#">Britania</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Fantasi Ilmiah & Fantasi</a>
            </li>
            <li>
              <a href="#">Kejahatan</a>
            </li>
            <li>
              <a href="#">KDrama</a>
            </li>
            <li>
              <a href="#">Komedi</a>
            </li>
            <li>
              <a href="#">Petualangan</a>
            </li>
            <li>
              <a href="#">Perang</a>
            </li>
            <li>
              <a href="#">Romantis</a>
            </li>
            <li>
              <a href="#">Sains & Alam</a>
            </li>
            <li>
              <a href="#">Thriller</a>
            </li>
          </ul>
        </div>
        <div class="help">
          <a>
            <span>Bantuan</span>
            <img class="chevron" src={Chevronright} />
          </a>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Kontak Kami</a>
            </li>
            <li>
              <a href="#">Privasi</a>
            </li>
            <li>
              <a href="#">Syarat & Ketentuan</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
