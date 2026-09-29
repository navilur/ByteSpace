"use client";

import { useRef } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import type { MouseEvent } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { HeroData } from "@/app/constants/HeroData";

export default function Hero() {
  const ornamentRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!ornamentRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const moveX = x * 40;
    const moveY = y * 40;

    ornamentRef.current.style.transform = `
      translate3d(${moveX}px, ${moveY}px, 0)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    if (!ornamentRef.current) return;

    ornamentRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        md:pt-42.25
        pt-20
      "
      style={{
        backgroundImage: "url('/Hero_Frame.png')",
      }}
    >
      <Image
        ref={ornamentRef}
        src="/3d ornament.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-contain
          transition-transform
          duration-500
          ease-out
          will-change-transform
          hidden
          xl:block
        "
      />
      {HeroData.map((item, index) => (
        <div
          key={index}
          className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-4
          pb-0
          text-center
          sm:px-6
          lg:px-8
        "
        >
          <h1
            className="
            w-full
            max-w-233.75
            font-[Poppins]
            text-center
            text-4xl
            font-semibold
            leading-[120%]
            tracking-[-0.01em]
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-[72px]
          "
          >
            {item.title}
          </h1>

          <p
            className="
            mt-8
            mb-15
            max-w-162.5
            font-[Satoshi]
            text-base
            font-normal
            leading-[160%]
            text-[#E5E6E8]
            sm:text-lg
          "
          >
            {item.title}
          </p>

          <div className="mt-10 flex w-full justify-center gap-2 md:gap-4 mb-9">
            <Input
              icon={<Search size={24} strokeWidth={2} />}
              iconPosition="left"
              placeholder="Course, topic, creator"
              className="w-full max-w-115.25"
            />

            <Button className="my-auto whitespace-nowrap hover:translate-y-0">
              Search
            </Button>
          </div>
          <Image
            src={item.image}
            alt="Hero Image"
            width={746}
            height={541}
            priority
          />
        </div>
      ))}
    </section>
  );
}
