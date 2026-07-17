"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import DealModal, { DealData } from "../../components/DealModal";
import Pagination from "../../components/Pagination";
import { reviewsData, ReviewData } from "../../data/reviews";

export default function ReviewsPage() {
  const [selectedOS, setSelectedOS] = useState<string>("All");
  const [activeDeal, setActiveDeal] = useState<DealData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const osList = ["All", "Windows", "Mac", "Android", "iOS"];
  const itemsPerPage = 3;

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
              onClick={() => {
                setSelectedOS(os);
                setCurrentPage(1);
              }}
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
        <div id="reviews-list-container" className="space-y-6">
          {reviewsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((vpn) => (
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
                <p className="font-body text-sm text-cool-gray leading-relaxed">
                  {vpn.summary}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-cool-gray font-bold uppercase tracking-wider">
                    Key Advantages
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vpn.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm font-body text-midnight-slate leading-relaxed">
                        <svg
                          className="w-4 h-4 text-cyber-jade shrink-0 mt-1"
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

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(reviewsData.length / itemsPerPage)}
          totalItems={reviewsData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          scrollTargetId="reviews-list-container"
          className="mt-12"
        />
      </div>

      {/* Premium Deal Modal/Popup */}
      <DealModal deal={activeDeal} onClose={() => setActiveDeal(null)} />
    </div>
  );
}
