import Image from "next/image";
import Container from "@/components/container";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <Container className="relative">
      <div className="absolute left-0 top-[60%] z-[-2] h-[50%] w-full bg-slate-200  lg:left-[50%] lg:top-[-20%] lg:h-[120%] lg:w-[50%]" />
      <div className="flex min-h-[80vh] flex-col gap-x-4 gap-y-20 py-40 lg:flex-row">
        <div className="flex-1">
          <h1 className="inline-block text-3xl font-bold tracking-wide text-slate-900 before:mb-4 before:block before:h-[5px] before:w-[40%] before:bg-primary lg:text-4xl">
            Why Choose Us?
          </h1>
          <p className="mt-6 text-pretty text-slate-600 md:text-lg">
            Our students are more like family to us that is why our main
            objective is to provide them with the necessary knowledge and skills
            needed to help them become{" "}
            <span className="font-bold text-primary">SAFE</span>,{" "}
            <span className="font-bold text-primary">DEFENSIVE</span> and
            <span className="font-bold text-primary"> RESPONSIBLE</span>{" "}
            drivers. We understand that each student is different and our aim is
            to cater them with the best safe driving skills.
          </p>
          <div className="mt-8 inline-block rounded-sm bg-primary p-3 transition-all  hover:translate-x-[5%] hover:scale-110">
            <Link
              href={"/about"}
              className="  font-medium tracking-wider text-white"
            >
              Learn about us
            </Link>
          </div>
        </div>
        <div className="relative aspect-video flex-1 overflow-hidden rounded-2xl">
          <Image
            src="/assets/aboutus.jpg"
            alt="about us"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
