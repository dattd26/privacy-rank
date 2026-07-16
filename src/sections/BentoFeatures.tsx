"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BentoFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const chartBarsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Cascade entrance for Bento Cards
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }

      // Chart bars height scale-up animation
      const bars = chartBarsRef.current?.children;
      if (bars) {
        gsap.fromTo(
          Array.from(bars),
          { scaleY: 0 },
          {
            scrollTrigger: {
              trigger: chartBarsRef.current,
              start: "top 85%",
            },
            scaleY: 1,
            transformOrigin: "bottom",
            duration: 0.6,
            delay: 0.3,
            stagger: 0.05,
            ease: "back.out(1.2)",
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="features"
      className="max-w-7xl mx-auto px-8 py-20 lg:py-24"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline text-[32px] font-bold text-midnight-slate mb-4">
          Why You Need a Top VPN
        </h2>
        <p className="font-body text-cool-gray max-w-2xl mx-auto">
          Whether you want to access blocked content, protect your privacy on public Wi-Fi, or stop your ISP from throttling your speeds.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto"
      >
        {/* Cell 1: No-Logs Policy */}
        <div className="md:col-span-2 bg-pure-white rounded-card border border-hairline-slate p-8 flex flex-col justify-between shadow-subtle hover:shadow-floating transition-all duration-300 group">
          <div>
            <div className="w-12 h-12 bg-ice-wash rounded-inner flex items-center justify-center text-electric-cobalt mb-6 group-hover:scale-105 transition-transform duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-headline text-2xl font-bold text-midnight-slate mb-3">
              One-Click Privacy
            </h3>
            <p className="font-body text-cool-gray text-sm leading-relaxed">
              Hide your IP address and encrypt your internet connection with a single click. Protect your personal data from hackers, ISPs, and snoops on any network.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-hairline-slate pt-6 select-none">
            <div className="bg-jade-wash text-cyber-jade px-4 py-2 rounded-full font-mono text-[11px] font-bold">
              STATUS: PROTECTED
            </div>
            <span className="text-xs font-semibold text-cool-gray">
              Bank-grade Encryption
            </span>
          </div>
        </div>

        {/* Cell 2: Global Streaming — uses a slightly different dark surface to stay visible in both themes */}
        <div className="md:col-span-2 bg-[#0f1629] dark:bg-[#1a2340] rounded-card border border-transparent dark:border-[#2a3558] p-8 flex flex-col justify-between text-white shadow-floating relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-10 transform rotate-12 select-none pointer-events-none">
            <svg
              className="w-48 h-48"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-electric-cobalt/20 rounded-inner border border-electric-cobalt/30 flex items-center justify-center text-electric-cobalt mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-3">
              Unblock Global Streaming
            </h3>
            <p className="font-body text-white/70 text-sm leading-relaxed">
              Bypass geo-restrictions and stream your favorite shows from anywhere in the world without buffering or proxy errors.
            </p>
          </div>
          <div className="relative z-10 mt-8 font-mono text-[11px] space-y-1 bg-black/30 border border-white/10 p-4 rounded-inner select-none">
            <div className="flex justify-between border-b border-white/10 pb-1.5">
              <span className="text-white/50">NETFLIX US</span>
              <span className="font-bold text-cyber-jade">UNBLOCKED</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-1.5">
              <span className="text-white/50">BBC iPLAYER</span>
              <span className="font-bold text-cyber-jade">UNBLOCKED</span>
            </div>
            <div className="flex justify-between pt-1.5">
              <span className="text-white/50">HULU & DISNEY+</span>
              <span className="font-bold text-cyber-jade">UNBLOCKED</span>
            </div>
          </div>
        </div>

        {/* Cell 3: WireGuard Performance */}
        <div className="md:col-span-1 bg-pure-white rounded-card border border-hairline-slate p-6 shadow-subtle hover:shadow-floating transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 bg-ice-wash rounded-inner flex items-center justify-center text-electric-cobalt mb-4 group-hover:scale-105 transition-transform duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="font-headline text-lg font-bold text-midnight-slate mb-2">
              Lightning Fast Speeds
            </h4>
            <p className="font-body text-xs text-cool-gray leading-relaxed mb-6">
              Optimized servers for 4K streaming, fast torrenting, and lag-free gaming.
            </p>
          </div>
          <div
            ref={chartBarsRef}
            className="h-20 flex items-end gap-1.5 select-none"
          >
            <div
              className="bg-hairline-slate w-full h-[20%] rounded-t"
              style={{ height: "20%" }}
            ></div>
            <div
              className="bg-hairline-slate w-full h-[35%] rounded-t"
              style={{ height: "35%" }}
            ></div>
            <div
              className="bg-hairline-slate w-full h-[50%] rounded-t"
              style={{ height: "50%" }}
            ></div>
            <div
              className="bg-hairline-slate w-full h-[65%] rounded-t"
              style={{ height: "65%" }}
            ></div>
            <div
              className="bg-electric-cobalt w-full h-[95%] rounded-t"
              style={{ height: "95%" }}
            ></div>
          </div>
        </div>

        {/* Cell 4: Kill Switch Diagnostic */}
        <div className="md:col-span-3 bg-pure-white rounded-card border border-hairline-slate p-8 flex flex-col md:flex-row gap-8 shadow-subtle hover:shadow-floating transition-all duration-300 items-stretch group">
          <div className="md:w-1/3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-crimson-wash rounded-inner flex items-center justify-center text-signal-crimson mb-4 group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h4 className="font-headline text-lg font-bold text-midnight-slate mb-2">
                Strict No-Logs Policy
              </h4>
              <p className="font-body text-xs text-cool-gray leading-relaxed">
                What you do online is your business. Top VPNs do not track, collect, or share your private browsing history.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 bg-frost-canvas rounded-inner p-5 font-mono text-[11px] border border-hairline-slate flex flex-col justify-center space-y-3 select-none">
            <div className="flex items-center gap-2 text-cyber-jade">
              <span className="w-2 h-2 bg-cyber-jade rounded-full"></span>
              <span className="break-all font-semibold">BROWSING HISTORY: NOT RECORDED</span>
            </div>
            <div className="flex items-center gap-2 text-cyber-jade">
              <span className="w-2 h-2 bg-cyber-jade rounded-full"></span>
              <span className="break-all font-semibold">IP ADDRESSES: NEVER STORED</span>
            </div>
            <div className="flex items-center gap-2 text-cyber-jade">
              <span className="w-2 h-2 bg-cyber-jade rounded-full"></span>
              <span className="break-all font-semibold">INDEPENDENT AUDIT: PASSED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
