"use client";

import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
      {loading ? <Loading /> : <Navbar />}
    </main>
  );
}
