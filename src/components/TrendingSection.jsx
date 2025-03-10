import React from "react";
import Arrowleft from "../assets/images/arrow-left.png";
import ArrowRight from "../assets/images/arrow-right.png";
import Trendingsatu from "../assets/images/cover/trending-1.png";
import Trendingdua from "../assets/images/cover/trending-2.png";
import Trendingtiga from "../assets/images/cover/trending-3.png";
import Trendingempat from "../assets/images/cover/trending-4.png";
import Trendinglima from "../assets/images/cover/trending-5.png";

export default function TrendingSection() {
  return (
    <>
      <section class="trending movies">
        <h3>Film Trending</h3>
        <div class="movie__list">
          <div class="arrow">
            <img src={Arrowleft} alt="arrow left" />
          </div>
          <div class="slider">
            <div class="movie">
              <img src={Trendingsatu} alt="Suzume" />
              <div class="top_10">
                <span>Top 10</span>
              </div>
            </div>
            <div class="movie">
              <img src={Trendingdua} alt="Jurrasic World" />
              <div class="top_10">
                <span>Top 10</span>
              </div>
            </div>
            <div class="movie">
              <img src={Trendingtiga} alt="Sonic 2" />
              <div class="top_10">
                <span>Top 10</span>
              </div>
            </div>
            <div class="movie">
              <img src={Trendingempat} alt="All of us are dead" />
              <div class="top_10">
                <span>Top 10</span>
              </div>
            </div>
            <div class="movie">
              <img src={Trendinglima} alt="Big Hero" />
              <div class="top_10">
                <span>Top 10</span>
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
