"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "../components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 20) {
        gsap.to(headerRef.current, {
          height: "60px",
          boxShadow: "rgba(15, 23, 42, 0.08) 0px 12px 32px -8px",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(headerRef.current, {
          height: "72px",
          boxShadow: "rgba(15, 23, 42, 0.03) 0px 4px 12px -4px",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full h-[72px] bg-pure-white border-b border-hairline-slate shadow-subtle z-50 flex items-center"
    >
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-3">
          <Image
            alt="PrivacyRank Logo"
            width={32}
            height={32}
            src="/logo.png"
            className="rounded-md"
            priority
          />
          <span className="font-headline text-[20px] font-extrabold text-midnight-slate tracking-tight select-none">
            PrivacyRank
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-electric-cobalt font-semibold border-b-2 border-electric-cobalt pb-1 font-body text-sm"
            href="#"
          >
            Home
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#compare"
          >
            VPN Reviews
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#features"
          >
            Best VPNs
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#faq"
          >
            Guides
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#footer"
          >
            About Us
          </a>
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="active:scale-[0.97]">
            Compare Deals
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="block md:hidden text-midnight-slate p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-pure-white border-b border-hairline-slate shadow-floating z-40 p-6 flex flex-col gap-4 md:hidden">
          <a
            className="text-electric-cobalt font-semibold font-body text-sm"
            href="#"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#compare"
            onClick={() => setIsOpen(false)}
          >
            VPN Reviews
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#features"
            onClick={() => setIsOpen(false)}
          >
            Best VPNs
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#faq"
            onClick={() => setIsOpen(false)}
          >
            Guides
          </a>
          <a
            className="text-midnight-slate hover:text-electric-cobalt transition-colors font-body text-sm font-medium"
            href="#footer"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <Button
            variant="outline"
            className="w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Compare Deals
          </Button>
        </div>
      )}
    </header>
  );
}
