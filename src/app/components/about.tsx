import Image from "next/image";
import Container from "@/components/container";
import React from "react";

const About = () => {
  return (
    <Container className="relative">
      <div className="absolute left-[50%] top-[-20%] z-[-2]  h-[160%] w-[50%] bg-slate-200" />
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
