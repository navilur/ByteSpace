import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  className?: string;
}

export default function SearchInput({
  className = "",
  placeholder = "Course, topic, creator",
  ...props
}: SearchInputProps) {
  return (
    <div
      className={`
        flex
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
      <input
        {...props}
        placeholder={placeholder}
        className="
          min-w-0
          bg-transparent
          font-[Satoshi]
          text-[18px]
          font-normal
          leading-[160%]
          text-[#242528]
          outline-none
          placeholder:text-[#82868E]
          border-[#CED0D3]
        "
      />
    </div>
  );
}
