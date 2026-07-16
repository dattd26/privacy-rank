import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-6 py-2.5 font-body font-semibold text-sm rounded-btn transition-all duration-200 active:scale-[0.98] select-none text-center inline-flex items-center justify-center whitespace-nowrap cursor-pointer";

  const variants = {
    primary:
      "bg-electric-cobalt text-pure-white hover:bg-electric-cobalt/95 shadow-subtle hover:shadow-floating",
    secondary:
      "bg-pure-white border border-hairline-slate text-midnight-slate hover:border-cool-gray",
    outline:
      "bg-transparent border border-electric-cobalt text-electric-cobalt hover:bg-ice-wash",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
