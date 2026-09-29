import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
        absolute
        left-210.5
        -top-60.25
        h-284.25
        w-284.25
        rounded-full
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)]
        blur-[20px]
      "
        />
        <div
          className="
        absolute
        left-98.75
        -top-34.5
        h-168
        w-2xl
        rounded-full
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)]
        blur-[20px]
      "
        />
        <div
          className="
        absolute
        -left-110.5
        top-37.25
        h-284.25
        w-284.25
        rounded-full
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)]
        blur-[20px]
      "
        />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-2 pt-18.5 pb-14.25">
          <div className="flex justify-between items-center mb-18 flex-wrap">
            <h2 className="text-black font-[Poppins] text-[44px] font-semibold max-w-144.25 mx-auto">
              Discover What Our Community Is Saying
            </h2>
            <p className="text-[#4F4F4F] font-[Satoshi] font-normal text-lg mx-auto max-w-145">
              Experience the collaboration of numerous creators and an expanding
              selection of courses. Register now and become a part of a
              community comprising over 10,000 local and international creators.
              Utilize our Course Editor, and showcase your expertise by
              publishing your finest course on the ByteSpace Course Library.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
