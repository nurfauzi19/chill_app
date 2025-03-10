import React from "react";
import Arrowleft from "../assets/images/arrow-left.png";
import ArrowRight from "../assets/images/arrow-right.png";
import New1 from "../assets/images/cover/new-1.png";
import New2 from "../assets/images/cover/new-2.png";
import New3 from "../assets/images/cover/new-3.png";
import New4 from "../assets/images/cover/new-4.png";
import New5 from "../assets/images/cover/new-5.png";

export default function NewRelease() {
  return (
    <>
      <section class="new movies">
        <h3>Rilis Baru</h3>
        <div class="movie__list">
          <div class="arrow">
            <img src={Arrowleft} alt="arrow left" />
          </div>
          <div class="slider">
            <div class="movie">
              <img src={New1} alt="Suzume" />
              <div class="top_10">
                <span>Top 10</span>
              </div>
            </div>
            <div class="movie">
              <img src={New2} alt="Jurrasic World" />
              <div class="new__episode">
                <span>Episode Baru</span>
              </div>
            </div>
            <div class="movie">
              <img src={New3} alt="Sonic 2" />
            </div>
            <div class="movie">
              <img src={New4} alt="All of us are dead" />
              <div class="new__episode">
                <span>Episode Baru</span>
              </div>
            </div>
            <div class="movie">
              <img src={New5} alt="Big Hero" />
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
