import type { InputHTMLAttributes, ReactNode } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

const AuthInput = ({
  label,
  icon,
  className = "",
  ...props
}: AuthInputProps) => {
  return (
    <div className="w-full">
      <label className="mb-2 block font-[Satoshi] text-sm font-medium text-[#242528]">
        {label}
      </label>

      <div
        className={`
          flex
          h-[52px]
          w-full
          items-center
          gap-3
          rounded-xl
          border
          border-[#D9D9D9]
          bg-white
          px-4
          transition-all
          duration-200
          focus-within:border-[#D4FB20]
          focus-within:ring-2
          focus-within:ring-[#D4FB20]/20
          ${className}
        `}
      >
        {icon && <span className="flex shrink-0 text-[#82868E]">{icon}</span>}

        <input
          {...props}
          className="
            min-w-0
            flex-1
            bg-transparent
            font-[Satoshi]
            text-[16px]
            font-normal
            text-[#242528]
            outline-none
            placeholder:text-[#A0A2A6]
          "
        />
      </div>
    </div>
  );
};

export default AuthInput;
