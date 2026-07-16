import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="w-full py-16 bg-pure-white border-t border-hairline-slate mt-auto">
      <div className="flex flex-col items-center justify-center space-y-6 px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            alt="PrivacyRank Small Logo"
            width={24}
            height={24}
            src="/logo.png"
            className="rounded-md opacity-80"
          />
          <span className="font-headline text-lg font-extrabold text-midnight-slate select-none">
            PrivacyRank
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] font-body font-bold uppercase tracking-widest">
          <a className="text-cool-gray hover:text-electric-cobalt transition-colors duration-200" href="#">
            Affiliate Disclosure
          </a>
          <a className="text-cool-gray hover:text-electric-cobalt transition-colors duration-200" href="#">
            Privacy Policy
          </a>
          <a className="text-cool-gray hover:text-electric-cobalt transition-colors duration-200" href="#">
            Terms of Service
          </a>
          <a className="text-cool-gray hover:text-electric-cobalt transition-colors duration-200" href="#">
            Contact
          </a>
          <a className="text-cool-gray hover:text-electric-cobalt transition-colors duration-200" href="#">
            Methodology
          </a>
        </div>

        <div className="max-w-2xl text-center">
          <p className="font-body text-[11px] leading-relaxed text-cool-gray">
            © 2026 PrivacyRank. Analytic laboratory of digital sovereignty. High-precision cybersecurity reviews. The information provided is for educational purposes. We may earn a commission from products purchased through our links, which helps maintain our independent research laboratory.
          </p>
        </div>
      </div>
    </footer>
  );
}
