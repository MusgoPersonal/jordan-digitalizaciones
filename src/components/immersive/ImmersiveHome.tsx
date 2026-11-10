"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Sections from "./Sections";
import { sceneState } from "./state";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function ImmersiveHome() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sceneState.reducedMotion = reduced;
    sceneState.isMobile = window.innerWidth < 768;

    let lenis: Lenis | null = null;
    const cleanups: (() => void)[] = [];

    if (!reduced) {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      lenis.on("scroll", () => {
        sceneState.progress = lenis!.progress;
        sceneState.velocity = lenis!.velocity;
      });
      const raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      const hero = document.querySelector("[data-hero]");
      if (hero) {
        gsap.to(hero, {
          opacity: 0,
          scale: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      cleanups.push(() => {
        gsap.ticker.remove(raf);
        lenis?.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    } else {
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        sceneState.progress = h > 0 ? window.scrollY / h : 0;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(refreshTimer);
      cleanups.forEach((fn) => fn());
      sceneState.progress = 0;
    };
  }, []);

  return (
    <div className="relative bg-[#02040a]" data-immersive>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>
      <Sections />
    </div>
  );
}
