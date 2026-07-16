"use client";

import React, { useRef, useState } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ComparisonTable.css";

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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/NordVPN_logo.svg/1920px-NordVPN_logo.svg.png?_=20220226150306",
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
    dealUrl: "https://nordvpn.com",
  },
  {
    rank: 2,
    name: "Surfshark",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Surfshark_logo.svg/1920px-Surfshark_logo.svg.png?_=20230320181239",
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
    dealUrl: "https://surfshark.com",
  },
  {
    rank: 3,
    name: "ExpressVPN",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/ExpressVPN-logo.svg/1920px-ExpressVPN-logo.svg.png?_=20210118095637",
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
    dealUrl: "https://expressvpn.com",
  },
  {
    rank: 4,
    name: "CyberGhost",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/CyberGhostVPN_Logo.png",
    isEditorsChoice: false,
    overallScore: 9.2,
    speed: 90,
    privacy: 94,
    security: 95,
    unblocking: 93,
    price: "$2.19/mo",
    capabilities: [
      { label: "7-Device Limit", isPositive: true },
      { label: "NoSpy Servers", isPositive: true },
      { label: "No Audit Proof", isPositive: false },
    ],
    dealUrl: "https://cyberghostvpn.com",
  },
  {
    rank: 5,
    name: "Private Internet Access",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Private_Internet_Access_Logo_2021.svg/1920px-Private_Internet_Access_Logo_2021.svg.png?_=20210617015158",
    isEditorsChoice: false,
    overallScore: 9.1,
    speed: 89,
    privacy: 96,
    security: 93,
    unblocking: 91,
    price: "$2.03/mo",
    capabilities: [
      { label: "Proven No-Logs", isPositive: true },
      { label: "Highly Customizable", isPositive: true },
      { label: "US Jurisdiction", isPositive: false },
    ],
    dealUrl: "https://privateinternetaccess.com",
  },
  {
    rank: 6,
    name: "Proton VPN",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/ProtonVPN_Logo.svg/1920px-ProtonVPN_Logo.svg.png?_=20190918192521",
    isEditorsChoice: false,
    overallScore: 9.3,
    speed: 91,
    privacy: 98,
    security: 97,
    unblocking: 88,
    price: "$4.99/mo",
    capabilities: [
      { label: "Swiss Privacy", isPositive: true },
      { label: "Open Source Apps", isPositive: true },
      { label: "Higher Base Price", isPositive: false },
    ],
    dealUrl: "https://protonvpn.com",
  },
  {
    rank: 7,
    name: "IPVanish",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvvhILmsJCwY4TkjKFfJAYpenvtLS0K_rYMR29EOGzXuTDAsY1Zgji0M&s=10",
    isEditorsChoice: false,
    overallScore: 8.8,
    speed: 87,
    privacy: 90,
    security: 91,
    unblocking: 89,
    price: "$3.25/mo",
    capabilities: [
      { label: "Unlimited Devices", isPositive: true },
      { label: "Owned Network", isPositive: true },
      { label: "Complex Setup", isPositive: false },
    ],
    dealUrl: "https://ipvanish.com",
  },
  {
    rank: 8,
    name: "Mullvad VPN",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzMf5VeWs1wO6YBuurmrgF1OJKdLlN9uERitUAHSV8A&s=10",
    isEditorsChoice: false,
    overallScore: 9.0,
    speed: 88,
    privacy: 99,
    security: 95,
    unblocking: 72,
    price: "$5.40/mo",
    capabilities: [
      { label: "No Email Needed", isPositive: true },
      { label: "Cash Payments", isPositive: true },
      { label: "Weak Unblocking", isPositive: false },
    ],
    dealUrl: "https://mullvad.net",
  },
  {
    rank: 9,
    name: "Windscribe",
    logoUrl:
      "https://i.pcmag.com/imagery/reviews/04nsFjYxgdcYmKbESqG7dSM-9..v1718650718.jpg",
    isEditorsChoice: false,
    overallScore: 8.7,
    speed: 85,
    privacy: 92,
    security: 90,
    unblocking: 92,
    price: "$5.75/mo",
    capabilities: [
      { label: "R.O.B.E.R.T. Blocker", isPositive: true },
      { label: "Config Gen", isPositive: true },
      { label: "Small Network", isPositive: false },
    ],
    dealUrl: "https://windscribe.com",
  },
  {
    rank: 10,
    name: "VyprVPN",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxa-64iU6EbGBRf8Jok7um6Ym5MrD601cDpsYyGQJ55DOgBMT8D1toriV&s=10",
    isEditorsChoice: false,
    overallScore: 8.5,
    speed: 82,
    privacy: 93,
    security: 92,
    unblocking: 85,
    price: "$5.00/mo",
    capabilities: [
      { label: "Chameleon Tech", isPositive: true },
      { label: "Self-Owned Server", isPositive: true },
      { label: "Support Speed", isPositive: false },
    ],
    dealUrl: "https://vyprvpn.com",
  },
];

