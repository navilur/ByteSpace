import Image from "next/image";
import React from "react";
import type { data } from "@/app/constants/Testimonials";

interface TestimonialCardProps {
  data: data;
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className="p-6 bg-white rounded-3xl w-full max-w-93.5">
      <Image src={data.image} alt="Sarah M." width={80} height={80} />
      <h3 className="font-[Poppins] text-xl font-semibold text-black mt-6">
        {data.name}
      </h3>
      <p className="text-[#003BE2] font-normal text-lg font-[Satoshi] mb-6">
        {data.title}
      </p>
      <p className="text-[#4F4F4F] font-[Satoshi] font-normal text-lg">
        "{data.description}"
      </p>
    </div>
  );
};

export default TestimonialCard;
