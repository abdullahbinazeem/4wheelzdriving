import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] w-full">
        <div className="absolute w-full h-full">
          <Image
            src="/assets/herobg.jpg"
            alt="driving instructor"
            className="z-0"
            fill
            objectFit="cover"
          />
        </div>
        <h1></h1>
      </div>
    </>
  );
};

export default Hero;
