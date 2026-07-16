"use client";

import React, { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Trophy } from "@phosphor-icons/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightWidgetRef = useRef<HTMLDivElement>(null);

  const scoreValRef = useRef<HTMLSpanElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Entrance animation for Left Content
      const leftElements = leftContentRef.current?.children;
      if (leftElements) {
        gsap.fromTo(
          Array.from(leftElements),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }

      // 2. Entrance animation for Right Widget
      if (rightWidgetRef.current) {
        gsap.fromTo(
          rightWidgetRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.15,
            ease: "power2.out",
          }
        );
      }

      // 3. Counter animate for Overall Score (from 0.0 to 9.8)
      if (scoreValRef.current) {
        const tempObj = { val: 0 };
        gsap.to(tempObj, {
          val: 9.8,
          duration: 1.0,
          delay: 0.4,
          ease: "power2.out",
          onUpdate: () => {
            if (scoreValRef.current) {
              scoreValRef.current.textContent = tempObj.val.toFixed(1);
            }
          },
        });
      }

      // 4. Stagger stars entrance animation
      const stars = starsRef.current?.children;
      if (stars) {
        gsap.fromTo(
          Array.from(stars),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            delay: 0.6,
            ease: "back.out(1.7)",
          }
        );
      }

      // 5. Stagger checkmarks fade-in
      const features = featuresRef.current?.children;
      if (features) {
        gsap.fromTo(
          Array.from(features),
          { x: -10, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.8,
            ease: "power2.out",
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center overflow-hidden"
    >
      {/* Left Column */}
      <div ref={leftContentRef} className="lg:col-span-6 flex flex-col items-start">
        <div className="inline-flex items-center px-3 py-1 bg-ice-wash border border-cobalt-glare/20 rounded-full text-electric-cobalt font-mono text-[11px] font-semibold tracking-wider mb-6 uppercase select-none">
          TOP VPN RATINGS & REVIEWS
        </div>
        <h1 className="font-headline text-[40px] md:text-[52px] leading-[1.1] font-extrabold text-midnight-slate tracking-tight mb-6">
          The Best VPN Services for 2026.
        </h1>
        <p className="font-body text-[16px] md:text-[18px] leading-relaxed text-cool-gray mb-8 max-w-xl">
          We test and compare the top VPNs so you don't have to. Find the perfect VPN for streaming, fast gaming, and complete online privacy without the technical jargon.
        </p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              document.getElementById("compare")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="active:scale-[0.97]"
          >
            Compare VPNs
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Read Methodology
          </Button>
        </div>
      </div>

      {/* Right Column: Top #1 Ranked VPN Card */}
      <div className="lg:col-span-6 w-full">
        <div
          ref={rightWidgetRef}
          className="bg-pure-white rounded-card border border-hairline-slate p-8 shadow-floating transition-all duration-300 hover:-translate-y-1 hover:shadow-hover group"
        >
          {/* Badge & Trophy Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-hairline-slate">
            <div className="flex items-center gap-2">
              <Trophy size={20} className="text-electric-cobalt" />
              <span className="font-mono text-[11px] font-extrabold text-electric-cobalt uppercase tracking-widest pl-1">
                #1 Ranked VPN
              </span>
            </div>
            <span className="bg-gradient-to-r from-electric-cobalt to-cyber-jade rounded-[6px] py-1 px-3.5 text-white text-[11px] font-headline font-extrabold uppercase select-none tracking-widest shadow-sm">
              BEST CHOICE
            </span>
          </div>

          {/* Logo & Title */}
          <div className="flex items-center gap-5 mb-6">
            {/* Khung chứa logo được tối ưu: chuyển từ khung vuông sang khung chữ nhật dẹt (w-24 h-14) */}
            <div className="relative w-24 h-14 flex items-center justify-center bg-slate-50/50 rounded-xl p-2 border border-hairline-slate shadow-sm hover:border-blue-200 transition-colors">
              {/* Huy hiệu Gold Badge cho Rank 1 */}
              <span className="absolute -top-2 -left-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-[10px] font-black text-white px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider select-none z-10">
                #1
              </span>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/NordVPN_logo.svg/1920px-NordVPN_logo.svg.png?_=20220226150306"
                alt="NordVPN Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
              />
            </div>

            <div>
              <h3 className="font-headline text-2xl font-extrabold text-midnight-slate tracking-tight flex items-center gap-2">
                NordVPN
              </h3>
              <p className="text-xs font-semibold text-cool-gray uppercase tracking-widest flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Top Rated Provider
              </p>
            </div>
          </div>

          {/* Score & Stars */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-frost-canvas border border-hairline-slate p-6 rounded-inner">
            <div>
              <p className="text-[11px] font-body text-cool-gray uppercase font-semibold mb-1">
                Overall Score
              </p>
              <div className="flex items-baseline gap-1">
                <span ref={scoreValRef} className="font-mono text-4xl font-extrabold text-midnight-slate">
                  0.0
                </span>
                <span className="font-mono text-sm font-semibold text-cool-gray">
                  / 10
                </span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-body text-cool-gray uppercase font-semibold mb-2">
                User Rating
              </p>
              <div ref={starsRef} className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Features Checkmarks Grid */}
          <div ref={featuresRef} className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 pt-2">
            {[
              "Verified No Logs",
              "4K Streaming Support",
              "Lag-Free Gaming",
              "Safe Torrenting",
              "WireGuard Protocol"
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm font-semibold text-cool-gray"
              >
                <svg
                  className="w-4 h-4 text-cyber-jade shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <Button
            onClick={() => {
              document.getElementById("compare")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full py-3.5 active:scale-[0.97] transition-all"
          >
            Read Review
          </Button>
        </div>
      </div>
    </section>
  );
}
