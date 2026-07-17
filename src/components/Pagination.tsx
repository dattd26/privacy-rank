import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  className?: string;
  scrollTargetId?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  className = "",
  scrollTargetId,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    onPageChange(page);
    if (scrollTargetId) {
      document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-hairline-slate ${className}`}>
      <span className="font-body text-xs text-cool-gray">
        Showing <span className="font-semibold text-midnight-slate">{startIndex}</span>–
        <span className="font-semibold text-midnight-slate">{endIndex}</span> of{" "}
        <span className="font-semibold text-midnight-slate">{totalItems}</span> reviews
      </span>

      <div className="flex items-center gap-1.5 select-none">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`flex items-center justify-center p-2 rounded-inner border transition-all duration-200 cursor-pointer ${
            currentPage === 1
              ? "bg-pure-white/50 border-hairline-slate/50 text-cool-gray/40 cursor-not-allowed"
              : "bg-pure-white border-hairline-slate text-cool-gray hover:text-midnight-slate hover:border-cool-gray/30 active:scale-95"
          }`}
          aria-label="Previous Page"
        >
          <CaretLeft size={16} weight="bold" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`flex items-center justify-center min-w-[36px] h-9 px-3 text-xs font-body font-semibold rounded-inner border transition-all duration-200 cursor-pointer active:scale-95 ${
              currentPage === page
                ? "bg-electric-cobalt border-electric-cobalt text-pure-white shadow-subtle"
                : "bg-pure-white border-hairline-slate text-cool-gray hover:text-midnight-slate hover:border-cool-gray/30"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center p-2 rounded-inner border transition-all duration-200 cursor-pointer ${
            currentPage === totalPages
              ? "bg-pure-white/50 border-hairline-slate/50 text-cool-gray/40 cursor-not-allowed"
              : "bg-pure-white border-hairline-slate text-cool-gray hover:text-midnight-slate hover:border-cool-gray/30 active:scale-95"
          }`}
          aria-label="Next Page"
        >
          <CaretRight size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}
