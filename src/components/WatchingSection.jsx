import React from "react";
import Arrowleft from "../assets/images/arrow-left.png";
import Recentsatu from "../assets/images/cover/recent-1.png";
import Star from "../assets/images/star.png";
import Recentdua from "../assets/images/cover/recent-2.png";
import Recenttiga from "../assets/images/cover/recent-3.png";
import Recentempat from "../assets/images/cover/recent-4.png";
import ArrowRight from "../assets/images/arrow-right.png";

export default function WatchingSection() {
  return (
    <>
      <section class="recent__watching movies">
        <h3>Melanjutkan Tonton Film</h3>
        <div class="movie__list">
          <div class="arrow">
            <img src={Arrowleft} alt="arrow left" />
          </div>
          <div class="slider">
            <div class="movie recent">
              <img src={Recentsatu} alt="Don't Look Up" />
              <h6 class="movie__title">Don't Look Up</h6>
              <div class="movie__rating">
                <img src={Star} alt="star" />
                <span>4.5/5</span>
              </div>
            </div>
            <div class="movie recent">
              <img src={Recentdua} alt="The Batman" />
              <h6 class="movie__title">The Batman</h6>
              <div class="movie__rating">
                <img src={Star} alt="star" />
                <span>4.2/5</span>
              </div>
            </div>
            <div class="movie recent">
              <img src={Recenttiga} alt="Blue Lock" />
              <div class="new__episode">
                <span>Episode Baru</span>
              </div>
              <h6 class="movie__title">Blue Lock</h6>
              <div class="movie__rating">
                <img src={Star} alt="star" />
                <span>4.6/5</span>
              </div>
            </div>
            <div class="movie recent">
              <img src={Recentempat} alt="A Man Called Otto" />
              <h6 class="movie__title">A Man Called Otto</h6>
              <div class="movie__rating">
                <img src={Star} alt="star" />
                <span>4.4/5</span>
              </div>
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
