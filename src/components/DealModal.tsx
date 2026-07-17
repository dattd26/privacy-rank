"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

export interface DealData {
  vpnName: string;
  logoUrl: string;
  discount: number;
  couponCode: string;
  dealUrl: string;
}

interface DealModalProps {
  deal: DealData | null;
  onClose: () => void;
}

export default function DealModal({ deal, onClose }: DealModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [deal]);

  if (!deal) return null;

  const handleCopyAndGo = () => {
    navigator.clipboard.writeText(deal.couponCode);
    setCopied(true);

    // Redirect after brief delay so user sees "Copied!" feedback
    setTimeout(() => {
      window.open(deal.dealUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Modal Overlay Close Handler */}
      <div 
        className="absolute inset-0 cursor-default" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="bg-pure-white border border-hairline-slate rounded-card shadow-floating max-w-md w-full max-h-[calc(100vh-2rem)] overflow-y-auto relative p-5 sm:p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
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
            {deal.discount}%
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
          <strong className="text-midnight-slate">{deal.vpnName}</strong>.
        </p>

        {/* Brand Logo & Name Area */}
        <div className="flex items-center gap-3 bg-frost-canvas border border-hairline-slate px-4 py-2 sm:py-2.5 rounded-inner mb-4 sm:mb-6">
          <div
            className="w-24 h-6 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${deal.logoUrl}')` }}
            title={deal.vpnName}
          ></div>
        </div>

        {/* Coupon Code Block */}
        <div className="w-full bg-ice-wash/30 border border-dashed border-electric-cobalt/30 rounded-inner p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-electric-cobalt/50 transition-colors">
          <div className="flex flex-col text-center sm:text-left w-full sm:w-auto">
            <span className="text-[10px] font-mono text-cool-gray font-bold uppercase tracking-wider">
              COUPON CODE
            </span>
            <span className="font-mono font-extrabold text-base sm:text-lg text-electric-cobalt tracking-wider select-all mt-0.5 break-all">
              {deal.couponCode}
            </span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(deal.couponCode);
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
                <span>Redirecting to Partner...</span>
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
  );
}
