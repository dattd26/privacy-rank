"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        // Animate open
        gsap.to(answerRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(iconRef.current, {
          rotation: 180,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Animate close
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(iconRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="border-t border-hairline-slate py-6 group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center select-none">
        <h4 className="font-headline text-base md:text-lg font-semibold text-midnight-slate group-hover:text-electric-cobalt transition-colors duration-200">
          {question}
        </h4>
        <span
          ref={iconRef}
          className="w-5 h-5 flex items-center justify-center text-cool-gray group-hover:text-electric-cobalt transition-colors duration-200"
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
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      <div
        ref={answerRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="pt-4 font-body text-sm text-cool-gray leading-relaxed pr-8">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'How do you verify "No-Logs" claims?',
      answer:
        "We don't just take the provider's word. Our team analyzes published third-party audit reports from firms like PwC or Cure53, checks for a history of legal compliance requests (warrant canaries), and verifies if the infrastructure uses RAM-only servers which physically cannot store data.",
    },
    {
      question: "What is the \"Analytic Laboratory\" methodology?",
      answer:
        "Our methodology consists of over 120 individual test points including speed tests across 5 continents, DNS/IPv6/WebRTC leak diagnostics, unblocking success rates for 15+ streaming platforms, and technical deep-dives into application source code.",
    },
    {
      question: "Is PrivacyRank truly independent?",
      answer:
        "Yes. While we participate in affiliate programs to maintain our lab infrastructure, rankings are strictly determined by technical performance scores. We never accept payment to change a ranking or remove negative test results from our reports.",
    },
    {
      question: "Why should I care about 2026 security standards?",
      answer:
        "As decryption technologies and ISP tracking methods evolve, staying with outdated protocols puts your data at risk. Our 2026 index focuses on post-quantum ready encryption and the newest iterations of the WireGuard protocol.",
    },
  ];

  return (
    <section id="faq" className="max-w-4xl mx-auto px-8 py-20 lg:py-24">
      <h2 className="font-headline text-[32px] font-bold text-midnight-slate mb-12 text-center">
        Frequently Asked Lab Questions
      </h2>
      <div className="space-y-0 border-b border-hairline-slate">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
