import React from "react";
import Arrowleft from "../assets/images/arrow-left.png";
import ArrowRight from "../assets/images/arrow-right.png";
import Topsatu from "../assets/images/cover/top-1.png";
import Topdua from "../assets/images/cover/top-2.png";
import Toptiga from "../assets/images/cover/top-3.png";
import Topempat from "../assets/images/cover/top-4.png";
import Toplima from "../assets/images/cover/top-5.png";

export default function TopRating() {
  return (
    <>
      <section class="top__rating movies">
        <h3>Top Rating Film dan Series Hari ini</h3>
        <div class="movie__list">
          <div class="arrow">
            <img src={Arrowleft} alt="arrow left" />
          </div>
          <div class="slider">
            <div class="movie">
              <img src={Topsatu} alt="Suzume" />
              <div class="new__episode">
                <span>Episode Baru</span>
              </div>
            </div>
            <div class="movie">
              <img src={Topdua} alt="Jurrasic World" />
            </div>
            <div class="movie">
              <img src={Toptiga} alt="Sonic 2" />
            </div>
            <div class="movie">
              <img src={Topempat} alt="All of us are dead" />
              <div class="new__episode">
                <span>Episode Baru</span>
              </div>
            </div>
            <div class="movie">
              <img src={Toplima} alt="Big Hero" />
            </div>
          </div>
          <div class="arrow">
            <img src={ArrowRight} alt="arrow right" />
          </div>
        </div>
      </section>
    </>
  );
}
