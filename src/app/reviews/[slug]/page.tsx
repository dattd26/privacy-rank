"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import DealModal, { DealData } from "../../../components/DealModal";
import { reviewsData, ReviewData } from "../../../data/reviews";

export default function ReviewDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [activeDeal, setActiveDeal] = useState<DealData | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-verdict");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const review = reviewsData.find((r) => r.slug === slug);

  useEffect(() => {
    if (!review || review.slug !== "nordvpn") return;

    const sectionIds = ["quick-verdict", ...review.sections.map((s) => s.id), "faq-section"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-20% 0px -60% 0px", 
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [review]);

  if (!review) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-headline font-bold text-midnight-slate mb-4">Review Not Found</h1>
        <p className="font-body text-cool-gray mb-8">The requested VPN review could not be found in our database.</p>
        <Link href="/reviews">
          <Button>Back to Reviews</Button>
        </Link>
      </div>
    );
  }

  if (review.slug !== "nordvpn") {
    return (
      <div className="bg-frost-canvas min-h-screen py-12 flex flex-col justify-center items-center">
        <div className="max-w-xl w-full mx-auto px-6 text-center">
          <Breadcrumbs items={[{ label: "Reviews", href: "/reviews" }, { label: review.name }]} className="justify-center mb-6" />
          
          <div className="bg-pure-white border border-hairline-slate rounded-card p-8 shadow-floating flex flex-col items-center">
            <div
              className="w-32 h-10 bg-contain bg-no-repeat bg-center mb-6"
              style={{ backgroundImage: `url('${review.logoUrl}')` }}
            ></div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-jade/5 border border-cyber-jade/25 text-[10px] font-mono font-bold text-cyber-jade uppercase tracking-wider mb-4 animate-pulse">
              Under Lab Audit
            </div>
            <h1 className="font-headline text-2xl font-extrabold text-midnight-slate mb-3">
              Detailed Audit in Progress
            </h1>
            <p className="font-body text-xs text-cool-gray leading-relaxed mb-6">
              Our engineering team is currently stress-testing the {review.name} server fleet, validating their zero-logs assertions, and auditing their encryption handshakes. The full, multi-metric analytical review is scheduled for release soon.
            </p>

            <div className="p-4 border border-hairline-slate rounded-inner bg-frost-canvas text-left w-full mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-headline font-bold text-midnight-slate">Preliminary Score</span>
                <span className="font-mono text-sm font-bold text-midnight-slate bg-pure-white border border-hairline-slate px-2 py-0.5 rounded-full">
                  {review.overallScore} / 10
                </span>
              </div>
              <div className="text-[11px] font-body text-cool-gray">
                Starting Price: <strong className="text-midnight-slate">{review.price}</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Link href="/reviews" className="flex-1">
                <Button variant="secondary" className="w-full py-3 text-xs">
                  Back to Reviews
                </Button>
              </Link>
              <Link href="/reviews/nordvpn" className="flex-1">
                <Button className="w-full py-3 text-xs">
                  Read NordVPN Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleGetDeal = () => {
    const discount = 68; 
    const couponCode = "NORDVPN68";

    setActiveDeal({
      vpnName: review.name,
      logoUrl: review.logoUrl,
      discount,
      couponCode,
      dealUrl: review.dealUrl,
    });
  };

  // Table of Contents navigation items
  const tocItems = [
    { id: "quick-verdict", label: "Expert Take" },
    { id: "speed-performance", label: "Speed & Performance" },
    { id: "security-privacy", label: "Security & Privacy" },
    { id: "server-network", label: "Server Network" },
    { id: "streaming-torrenting", label: "Streaming & Torrenting" },
    { id: "pricing-plans", label: "Pricing & Plans" },
    { id: "faq-section", label: "FAQs" },
  ];

  return (
    <div className="bg-frost-canvas min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Reviews", href: "/reviews" }, { label: review.name }]} />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 items-start">
          
          {/* LEFT COLUMN: Detailed Article (Colspan 2) */}
          <article className="lg:col-span-2 bg-pure-white border border-hairline-slate rounded-card shadow-subtle p-6 sm:p-10">
            
            {/* Article Header */}
            <header className="border-b border-hairline-slate pb-8 mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-full bg-electric-cobalt/5 border border-electric-cobalt/15 text-[10px] font-mono font-bold text-electric-cobalt uppercase tracking-wider">
                  Audited Review
                </div>
                <div className="text-[11px] font-body text-cool-gray">
                  Published: {review.publishedAt}
                </div>
                <div className="text-[11px] font-body text-cool-gray">•</div>
                <div className="text-[11px] font-body text-cool-gray">
                  {review.readTime}
                </div>
              </div>

              <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-midnight-slate leading-tight tracking-tight mb-4">
                {review.title}
              </h1>
              <p className="font-body text-cool-gray text-sm leading-relaxed mb-6">
                {review.subtitle}
              </p>

              {/* Author & Lab Verification */}
              <div className="flex items-center gap-3 p-3 bg-frost-canvas border border-hairline-slate rounded-inner">
                <div className="w-8 h-8 rounded-full bg-midnight-slate flex items-center justify-center text-pure-white font-headline text-xs font-bold border border-hairline-slate">
                  AM
                </div>
                <div>
                  <div className="text-xs font-headline font-bold text-midnight-slate">
                    {review.author}
                  </div>
                  <div className="text-[10px] font-body text-cyber-jade font-semibold uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyber-jade"></span>
                    Verified Lab Reviewer
                  </div>
                </div>
              </div>
            </header>

            {/* Quick Verdict */}
            <section id="quick-verdict" className="scroll-mt-24 mb-10">
              <h2 className="font-headline text-lg sm:text-xl font-bold text-midnight-slate mb-4 border-l-4 border-electric-cobalt pl-3">
                Quick Verdict: Our Expert Take
              </h2>
              <div
                className="font-body text-sm text-midnight-slate leading-relaxed"
                dangerouslySetInnerHTML={{ __html: review.sections[0].content }}
              />
            </section>

            {/* Pros & Cons Grid */}
            <section className="mb-10">
              <h3 className="font-headline text-sm font-bold text-midnight-slate mb-4 uppercase tracking-wider">
                Lab Assessment: Pros & Cons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pros Card */}
                <div className="bg-cyber-jade/[0.02] border border-cyber-jade/20 rounded-card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-cyber-jade/10 flex items-center justify-center text-cyber-jade">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="font-headline text-xs font-bold text-cyber-jade uppercase tracking-wider">
                      Key Advantages
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs font-body text-midnight-slate leading-relaxed">
                        <span className="text-cyber-jade font-semibold shrink-0">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons Card */}
                <div className="bg-red-500/[0.02] border border-red-500/20 rounded-card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="font-headline text-xs font-bold text-red-500 uppercase tracking-wider">
                      Limitations
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs font-body text-midnight-slate leading-relaxed">
                        <span className="text-red-500 font-semibold shrink-0">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Detailed Sub-Ratings */}
            <section className="mb-10 border-t border-b border-hairline-slate py-8">
              <h3 className="font-headline text-sm font-bold text-midnight-slate mb-6 uppercase tracking-wider">
                Detailed Lab Performance Ratings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {review.ratings.map((rate) => (
                  <div key={rate.category}>
                    <div className="flex justify-between text-xs mb-1.5 font-bold text-midnight-slate">
                      <span className="font-headline">{rate.category}</span>
                      <span className="font-mono text-electric-cobalt">{rate.score} / 10</span>
                    </div>
                    <div className="h-2 w-full bg-hairline-slate rounded-full overflow-hidden">
                      <div
                        className="h-full bg-electric-cobalt rounded-full transition-all duration-500"
                        style={{ width: `${rate.score * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Content Sections */}
            {review.sections.slice(1).map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-24 mb-10">
                <h2 className="font-headline text-lg sm:text-xl font-bold text-midnight-slate mb-4 border-l-4 border-electric-cobalt pl-3">
                  {sec.title}
                </h2>
                <div
                  className="font-body text-sm text-midnight-slate leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sec.content }}
                />
              </section>
            ))}

            {/* Specifications Comparison Table */}
            <section id="specs-table" className="mb-10">
              <h2 className="font-headline text-lg sm:text-xl font-bold text-midnight-slate mb-4 border-l-4 border-electric-cobalt pl-3">
                Full Technical Specifications
              </h2>
              <p className="font-body text-xs text-cool-gray mb-4">
                Our lab audits the technical infrastructure of NordVPN directly. Below is the audited system information for their current network release:
              </p>
              <div className="border border-hairline-slate rounded-card overflow-hidden">
                <table className="w-full text-left font-body text-xs border-collapse">
                  <tbody>
                    {review.specs.map((spec, idx) => (
                      <tr key={spec.label} className={idx % 2 === 0 ? "bg-pure-white" : "bg-frost-canvas"}>
                        <td className="p-3 font-headline font-bold text-midnight-slate border-r border-hairline-slate w-1/3">
                          {spec.label}
                        </td>
                        <td className="p-3 text-cool-gray w-2/3">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Accordion Section */}
            <section id="faq-section" className="scroll-mt-24 border-t border-hairline-slate pt-8">
              <h2 className="font-headline text-lg sm:text-xl font-bold text-midnight-slate mb-6 border-l-4 border-electric-cobalt pl-3">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {review.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border border-hairline-slate rounded-card bg-pure-white overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-4 flex justify-between items-center text-left font-headline text-xs sm:text-sm font-bold text-midnight-slate hover:bg-frost-canvas/50 transition-colors duration-200 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <svg
                          className={`w-4 h-4 text-cool-gray shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-electric-cobalt" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-40 border-t border-hairline-slate" : "max-h-0"
                        }`}
                      >
                        <div className="p-4 font-body text-xs sm:text-sm text-cool-gray leading-relaxed bg-frost-canvas/10">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </article>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-[88px] pb-10">
            
            {/* Score & CTA Card */}
            <div className="bg-pure-white border border-hairline-slate rounded-card shadow-subtle p-6 text-center">
              <div className="inline-flex items-center gap-1 bg-cyber-jade/5 border border-cyber-jade/20 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-cyber-jade uppercase tracking-wider mb-4">
                Editor's Rating
              </div>
              
              <div className="flex flex-col items-center justify-center mb-4">
                <span className="font-mono text-5xl font-extrabold text-midnight-slate">
                  {review.overallScore}
                </span>
                <span className="text-[10px] font-body text-cool-gray uppercase tracking-widest mt-1 font-semibold">
                  OUT OF 10
                </span>
              </div>

              <div className="text-center mb-6">
                <p className="text-[10px] text-cool-gray font-bold uppercase tracking-wider">Starting Price</p>
                <p className="font-mono text-2xl font-extrabold text-midnight-slate">{review.price}</p>
                <p className="text-[10px] text-cyber-jade font-semibold mt-1">30-Day Money Back Guarantee</p>
              </div>

              <Button
                onClick={handleGetDeal}
                className="w-full py-3.5 shadow-subtle active:scale-[0.98] transition-all"
              >
                Get Exclusive Deal
              </Button>
            </div>

            {/* Quick Specs Table Card */}
            <div className="bg-pure-white border border-hairline-slate rounded-card shadow-subtle p-5">
              <h3 className="font-headline text-xs font-bold text-midnight-slate uppercase tracking-wider border-b border-hairline-slate pb-3 mb-3">
                Quick Specifications
              </h3>
              <div className="space-y-3 font-body text-[11px]">
                {review.specs.slice(0, 5).map((spec) => (
                  <div key={spec.label} className="flex justify-between items-start gap-4">
                    <span className="font-semibold text-cool-gray text-left shrink-0">{spec.label}</span>
                    <span className="text-midnight-slate text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table of Contents Card */}
            <div className="bg-pure-white border border-hairline-slate rounded-card shadow-subtle p-5">
              <h3 className="font-headline text-xs font-bold text-midnight-slate uppercase tracking-wider border-b border-hairline-slate pb-3 mb-3">
                In This Review
              </h3>
              <nav className="flex flex-col gap-2.5">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`font-body text-xs font-semibold py-0.5 border-l-2 pl-3 transition-all duration-200 ${
                      activeSection === item.id
                        ? "border-electric-cobalt text-electric-cobalt"
                        : "border-transparent text-cool-gray hover:text-midnight-slate hover:border-cool-gray/30"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

        </div>
      </div>

      {/* Premium Deal Modal/Popup */}
      <DealModal deal={activeDeal} onClose={() => setActiveDeal(null)} />
    </div>
  );
}