interface ActiveDeal {
  vpnName: string;
  logoUrl: string;
  discount: number;
  couponCode: string;
  dealUrl: string;
}

export default function ComparisonTable() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDeal, setActiveDeal] = useState<ActiveDeal | null>(null);
  const [copied, setCopied] = useState(false);

  const visibleVPNs = isExpanded ? vpnData : vpnData.slice(0, 5);

  // GSAP animation for initial view
  useGSAP(
    () => {
      const cards = cardsRef.current?.children;
      if (cards) {
        // Only animate initial batch
        const initialCards = Array.from(cards).slice(0, 5);
        gsap.fromTo(
          initialCards,
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

  // GSAP animation when Show More is triggered
  useGSAP(
    () => {
      if (isExpanded) {
        const cards = cardsRef.current?.children;
        if (cards && cards.length > 5) {
          const newCards = Array.from(cards).slice(5);
          gsap.fromTo(
            newCards,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            }
          );
        }
      }
    },
    { dependencies: [isExpanded], scope: containerRef }
  );

  const handleGetDeal = (vpn: VPNDatum) => {
    const discount = Math.floor(Math.random() * 31) + 40; // Random 40% - 70%
    const cleanName = vpn.name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    const couponCode = `${cleanName}${discount}`;
    
    setActiveDeal({
      vpnName: vpn.name,
      logoUrl: vpn.logoUrl,
      discount,
      couponCode,
      dealUrl: vpn.dealUrl,
    });
    setCopied(false);
  };

  const handleCopyAndGo = () => {
    if (!activeDeal) return;
    
    navigator.clipboard.writeText(activeDeal.couponCode);
    setCopied(true);
    
    // Redirect after brief delay so user sees "Copied!" feedback
    setTimeout(() => {
      window.open(activeDeal.dealUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  return (
    <section
      ref={containerRef}
      id="compare"
      className="bg-ice-wash/30 py-20 border-y border-hairline-slate"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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
          {visibleVPNs.map((vpn) => (
            <div
              key={vpn.name}
              className={`bg-pure-white border border-hairline-slate rounded-card p-4 sm:p-6 shadow-subtle flex flex-col xl:flex-row gap-6 xl:gap-8 items-center transition-all duration-300 hover:border-cool-gray/40 hover:shadow-floating ${
                vpn.rank === 1 ? "" : "opacity-95"
              }`}
            >
              {/* Left Column: Rank, Logo, Brand Name & Badge */}
              <div className="flex items-center gap-4 sm:gap-6 w-full xl:w-1/4 select-none">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-midnight-slate flex items-center justify-center text-pure-white font-mono text-lg md:text-2xl font-bold border-2 md:border-4 border-hairline-slate">
                  {vpn.rank}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="w-24 h-7 md:w-28 md:h-8 bg-contain bg-no-repeat bg-left"
                    style={{ backgroundImage: `url('${vpn.logoUrl}')` }}
                    title={vpn.name}
                  ></div>
                  <span className="font-headline text-sm font-bold text-midnight-slate tracking-tight">
                    {vpn.name}
                  </span>
                  {vpn.isEditorsChoice && (
                    <span className="text-[10px] font-mono font-bold text-cyber-jade uppercase tracking-widest mt-0.5">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4">
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
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                  {vpn.capabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className={`capability-tag ${
                        cap.isPositive
                          ? "capability-tag-positive"
                          : "capability-tag-negative"
                      }`}
                    >
                      {cap.isPositive ? (
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
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
                          className="w-3.5 h-3.5 shrink-0"
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
                      <span>{cap.label}</span>
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
                <Button 
                  onClick={() => handleGetDeal(vpn)} 
                  className="w-auto active:scale-[0.97] whitespace-nowrap"
                >
                  Get Deal
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="secondary"
            onClick={() => setIsExpanded(!isExpanded)}
            className="nh-btn-more px-8 py-3.5 group"
          >
            <span>{isExpanded ? "Show Less" : "Show More VPNs"}</span>
            <svg
              className={`w-4 h-4 nh-btn-more-icon ${
                isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Premium Deal Modal/Popup */}
      {activeDeal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          {/* Modal Overlay Close Handler */}
          <div 
            className="absolute inset-0 cursor-default" 
            onClick={() => setActiveDeal(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="bg-pure-white border border-hairline-slate rounded-card shadow-floating max-w-md w-full max-h-[calc(100vh-2rem)] overflow-y-auto relative p-5 sm:p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200 z-10">
            {/* Close Button */}
            <button
              onClick={() => setActiveDeal(null)}
              className="absolute top-4 right-4 text-cool-gray hover:text-midnight-slate p-1.5 hover:bg-frost-canvas rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
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
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Discount Stamp */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-electric-cobalt/5 border border-electric-cobalt/25 flex flex-col items-center justify-center mb-4 sm:mb-6 shadow-inner select-none animate-pulse">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-electric-cobalt">
                {activeDeal.discount}%
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-electric-cobalt/80 tracking-widest uppercase">
                OFF
              </span>
            </div>

            {/* Title & Brand */}
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-midnight-slate mb-1 sm:mb-2">
              Exclusive Deal Unlocked!
            </h3>
            <p className="font-body text-xs sm:text-sm text-cool-gray max-w-sm mb-4 sm:mb-6">
              You have successfully claimed a special coupon for{" "}
              <strong className="text-midnight-slate">{activeDeal.vpnName}</strong>.
            </p>

            {/* Brand Logo & Name Area */}
            <div className="flex items-center gap-3 bg-frost-canvas border border-hairline-slate px-4 py-2 sm:py-2.5 rounded-inner mb-4 sm:mb-6">
              <div
                className="w-24 h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url('${activeDeal.logoUrl}')` }}
                title={activeDeal.vpnName}
              ></div>
            </div>

            {/* Coupon Code Block */}
            <div className="w-full bg-ice-wash/30 border border-dashed border-electric-cobalt/30 rounded-inner p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-electric-cobalt/50 transition-colors">
              <div className="flex flex-col text-center sm:text-left w-full sm:w-auto">
                <span className="text-[10px] font-mono text-cool-gray font-bold uppercase tracking-wider">
                  COUPON CODE
                </span>
                <span className="font-mono font-extrabold text-base sm:text-lg text-electric-cobalt tracking-wider select-all mt-0.5 break-all">
                  {activeDeal.couponCode}
                </span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(activeDeal.couponCode);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="w-full sm:w-auto text-xs font-semibold text-electric-cobalt hover:text-electric-cobalt/80 px-4 py-2 sm:px-2.5 sm:py-1.5 rounded-inner bg-pure-white border border-hairline-slate shadow-subtle cursor-pointer active:scale-95 transition-all text-center"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleCopyAndGo}
              className={`w-full py-3.5 active:scale-[0.98] transition-all duration-300 ${
                copied 
                  ? "bg-cyber-jade hover:bg-cyber-jade/95 shadow-none" 
                  : "bg-electric-cobalt hover:bg-electric-cobalt/95"
              }`}
            >
              <span className="flex items-center justify-center gap-2 w-full">
                {copied ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-bounce shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Redirecting to Homepage...</span>
                  </>
                ) : (
                  <>
                    <span>Copy Code & Go to Deal</span>
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </span>
            </Button>
            
            <p className="text-[11px] text-cool-gray font-medium mt-3 italic select-none">
              *Promo code automatically applied on checkout page.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

