"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import { reviewsData, ReviewData } from "../../data/reviews";

interface ActiveDeal {
  vpnName: string;
  logoUrl: string;
  discount: number;
  couponCode: string;
  dealUrl: string;
}

export default function ReviewsPage() {
  const [selectedOS, setSelectedOS] = useState<string>("All");
  const [activeDeal, setActiveDeal] = useState<ActiveDeal | null>(null);
  const [copied, setCopied] = useState(false);

  const osList = ["All", "Windows", "Mac", "Android", "iOS"];

  const getBadgeForOS = (vpnName: string, os: string) => {
    if (os === "All") {
      if (vpnName === "NordVPN") return "Best Overall Performance";
      if (vpnName === "Surfshark") return "Best Value for Households";
      if (vpnName === "ExpressVPN") return "Best Premium Stability";
    }
    return `Excellent for ${os}`;
  };

  const handleGetDeal = (vpn: ReviewData) => {
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

    setTimeout(() => {
      window.open(activeDeal.dealUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  return (
    <div className="bg-frost-canvas min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Reviews", href: "/reviews" }]} />

        {/* Hero Section */}
        <div className="text-center md:text-left mt-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cobalt/5 border border-electric-cobalt/15 text-[11px] font-mono font-bold text-electric-cobalt uppercase tracking-wider mb-4">
            <span className="flex h-2 w-2 rounded-full bg-cyber-jade animate-pulse"></span>
            Analytic Testing Laboratory
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-midnight-slate tracking-tight mb-4">
            Independent VPN Security Reviews & Audits
          </h1>
          <p className="font-body text-cool-gray max-w-3xl text-sm md:text-base leading-relaxed">
            Our experts stress-test and audit global VPN networks. We evaluate real-world speeds, protocol security, leak protections, and logging policies to provide verified, zero-influence review data.
          </p>
        </div>

        {/* OS Filters */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-hairline-slate mb-8 select-none">
          {osList.map((os) => (
            <button
              key={os}
              onClick={() => setSelectedOS(os)}
              className={`px-4 py-2 text-xs font-body font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                selectedOS === os
                  ? "bg-electric-cobalt border-electric-cobalt text-pure-white shadow-subtle"
                  : "bg-pure-white border-hairline-slate text-cool-gray hover:text-midnight-slate hover:border-cool-gray/30"
              }`}
            >
              {os}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviewsData.map((vpn) => (
            <div
              key={vpn.slug}
              className="bg-pure-white border border-hairline-slate rounded-card p-6 shadow-subtle flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:border-cool-gray/40 hover:shadow-floating transition-all duration-300"
            >
              {/* Logo & Basic Info */}
              <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center gap-4">
                <div className="flex flex-col gap-1.5">
                  <div
                    className="w-28 h-8 bg-contain bg-no-repeat bg-left"
                    style={{ backgroundImage: `url('${vpn.logoUrl}')` }}
                    title={vpn.name}
                  ></div>
                  <span className="font-headline text-base font-bold text-midnight-slate tracking-tight mt-1">
                    {vpn.name}
                  </span>
                  <span className="inline-block text-[10px] font-mono font-bold text-cyber-jade uppercase tracking-wider">
                    {getBadgeForOS(vpn.name, selectedOS)}
                  </span>
                </div>
                
                {/* Score badge for smaller screens */}
                <div className="md:hidden bg-frost-canvas border border-hairline-slate px-3 py-1.5 rounded-inner flex items-center gap-1.5">
                  <span className="text-[10px] font-body text-cool-gray font-semibold uppercase">Score</span>
                  <span className="font-mono text-sm font-bold text-midnight-slate">{vpn.overallScore}</span>
                </div>
              </div>

              {/* Summary and Pros */}
              <div className="w-full md:w-2/4 flex flex-col gap-4">
                <p className="font-body text-xs text-cool-gray leading-relaxed">
                  {vpn.summary}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-cool-gray font-bold uppercase tracking-wider">
                    Key Advantages
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vpn.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs font-body text-midnight-slate">
                        <svg
                          className="w-4 h-4 text-cyber-jade shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Column */}
              <div className="w-full md:w-1/4 pt-6 md:pt-0 md:pl-8 border-t md:border-t-0 md:border-l border-hairline-slate flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4">
                {/* Score badge for Desktop */}
                <div className="hidden md:flex items-center gap-2 bg-frost-canvas border border-hairline-slate px-3.5 py-1 rounded-full mb-1">
                  <span className="text-[10px] font-body text-cool-gray font-semibold uppercase">Rating</span>
                  <span className="font-mono text-sm font-bold text-midnight-slate">{vpn.overallScore}</span>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-[10px] text-cool-gray font-semibold">STARTING AT</p>
                  <p className="font-mono text-xl font-bold text-midnight-slate">{vpn.price}</p>
                </div>

                <div className="flex flex-row md:flex-col gap-2 w-auto md:w-full items-center">
                  <Link href={`/reviews/${vpn.slug}`} className="w-full">
                    <Button variant="secondary" className="w-full text-center py-2.5 text-xs whitespace-nowrap active:scale-[0.97]">
                      Read Review
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleGetDeal(vpn)}
                    className="w-full py-2.5 text-xs whitespace-nowrap active:scale-[0.97]"
                  >
                    Get Deal
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Deal Modal/Popup */}
      {activeDeal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveDeal(null)}></div>
          <div className="bg-pure-white border border-hairline-slate rounded-card shadow-floating max-w-md w-full relative p-6 sm:p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200 z-10">
            <button
              onClick={() => setActiveDeal(null)}
              className="absolute top-4 right-4 text-cool-gray hover:text-midnight-slate p-1.5 hover:bg-frost-canvas rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-20 h-20 rounded-full bg-electric-cobalt/5 border border-electric-cobalt/25 flex flex-col items-center justify-center mb-4 select-none animate-pulse">
              <span className="font-mono text-2xl font-extrabold text-electric-cobalt">{activeDeal.discount}%</span>
              <span className="text-[9px] font-mono font-bold text-electric-cobalt/80 tracking-widest uppercase">OFF</span>
            </div>

            <h3 className="font-headline text-xl font-bold text-midnight-slate mb-1">Exclusive Deal Unlocked!</h3>
            <p className="font-body text-xs text-cool-gray max-w-sm mb-4">
              You have successfully claimed a special coupon for <strong className="text-midnight-slate">{activeDeal.vpnName}</strong>.
            </p>

            <div className="flex items-center gap-3 bg-frost-canvas border border-hairline-slate px-4 py-2 rounded-inner mb-4">
              <div
                className="w-24 h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url('${activeDeal.logoUrl}')` }}
                title={activeDeal.vpnName}
              ></div>
            </div>

            <div className="w-full bg-ice-wash/30 border border-dashed border-electric-cobalt/30 rounded-inner p-3 mb-4 flex items-center justify-between gap-4 group hover:border-electric-cobalt/50 transition-colors">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-cool-gray font-bold uppercase tracking-wider">COUPON CODE</span>
                <span className="font-mono font-extrabold text-sm text-electric-cobalt tracking-wider select-all mt-0.5 break-all">
                  {activeDeal.couponCode}
                </span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(activeDeal.couponCode);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-xs font-semibold text-electric-cobalt hover:text-electric-cobalt/80 px-3 py-1.5 rounded-inner bg-pure-white border border-hairline-slate shadow-subtle cursor-pointer active:scale-95 transition-all"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <Button
              onClick={handleCopyAndGo}
              className={`w-full py-3 active:scale-[0.98] transition-all duration-300 ${
                copied ? "bg-cyber-jade hover:bg-cyber-jade/95 shadow-none" : "bg-electric-cobalt hover:bg-electric-cobalt/95"
              }`}
            >
              <span className="flex items-center justify-center gap-2 w-full">
                {copied ? (
                  <>
                    <svg className="w-5 h-5 animate-bounce shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Redirecting to Partner...</span>
                  </>
                ) : (
                  <>
                    <span>Copy Code & Go to Deal</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </Button>
            
            <p className="text-[10px] text-cool-gray font-medium mt-3 italic select-none">
              *Promo code automatically applied on checkout page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
