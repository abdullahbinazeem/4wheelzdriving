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
    title: "Road Test",
    description:
      "Our Road Test Package includes 45 minutes warm up at either Mckenzie or Duncin ICBC. At a cost of $175. Students are responsible for all ICBC charges.",
  },
  {
    imageUrl: "/assets/icons/targetedpractice.svg",
    title: "Targeted Practices",
    description:
      "In addition to all the packages, we understand that each student is different. Some may just want to polish on one or two practices. Either on Parallel Parking or Stall reverse parking. We designed this lesson for such students at a cost of $75. We are willing to work with you.",
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
            <h2 className="relative text-lg font-semibold tracking-wider text-primary after:absolute after:left-[-220px] after:top-[50%] after:hidden after:h-[4px] after:w-[200px] after:rounded-full after:bg-primary sm:text-2xl lg:ml-10 lg:text-3xl after:lg:block">
              Experience The Art of Driving
            </h2>
            <h1 className="text-4xl font-extrabold tracking-wider text-white sm:text-6xl lg:text-7xl">
              4 Wheelz
              <br />
              Driving School
            </h1>
            <p className="font-light text-gray-300 sm:text-xl lg:text-2xl">
              Victoria, British Columbia
            </p>
            <div className="mt-5 flex flex-col gap-5 sm:flex-row">
              <a className="cursor-pointer self-start rounded-md border-2 border-primary bg-primary px-10 py-4 font-semibold text-white transition-all hover:-translate-y-2 hover:scale-105 md:text-lg">
                Book Now
              </a>
              <a className="cursor-pointer self-start rounded-md border-2 border-primary px-10 py-4 font-semibold text-primary transition-all hover:-translate-y-2 hover:scale-105 md:text-lg">
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-[10vh] grid w-full gap-6 align-middle sm:px-10 md:grid-cols-2 lg:grid-cols-3">
            {suggestedService.map((item) => (
              <div className="rounded-md bg-white p-9 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.05),_10px_10px_30px_4px_rgba(255,122,0,.05)]">
                <Image
                  src={item.imageUrl}
                  alt="driving lessons"
                  width={200}
                  height={200}
                  className="w-28 lg:w-32 "
                ></Image>
                <h1 className="mt-5 text-xl font-bold text-gray-800 after:bottom-0 after:my-4 after:block after:h-[3px] after:w-20 after:rounded-xl after:bg-primary lg:text-2xl">
                  {item.title}
                </h1>
                <p className="shortener mt-7 text-sm font-light text-gray-500 lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
