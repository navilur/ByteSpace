import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Input({
  className = "",
  placeholder = "Course, topic, creator",
  icon,
  iconPosition = "left",
  ...props
}: InputProps) {
  return (
    <div
      className={`
        flex
        h-[52px]
        w-full
        flex-row
        items-center
        gap-2
        rounded-full
        bg-white
        px-6
        py-3
        ${className}
      `}
    >
      {icon && iconPosition === "left" && (
        <span className="flex shrink-0 items-center text-[#82868E]">
          {icon}
        </span>
      )}

      <input
        {...props}
        placeholder={placeholder}
        className="
          min-w-0
          flex-1
          bg-transparent
          font-[Satoshi]
          text-[18px]
          font-normal
          leading-[160%]
          text-[#242528]
          outline-none
          placeholder:text-[#82868E]
        "
      />

      {icon && iconPosition === "right" && (
        <span className="flex shrink-0 items-center text-[#82868E]">
          {icon}
        </span>
      )}
    </div>
  );
}
