"use client";
import { useEffect } from "react";

// Smooth scroll nativo (mucho más rápido que Lenis)
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);
  return <>{children}</>;
}
