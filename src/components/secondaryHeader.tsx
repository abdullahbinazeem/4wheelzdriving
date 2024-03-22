import Navbar from "@/app/_components/navbar";
import React from "react";
import Container from "./container";
import Image from "next/image";

type SecondaryHeaderProps = {
  title: string;
};

const SecondaryHeader = ({ title }: SecondaryHeaderProps) => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[50vh] max-h-[500px] w-full">
        <div className="absolute z-[-1] h-full max-h-[500px] w-full">
          <Image
            src="/assets/herobg.jpg"
            alt="driving instructor"
            className=""
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex h-full flex-col justify-center">
          <Container className="pt-[10vh]">
            <h1 className="text-5xl font-bold tracking-wider text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
