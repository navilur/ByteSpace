import { aboutData, aboutData2 } from "@/app/constants/AboutData";
import Image from "next/image";
import React from "react";

const About = () => {
  const formatCount = (count: number) => {
    if (count >= 1000) {
      const value = count / 1000;
      return `${Number(value.toFixed(1))}k`;
    }

    return count.toLocaleString();
  };
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#FAFAFA]
    mt-30
  "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
        absolute
        left-full
        top-[45%]
        h-[clamp(500px,79vw,1137px)]
        w-[clamp(500px,79vw,1137px)]
        -translate-x-1/2
        rounded-full
        bg-[radial-gradient(circle,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)]
        blur-[20px]
      "
        />
        <div
          className="
        absolute
        left-[-10%]
        top-[-25%]
        h-[clamp(500px,79vw,1137px)]
        w-[clamp(500px,79vw,1137px)]
        rounded-full
        bg-[radial-gradient(circle,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)]
        blur-[20px]
      "
        />
        <div
          className="
        absolute
        left-[-35%]
        top-[13%]
        h-[clamp(500px,79vw,1137px)]
        w-[clamp(500px,79vw,1137px)]
        rounded-full
        bg-[radial-gradient(circle,rgba(0,59,226,0.16)_0%,rgba(0,59,226,0.0368)_53%,rgba(0,59,226,0.0096)_75%,rgba(0,59,226,0)_100%)]
        blur-[20px]
      "
        />
        <div
          className="
        absolute
        left-[56%]
        top-[-25%]
        h-[clamp(500px,79vw,1137px)]
        w-[clamp(500px,79vw,1137px)]
        rounded-full
        bg-[radial-gradient(circle,rgba(0,59,226,0.08)_0%,rgba(0,59,226,0.0184)_53%,rgba(0,59,226,0.0048)_75%,rgba(0,59,226,0)_100%)]
        blur-[20px]
      "
        />
        <div
          className="
        absolute
        left-[-20%]
        top-[65%]
        h-[clamp(400px,47vw,672px)]
        w-[clamp(400px,47vw,672px)]
        rounded-full
        bg-[radial-gradient(circle,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)]
        blur-[20px]
      "
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-0">
          <div>
            <h2 className="max-w-144.25 text-[clamp(24px,3vw,40px)] font-semibold mb-10 text-[#242528] font-[Poppins]">
              {aboutData.title}
            </h2>
            <p className="font-[Satoshi] max-w-119.25 text-[#4B4C53] text-lg font-normal mb-10">
              {aboutData.description}
            </p>
            <div className="flex flex-wrap lg:gap-14 gap-4">
              <div>
                <h3 className="text-[#003BE2] font-[Poppins] font-medium text-4xl">
                  {formatCount(aboutData.studentCount)}
                </h3>
                <p className="text-[#4B4C53] font-[Satoshi] text-lg font-normal">
                  Students
                </p>
              </div>
              <div>
                <h3 className="text-[#003BE2] font-[Poppins] font-medium text-4xl">
                  {aboutData.coursesCount.toLocaleString()}+
                </h3>
                <p className="text-[#4B4C53] font-[Satoshi] text-lg font-normal">
                  Courses
                </p>
              </div>
              <div>
                <h3 className="text-[#003BE2] font-[Poppins] font-medium text-4xl">
                  {aboutData.creatorsCount.toLocaleString()}
                </h3>
                <p className="text-[#4B4C53] font-[Satoshi] text-lg font-normal">
                  Creators
                </p>
              </div>
            </div>
          </div>
          <Image
            src={aboutData.image}
            alt={aboutData.alt}
            width={621}
            height={552}
            className="filter-[drop-shadow(51.0381px_72.9116px_72px_rgba(0,0,0,0.13))_drop-shadow(37.1223px_53.0318px_56px_rgba(0,0,0,0.105219))_drop-shadow(25.8381px_36.9115px_36px_rgba(0,0,0,0.1))_drop-shadow(16.9463px_24.2089px_24px_rgba(0,0,0,0.09))_drop-shadow(10.2076px_14.5823px_16.0875px_rgba(0,0,0,0.08))_drop-shadow(5.38293px_7.6899px_9.57129px_rgba(0,0,0,0.07))_drop-shadow(2.23292px_3.18988px_5.72344px_rgba(0,0,0,0.06))_drop-shadow(0.518356px_0.740509px_3.03574px_rgba(0,0,0,0.04))]"
          />
        </div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-0 mt-18">
          <Image
            src={aboutData2.image}
            alt={aboutData2.alt}
            width={621}
            height={552}
            className="filter-[drop-shadow(51.0381px_72.9116px_72px_rgba(0,0,0,0.13))_drop-shadow(37.1223px_53.0318px_56px_rgba(0,0,0,0.105219))_drop-shadow(25.8381px_36.9115px_36px_rgba(0,0,0,0.1))_drop-shadow(16.9463px_24.2089px_24px_rgba(0,0,0,0.09))_drop-shadow(10.2076px_14.5823px_16.0875px_rgba(0,0,0,0.08))_drop-shadow(5.38293px_7.6899px_9.57129px_rgba(0,0,0,0.07))_drop-shadow(2.23292px_3.18988px_5.72344px_rgba(0,0,0,0.06))_drop-shadow(0.518356px_0.740509px_3.03574px_rgba(0,0,0,0.04))]"
          />
          <div>
            <h2 className="max-w-144.25 text-[clamp(24px,3vw,40px)] font-semibold mb-10 text-[#242528] font-[Poppins]">
              {aboutData2.title}
            </h2>
            <p className="font-[Satoshi] max-w-119.25 text-[#4B4C53] text-lg font-normal mb-10">
              {aboutData2.description}
            </p>
            {aboutData2.items.map((item, index) => (
              <div className="flex gap-2 mb-4">
                <Image
                  src="/check.svg"
                  alt="Check Icon"
                  width={24}
                  height={24}
                />
                <p className="text-[#242528] font-[Satoshi] text-lg font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
