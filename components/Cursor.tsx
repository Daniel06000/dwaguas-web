"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let dotX = innerWidth / 2, dotY = innerHeight / 2;
    let ringX = dotX, ringY = dotY;
    let rafId = 0;
    let isHover = false;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
    };
    const tick = () => {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0) scale(${isHover ? 2 : 1})`;
      rafId = requestAnimationFrame(tick);
    };
    const onEnter = () => { isHover = true; if (dotRef.current) dotRef.current.style.opacity = "0"; };
    const onLeave = () => { isHover = false; if (dotRef.current) dotRef.current.style.opacity = "1"; };

    document.addEventListener("mousemove", onMove, { passive: true });
    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-aqua transition-opacity duration-200"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full border border-milk/60"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
