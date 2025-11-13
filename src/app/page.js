"use client";

import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/Hero";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";
import ProjectsGrid from "./components/ProjectsGrid";
import SocialsSection from "./components/SocialsSection";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#f0f4f4] text-gray-800 overflow-hidden min-h-screen dark:bg-[#121315] dark:text-white">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <HeroBanner />
          <StatsSection />
          <AboutSection />
          <VideoSection />
          <ProjectsGrid />
          <SocialsSection />
          <Footer />
        </>
      )}
    </main>
  );
}
