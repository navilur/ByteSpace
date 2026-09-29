import Image from "next/image";

interface PathBoxProps {
  title: string;
  image: string;
  imageAlt?: string;
  className?: string;
}

const PathBox = ({
  title,
  image,
  imageAlt = "",
  className = "",
}: PathBoxProps) => {
  return (
    <div
      className={`
        flex
        h-41.75
        w-41.75
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-[#CED0D3]
        ${className}
      `}
    >
      <Image
        src={image}
        alt={imageAlt || title}
        width={48}
        height={48}
        className="mb-3 h-12 w-12 object-contain"
      />

      <p className="font-[Satoshi] text-xl font-medium text-[#242528]">
        {title}
      </p>
    </div>
  );
};

export default PathBox;
