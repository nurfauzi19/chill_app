import React from "react";
import Informatonoutline from "../assets/images/information-outline.png";
import Volumeoff from "../assets/images/volume-off.png";

export default function SectionHero() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <h1>Duty After School</h1>
            <p>
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>
          <div className="hero__button">
            <div className="hero__info">
              <button className="watch button">Mulai</button>
              <button className="info button">
                <img src={Informatonoutline} alt="info" />
                Selengkapnya
              </button>
              <span className="age__ratings">18+</span>
            </div>
            <div className="hero__volume">
              <img src={Volumeoff} alt="volume-off" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
