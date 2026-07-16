"use client";

import React, { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightWidgetRef = useRef<HTMLDivElement>(null);
  
  const dnsBarRef = useRef<HTMLDivElement>(null);
  const ipv6BarRef = useRef<HTMLDivElement>(null);
  const pingValRef = useRef<HTMLParagraphElement>(null);

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

      // 3. Progress bars filling animation
      if (dnsBarRef.current) {
        gsap.fromTo(
          dnsBarRef.current,
          { width: "0%" },
          { width: "94%", duration: 0.8, delay: 0.5, ease: "power1.out" }
        );
      }
      if (ipv6BarRef.current) {
        gsap.fromTo(
          ipv6BarRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.8, delay: 0.6, ease: "power1.out" }
        );
      }

      // 4. Counter animate for Ping (from 99ms down to 14ms)
      if (pingValRef.current) {
        const tempObj = { val: 99 };
        gsap.to(tempObj, {
          val: 14,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          onUpdate: () => {
            if (pingValRef.current) {
              pingValRef.current.textContent = `${Math.floor(tempObj.val)}ms`;
            }
          },
        });
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
          VERIFIED SECURITY LAB INDEX
        </div>
        <h1 className="font-headline text-[40px] md:text-[52px] leading-[1.1] font-extrabold text-midnight-slate tracking-tight mb-6">
          The Definitive Privacy Index for 2026.
        </h1>
        <p className="font-body text-[16px] md:text-[18px] leading-relaxed text-cool-gray mb-8 max-w-xl">
          We stress-test, audit, and rank VPN networks. Transparent metrics. Zero provider influence. Our analytical laboratory ensures digital sovereignty through high-precision cybersecurity reviews.
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

      {/* Right Column: Security Analyzer Widget */}
      <div className="lg:col-span-6 w-full">
        <div
          ref={rightWidgetRef}
          className="bg-pure-white rounded-card border border-hairline-slate p-8 shadow-floating"
        >
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-hairline-slate">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-cyber-jade rounded-full animate-ping absolute inline-flex"></span>
              <span className="w-2.5 h-2.5 bg-cyber-jade rounded-full relative inline-flex"></span>
              <span className="font-mono text-[11px] font-semibold text-cool-gray uppercase tracking-widest pl-1">
                Network Status: Protected
              </span>
            </div>
            <svg
              className="w-5 h-5 text-cool-gray"
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

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-frost-canvas p-4 rounded-inner border border-hairline-slate">
                <p className="text-[11px] font-body text-cool-gray uppercase font-semibold mb-1">
                  Encryption
                </p>
                <p className="font-mono text-base font-bold text-midnight-slate">
                  AES-256-GCM
                </p>
              </div>
              <div className="bg-frost-canvas p-4 rounded-inner border border-hairline-slate">
                <p className="text-[11px] font-body text-cool-gray uppercase font-semibold mb-1">
                  Tunnel Protocol
                </p>
                <p className="font-mono text-base font-bold text-midnight-slate">
                  WireGuard v2
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-sm mb-1.5">
                  <span className="font-body text-midnight-slate font-medium">
                    DNS Leak Test
                  </span>
                  <span className="text-cyber-jade font-mono font-bold">
                    PASSED
                  </span>
                </div>
                <div className="w-full bg-hairline-slate h-1.5 rounded-full overflow-hidden">
                  <div
                    ref={dnsBarRef}
                    className="bg-cyber-jade h-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm mb-1.5">
                  <span className="font-body text-midnight-slate font-medium">
                    IPv6 Protection
                  </span>
                  <span className="text-cyber-jade font-mono font-bold">
                    ENABLED
                  </span>
                </div>
                <div className="w-full bg-hairline-slate h-1.5 rounded-full overflow-hidden">
                  <div
                    ref={ipv6BarRef}
                    className="bg-cyber-jade h-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-hairline-slate">
              <div>
                <p className="text-[11px] font-body text-cool-gray uppercase font-semibold">
                  Server Ping
                </p>
                <p
                  ref={pingValRef}
                  className="font-mono text-2xl font-bold text-electric-cobalt"
                >
                  14ms
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-body text-cool-gray uppercase font-semibold">
                  Trust Score
                </p>
                <p className="font-mono text-2xl font-bold text-midnight-slate">
                  98.4<span className="text-xs text-cool-gray">/100</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
