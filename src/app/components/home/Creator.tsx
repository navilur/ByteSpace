import React from "react";
import Button from "../ui/Button";

const Creator = () => {
  return (
    <section
      className="overflow-hidden bg-no-repeat bg-cover bg-center py-21.25"
      style={{
        backgroundImage: "url('/CTA_Frame.png')",
      }}
    >
      <div className="max-w-5xl mx-auto px-2 flex flex-col gap-10 text-center">
        <h2 className="text-[#F5F5F6] font-[Poppins] text-[44px] font-semibold max-w-177.5 mx-auto">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-[#F5F5F6] font-[Satoshi] font-normal text-lg mx-auto">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button className="w-full max-w-43 mx-auto">Join as Creator</Button>
      </div>
    </section>
  );
};

export default Creator;
