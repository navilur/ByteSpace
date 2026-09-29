import React from "react";
import PathBox from "./PathBox";
import { PathBoxData } from "@/app/constants/PathBoxData";

const LearningPaths = () => {
  return (
    <section className="text-center mt-18 px-2">
      <h2 className="text-[#040819] text-4xl font-semibold mb-4">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="text-[#82868E] font-[Satoshi] text-lg font-normal max-w-229.25 mx-auto mb-17">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {PathBoxData.map((item, index) => (
          <PathBox key={index} title={item.label} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default LearningPaths;
