import React from "react";
import Header from "../components/Header";
import SectionHero from "../components/SectionHero";
import WatchingSection from "../components/WatchingSection";
import TopRating from "../components/TopRating";
import TrendingSection from "../components/TrendingSection";
import NewRelease from "../components/NewRelease";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <main>
        <Header />
        <SectionHero />
        <WatchingSection />
        <TopRating />
        <TrendingSection />
        <NewRelease />
        <Footer />
      </main>
    </>
  );
}
