"use client";

import React, { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface VPNCapability {
  label: string;
  isPositive: boolean;
}

interface VPNDatum {
  rank: number;
  name: string;
  logoUrl: string;
  isEditorsChoice: boolean;
  overallScore: number;
  speed: number;
  privacy: number;
  security: number;
  unblocking: number;
  price: string;
  capabilities: VPNCapability[];
  dealUrl: string;
}

const vpnData: VPNDatum[] = [
  {
    rank: 1,
    name: "NordVPN",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyYPt7hxMZbxrYPxtzYrxZ-977Ror7I5-vV1_kulYNwM6lrBuRbLQblGHqvpZmZN1PgEjAgbxDCckV0JntlZKoqbzeUglfsuL1LfCgR32T2OS5Hd-DVLJ1BZEObfIvgY5Ra_T8OjmVaz-23jRHo73XbOVVN07RNg2ZXiwh9rcMVmm0JVaXsVSwLb5wcCWkj_aAP2WLVxxndO0v3un697968AMmcrXmsyW9Z9xk-VzLgepUdi725jIh1rHsZTpCjwXSzfXu7C30x8",
    isEditorsChoice: true,
    overallScore: 9.8,
    speed: 98,
    privacy: 99,
    security: 97,
    unblocking: 96,
    price: "$2.99/mo",
    capabilities: [
      { label: "No-Logs Audited", isPositive: true },
      { label: "Diskless Servers", isPositive: true },
      { label: "Renewal Pricing", isPositive: false },
    ],
    dealUrl: "#",
  },
  {
    rank: 2,
    name: "Surfshark",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeUY8bIYo8lcXr2TtvZO0tN6AGGNKtxsK7xtkHycFhThp-pPaG19W0i-n9AY9TVoQB3SSp7ax16p4vYaihnsRU-xM_vfEvr28wfqMmjY_wyOnowwo2OhjwXGQSeHrNvVCkFCwEERFajD-fAXLvrIDrwGI-LjcuB0FNuHp-dv6DEknA2dVEaNketFVtUUCsmXjnTLSuhxBbI98GnldcHxUPQG1BwE1zc-O-vXJQdlI3H8BYtwQuNaGAI_RAfTgPMmoBwEcMgCqRh28",
    isEditorsChoice: false,
    overallScore: 9.6,
    speed: 96,
    privacy: 95,
    security: 94,
    unblocking: 98,
    price: "$2.19/mo",
    capabilities: [
      { label: "Unlimited Devices", isPositive: true },
      { label: "Dynamic MultiHop", isPositive: true },
      { label: "Support Delay", isPositive: false },
    ],
    dealUrl: "#",
  },
  {
    rank: 3,
    name: "ExpressVPN",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaMyhZ-a8LNVMsfph-gy4FvT_2QzpG2sGW9codYFKxnEHSxpIwIQ6bucXbS2_Uw6PIPUJQfQ9ghBE6N5fCw1Qb8DhYICqd17GO_jWMD2L9Zlnahbp18rFeQ_mVClNi120Y21N5JdyVjGdeZyvYlGXmyU9GnNn131Y9gRvwqDDjIkAPNHv9XufiFP4r_2oIalRpVbthnq2kvEKyVwhu5_Bjeu-Wf3NgNBHa3fyvD01nkDHmS600kg6NfJNwzSuxydG_D-nsYrbniQg",
    isEditorsChoice: false,
    overallScore: 9.4,
    speed: 92,
    privacy: 98,
    security: 96,
    unblocking: 94,
    price: "$6.67/mo",
    capabilities: [
      { label: "Lightway Protocol", isPositive: true },
      { label: "TrustedServer Tech", isPositive: true },
      { label: "Premium Cost", isPositive: false },
    ],
    dealUrl: "#",
  },
];

export default function ComparisonTable() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate comparison cards when entering view
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
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
      id="compare"
      className="bg-ice-wash/30 py-20 border-y border-hairline-slate"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-[32px] font-bold text-midnight-slate mb-4">
            Top Rated Security Providers
          </h2>
          <p className="font-body text-cool-gray max-w-2xl mx-auto">
            Our rigorous lab testing identifies the highest performing networks
            based on privacy engineering, speed overhead, and jurisdictional
            safety.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-6">
          {vpnData.map((vpn) => (
            <div
              key={vpn.name}
              className={`bg-pure-white border border-hairline-slate rounded-card p-6 shadow-subtle flex flex-col xl:flex-row gap-8 items-center transition-all duration-300 hover:border-slate-300 hover:shadow-floating ${
                vpn.rank === 1 ? "" : "opacity-95"
              }`}
            >
              {/* Left Column: Rank, Logo, Badge */}
              <div className="flex items-center gap-6 w-full xl:w-1/4 select-none">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-midnight-slate flex items-center justify-center text-pure-white font-mono text-xl md:text-2xl font-bold border-4 border-hairline-slate">
                  {vpn.rank}
                </div>
                <div className="flex flex-col">
                  <div
                    className="w-28 h-8 bg-contain bg-no-repeat bg-left"
                    style={{ backgroundImage: `url('${vpn.logoUrl}')` }}
                    title={vpn.name}
                  ></div>
                  {vpn.isEditorsChoice && (
                    <span className="text-[10px] font-mono font-bold text-cyber-jade mt-2 uppercase tracking-widest">
                      Editor's Choice
                    </span>
                  )}
                </div>

                {/* Overall Score Badge */}
                <div className="ml-auto xl:hidden bg-frost-canvas border border-hairline-slate px-3 py-1.5 rounded-inner flex items-center gap-1.5">
                  <span className="text-[10px] font-body text-cool-gray font-semibold uppercase">Score</span>
                  <span className="font-mono text-sm font-bold text-midnight-slate">{vpn.overallScore}</span>
                </div>
              </div>

              {/* Center Column: Ratings & Sub-metrics */}
              <div className="flex flex-col gap-4 flex-grow w-full xl:w-2/4">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <div className="flex justify-between text-[10px] mb-1 font-semibold text-cool-gray">
                      <span>SPEED</span>
                      <span className="font-mono">{vpn.speed}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-hairline-slate rounded-full overflow-hidden">
                      <div
                        className="h-full bg-electric-cobalt rounded-full transition-all duration-500"
                        style={{ width: `${vpn.speed}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1 font-semibold text-cool-gray">
                      <span>PRIVACY</span>
                      <span className="font-mono">{vpn.privacy}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-hairline-slate rounded-full overflow-hidden">
                      <div
                        className="h-full bg-electric-cobalt rounded-full transition-all duration-500"
                        style={{ width: `${vpn.privacy}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1 font-semibold text-cool-gray">
                      <span>SECURITY</span>
                      <span className="font-mono">{vpn.security}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-hairline-slate rounded-full overflow-hidden">
                      <div
                        className="h-full bg-electric-cobalt rounded-full transition-all duration-500"
                        style={{ width: `${vpn.security}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1 font-semibold text-cool-gray">
                      <span>UNBLOCKING</span>
                      <span className="font-mono">{vpn.unblocking}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-hairline-slate rounded-full overflow-hidden">
                      <div
                        className="h-full bg-electric-cobalt rounded-full transition-all duration-500"
                        style={{ width: `${vpn.unblocking}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Capability Badges */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {vpn.capabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-inner text-xs font-semibold select-none ${
                        cap.isPositive
                          ? "text-cyber-jade bg-jade-wash"
                          : "text-signal-crimson bg-crimson-wash"
                      }`}
                    >
                      {cap.isPositive ? (
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {cap.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Pricing & CTAs */}
              <div className="flex xl:flex-col items-center xl:items-end justify-between w-full xl:w-1/4 gap-4 pt-6 xl:pt-0 border-t xl:border-t-0 xl:border-l border-hairline-slate xl:pl-8">
                {/* Score badge for Desktop */}
                <div className="hidden xl:flex items-center gap-2 bg-frost-canvas border border-hairline-slate px-3.5 py-1 rounded-full mb-1">
                  <span className="text-[10px] font-body text-cool-gray font-semibold uppercase">Rating</span>
                  <span className="font-mono text-sm font-bold text-midnight-slate">{vpn.overallScore}</span>
                </div>
                <div className="text-left xl:text-right">
                  <p className="text-[11px] text-cool-gray font-semibold">
                    STARTING AT
                  </p>
                  <p className="font-mono text-2xl font-bold text-midnight-slate">
                    {vpn.price}
                  </p>
                </div>
                <Button className="w-full sm:w-auto active:scale-[0.97] whitespace-nowrap">
                  Get Deal
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
