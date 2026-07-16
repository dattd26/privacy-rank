"use client";

import React, { useState, useRef, useEffect } from "react";
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
          <svg
            className="w-15 h-15 select-none"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer shield path using electric-cobalt brand blue */}
            <path
              className="fill-electric-cobalt"
              d="M340.721 271.696L341.669 271.662C350.427 271.37 360.905 271.645 369.838 271.65L419.999 271.589L574.842 271.625L663.522 271.564L690.772 271.53C705.588 271.511 714.619 271.081 726.107 282.05C733.645 289.145 737.965 299.005 738.072 309.357C738.23 323.052 731.025 336.467 718.985 343.032C706.103 350.056 685.197 347.929 670.513 347.922L603.02 347.864C599.444 339.207 593.621 332.147 585.017 328.159C576.777 324.35 567.354 324.004 558.858 327.201C548.233 331.194 543.14 337.878 538.647 347.845C501.715 348.708 463.349 347.336 426.271 347.863C412.221 348.063 394.451 347.166 380.824 348.027C372.433 348.598 364.622 352.515 359.145 358.899C355.475 363.138 353.002 368.28 351.98 373.793C351.023 379.211 351.309 402.79 351.487 409.509C352.072 431.604 350.35 456.728 352.115 478.469C357.348 542.95 388.544 589.347 436.2 630.604C458.645 649.936 488.895 667.14 514.307 682.187C520.95 678.397 531.238 670.738 538.708 669.338C549.197 667.372 565.68 668.157 576.636 668.221C602.351 668.274 628.063 668.653 653.768 669.359C629.237 688.482 604.174 706.913 578.609 724.63C554.88 740.825 524.32 765.322 494.525 750.738C458.618 733.162 424.423 707.449 393.082 682.617C333.954 635.768 294.472 562.57 287.391 487.547C286.134 474.298 286.53 459.345 286.516 445.768L286.51 384.573L286.515 345.248C286.514 337.368 286.152 325.766 287.461 318.317C289.252 308.68 293.481 299.662 299.745 292.124C310.571 279.356 324.234 272.988 340.721 271.696Z"
            />
            {/* Inner details (lock/tick) using cyber-jade brand green */}
            <path
              className="fill-cyber-jade"
              d="M463.824 468.523L539.911 468.588C563.546 468.603 587.507 468.861 611.098 468.53C619.537 490.136 644.877 498.696 662.931 481.667C666.83 477.99 669.092 473.376 671.272 468.52C681.882 468.689 697.742 467.683 707.163 471.365C717.062 475.336 724.952 483.117 729.059 492.96C733.251 502.701 733.343 513.721 729.314 523.531C724.727 534.413 716.829 541.13 706.133 545.547C695.518 549.204 652.155 547.906 638.858 547.895L555.936 547.655C550.883 539.446 545.757 533.51 536.416 529.991C528.547 526.959 519.793 527.193 512.096 530.639C503.387 534.585 497.351 541.176 493.986 550.052C478.382 550.411 463.202 551.901 451.076 539.986C435.643 524.82 440.884 508.034 440.587 489.398C442.12 488.903 443.634 488.351 445.126 487.746C454.053 484.056 460.179 477.343 463.824 468.523Z"
            />
            <path
              className="fill-cyber-jade"
              d="M382.387 368.629C400.175 368.065 420.173 368.496 438.115 368.476L538.701 368.517C539.025 369.747 539.383 370.967 539.775 372.176C543.47 383.291 554.714 391.046 566 392.505C573.423 393.465 578.099 392.038 585.016 389.675C589.223 397.359 593.486 403.16 598.244 410.357C604.491 419.805 609.914 427.9 617.008 436.775C614.045 440.667 612.651 443.115 610.786 447.554L473.25 447.497L464.324 447.514C458.311 430.457 441.57 419.407 423.567 425.128C415.154 427.804 408.161 433.734 404.145 441.596C399.824 450.164 399.43 459.253 402.521 468.271C405.408 476.456 411.42 483.164 419.242 486.927C420.326 514.801 411.941 525.648 390.541 542.281C384.901 532.015 379.887 516.755 377.38 505.259C375.243 495.531 373.835 485.657 373.167 475.72C371.037 444.347 373.634 410.034 372.578 378.353C372.38 372.42 377.139 369.683 382.387 368.629Z"
            />
            <path
              className="fill-cyber-jade"
              d="M425.412 539.394C427.009 540.959 430.373 548.477 434.609 552.654C453.846 571.619 468.568 570.626 493.243 570.991C494.054 573.22 494.808 574.935 495.838 577.082C506.02 598.314 535.617 601.618 550.547 583.543C554.53 578.72 556.02 574.595 557.879 568.551C590.17 569.151 622.432 568.24 655.022 568.575C677.672 567.995 696.052 586.779 695.258 609.404C694.817 621.981 689.338 630.587 680.278 638.891C675.232 642.966 669.238 645.698 662.852 646.835C656.437 648.039 641.43 647.544 634.411 647.517L575.038 647.429C551.605 647.412 535.099 645.043 514.04 657.589C506.754 654.53 494.325 646.271 487.454 642.031C454.729 621.836 421.595 594.105 400.82 561.145C410.776 553.062 416.127 548.275 425.412 539.394Z"
            />
            <path
              className="fill-cyber-jade"
              d="M603.294 368.465L692.7 368.367C706.358 368.372 716.604 370.097 726.762 380.407C734.122 387.999 738.156 398.21 737.972 408.783C737.826 421.248 732.861 430.018 724.232 438.523C709.226 450.709 691.42 447.786 672.5 447.63C665.919 430.984 652.189 422.244 634.259 425.631C622.205 409.574 611.557 391.845 599.865 375.541C601.677 372.556 602.105 371.762 603.294 368.465Z"
            />
          </svg>
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
