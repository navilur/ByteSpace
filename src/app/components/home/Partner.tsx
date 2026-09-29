"use client";

import { brands } from "@/app/constants/BrandsData";
import Image from "next/image";

export default function Partner() {
  return (
    <section className="overflow-hidden bg-[#F5F5F6] py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex md:justify-between justify-center flex-wrap gap-4 md:gap-0 px-4 items-center">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.logo}
              alt={brand.name}
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
