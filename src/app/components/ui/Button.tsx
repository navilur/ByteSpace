import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D4FB20] text-[#242528] hover:bg-[#C8EF16] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(212,251,32,0.25)]",

  secondary:
    "bg-white text-[#242528] hover:bg-[#F5F5F6] hover:-translate-y-1 hover:shadow-lg",

  outline:
    "border border-white/20 bg-transparent text-white hover:border-[#D4FB20] hover:bg-[#D4FB20]/10 hover:-translate-y-1",

  ghost: "bg-transparent text-white hover:bg-white/10 hover:-translate-y-1",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex h-[46px] items-center justify-center gap-2 rounded-[24px] px-6 py-3 font-[Satoshi] text-[18px] font-medium leading-[120%] cursor-pointer transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#D4FB20]/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
}
