import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Container from "@/components/container";
import Link from "next/link";

const suggestedService = [
  {
    imageUrl: "/assets/icons/drivinglessons.svg",
    title: "Driving Lessons",
    description:
      "All lessons are 90 minutes long and includes pick up and drop off. Refer to our packages for additional details.",
    callToAction: "",
  },
  {
    imageUrl: "/assets/icons/roadtest.svg",
    title: "Road Test",
    description:
      "Our Road Test Package includes 45 minutes warm up at either Mckenzie or Duncin ICBC. At a cost of $175. Students are responsible for all ICBC charges.",
    callToAction: "",
  },
  {
    imageUrl: "/assets/icons/targetedpractice.svg",
    title: "Targeted Practices",
    description:
      "In addition to all the packages, some may just want to polish on one or two practices. Either on Parallel Parking or Stall reverse parking. We designed this lesson for such students at a cost of $75.",
    callToAction: "",
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
          <div className="flex h-full flex-col justify-center gap-y-5 pt-20 lg:gap-y-8 lg:pt-[25vh]">
            <h2 className="relative text-lg font-semibold tracking-wider text-primary after:absolute after:left-[-220px] after:top-[50%] after:hidden after:h-[4px] after:w-[200px] after:rounded-full after:bg-primary sm:text-2xl lg:ml-10 lg:text-3xl after:lg:block">
              Experience The Art of Driving
            </h2>
            <h1 className="text-4xl font-bold tracking-wider text-white sm:text-6xl lg:text-7xl">
              4 Wheelz
              <br />
              Driving School
            </h1>
            <p className="font-light text-slate-300 sm:text-xl lg:text-2xl">
              Victoria, British Columbia
            </p>
            <div className="mt-5 flex flex-col gap-5 sm:flex-row">
              <Link
                href="/bookings"
                className="cursor-pointer self-start rounded-md border-2 border-primary bg-primary px-10 py-4 font-semibold text-white transition-all hover:-translate-y-2 hover:scale-105 md:text-lg"
              >
                Book Now!
              </Link>
              <Link
                href="/packages"
                className="cursor-pointer self-start rounded-md border-2 border-primary px-10 py-4 font-semibold text-primary transition-all hover:-translate-y-2 hover:scale-105 md:text-lg"
              >
                Explore Packages
              </Link>
            </div>
          </div>

          <div className="mt-[10vh] grid w-full gap-6 align-middle sm:px-10 md:grid-cols-2 lg:grid-cols-3">
            {suggestedService.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-md bg-white p-9 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.05),_10px_10px_30px_4px_rgba(255,122,0,.05)]"
              >
                <div>
                  <Image
                    src={item.imageUrl}
                    alt="driving lessons"
                    width={200}
                    height={200}
                    className="w-20 lg:w-24 "
                  ></Image>
                  <h1 className="mt-8 text-lg font-medium text-slate-800 after:bottom-0 after:my-2 after:block after:h-[2px] after:w-20 after:rounded-xl after:bg-primary lg:text-xl">
                    {item.title}
                  </h1>
                  <p className="shortener mt-5 text-sm font-light leading-relaxed text-slate-500 ">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.callToAction}
                  className="mx-auto mt-6 w-[50%] rounded-sm bg-primary p-2 text-center text-white transition-all hover:-translate-y-2 hover:scale-105"
                >
                  Book
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
