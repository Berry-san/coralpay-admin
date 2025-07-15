"use client";

import LandingPage from "@/components/LandingPage";
import SplashPage from "@/components/SplashPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashPage /> : <LandingPage />;
}
