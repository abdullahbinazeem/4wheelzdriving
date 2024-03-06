import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Container from "@/components/container";

const suggestedService = [
  {
    imageUrl: "/assets/icons/drivinglessons.svg",
    title: "Driving Lessons",
    description:
      "All lessons are 90 minutes long and includes pick up and drop off. Refer to our packages for additional details.",
  },
  {
    imageUrl: "/assets/icons/roadtest.svg",
    title: "Driving Lessons",
    description:
      "All lessons are 90 minutes long and includes pick up and drop off. Refer to our packages for additional details.",
  },
  {
    imageUrl: "/assets/icons/targetedpractice.svg",
    title: "Driving Lessons",
    description:
      "All lessons are 90 minutes long and includes pick up and drop off. Refer to our packages for additional details.",
  },
];

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-[100vh] w-full">
        <div className="absolute z-[-1] h-[100vh] w-full">
          <Image
            src="/assets/herobg.jpg"
            alt="driving instructor"
            className=""
            fill
            objectFit="cover"
          />
        </div>
        <Container>
          <div className="flex h-full flex-col justify-center gap-y-5 pt-[25vh] lg:gap-y-8">
            <h2 className="relative text-2xl font-semibold tracking-wider text-primary after:absolute after:left-[-220px] after:top-[50%] after:hidden after:h-[4px] after:w-[200px] after:rounded-full after:bg-primary lg:ml-10 lg:text-3xl after:lg:block">
              Experience The Art of Driving
            </h2>
            <h1 className="text-6xl font-extrabold tracking-wider text-white lg:text-7xl">
              4 Wheelz
              <br />
              Driving School
            </h1>
            <p className="text-xl font-light text-gray-300 lg:text-2xl">
              Victoria, British Columbia
            </p>
            <div className="mt-5 flex gap-5">
              <a className="cursor-pointer rounded-md border-2 border-primary bg-primary px-10 py-4 font-semibold text-white transition-all hover:-translate-y-2 hover:scale-105 md:text-lg">
                Book Now
              </a>
              <a className="cursor-pointer rounded-md border-2 border-primary px-10 py-4 font-semibold text-primary transition-all hover:-translate-y-2 hover:scale-105 md:text-lg">
                Learn More
              </a>
            </div>
          </div>

          <div className=" mt-[10vh] grid w-full grid-cols-3 gap-6">
            {suggestedService.map((item) => (
              <div className="rounded-md bg-white p-9">
                <Image
                  src={item.imageUrl}
                  alt="driving lessons"
                  width={200}
                  height={200}
                  className="w-32"
                ></Image>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
