"use client";

import React, { useRef, useCallback } from "react";
import { useTheme } from "./ThemeProvider";
import { gsap } from "gsap";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);
  const isAnimating = useRef(false);

  const handleToggle = useCallback(() => {
    if (isAnimating.current) return;

    /* Check reduced-motion preference */
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      toggleTheme();
      return;
    }

    isAnimating.current = true;
    const btn = btnRef.current;
    if (!btn) {
      toggleTheme();
      isAnimating.current = false;
      return;
    }

    /* Calculate ripple origin from button center */
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    /* Create ripple element */
    const ripple = document.createElement("div");
    ripple.classList.add("theme-ripple");

    /* Color: the INCOMING theme's background */
    const nextTheme = theme === "light" ? "dark" : "light";
    ripple.style.backgroundColor = nextTheme === "dark" ? "#0a0e1a" : "#f8fafc";

    /* Position at button center */
    ripple.style.left = `${cx - 20}px`;
    ripple.style.top = `${cy - 20}px`;
    document.body.appendChild(ripple);

    /* Calculate scale needed to cover full viewport from this point */
    const maxDist = Math.max(
      Math.hypot(cx, cy),
      Math.hypot(window.innerWidth - cx, cy),
      Math.hypot(cx, window.innerHeight - cy),
      Math.hypot(window.innerWidth - cx, window.innerHeight - cy)
    );
    const scale = (maxDist / 20) * 1.2; // 20 = half of 40px ripple

    /* GSAP Timeline */
    const tl = gsap.timeline({
      onComplete: () => {
        ripple.remove();
        isAnimating.current = false;
      },
    });

    /* 1. Animate the icon (rotate + scale bounce) */
    tl.to(btn.querySelector(".theme-icon"), {
      rotation: 360,
      scale: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    /* 2. Expand ripple */
    tl.to(
      ripple,
      {
        scale: scale,
        duration: 0.65,
        ease: "power3.out",
      },
      "<0.1"
    );

    /* 3. Toggle theme mid-animation */
    tl.call(
      () => {
        toggleTheme();
      },
      [],
      "<0.35"
    );

    /* 4. New icon entrance */
    tl.fromTo(
      btn.querySelector(".theme-icon"),
      { rotation: -180, scale: 0 },
      {
        rotation: 0,
        scale: 1,
        duration: 0.45,
        ease: "back.out(2)",
      },
      ">-0.15"
    );

    /* 5. Fade out ripple */
    tl.to(
      ripple,
      {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.out",
      },
      ">-0.35"
    );

    /* 6. Settle page content with subtle stagger */
    const sections = document.querySelectorAll("main > section, header, footer");
    if (sections.length > 0) {
      tl.fromTo(
        Array.from(sections),
        { opacity: 0.88 },
        {
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: "power1.out",
        },
        ">-0.3"
      );
    }
  }, [theme, toggleTheme]);

  return (
    <button
      ref={btnRef}
      onClick={handleToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-hairline-slate bg-frost-canvas hover:bg-ice-wash text-midnight-slate cursor-pointer select-none active:scale-95 transition-colors duration-200"
    >
      <span className="theme-icon inline-flex" style={{ willChange: "transform" }}>
        {theme === "light" ? (
          <Moon size={18} weight="bold" />
        ) : (
          <Sun size={18} weight="bold" />
        )}
      </span>
    </button>
  );
}
