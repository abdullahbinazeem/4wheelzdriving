import Container from "@/components/container";
import React from "react";

const About = () => {
  return (
    <Container>
      <div className="min-h-[80vh] py-40">
        <h1 className="inline-block text-3xl font-bold tracking-wide text-slate-900 before:mb-4 before:block before:h-[5px] before:w-[40%] before:bg-primary lg:text-4xl">
          Why Choose Us?
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          Our students are more like family to us that is why our main objective
          is to provide them with the necessary knowledge and skills needed to
          help them become <span className="font-bold text-primary">SAFE</span>,{" "}
          <span className="font-bold text-primary">DEFENSIVE</span> and
          <span className="font-bold text-primary"> RESPONSIBLE</span> drivers.
          We understand that each student is different and our aim is to cater
          them with the best safe driving skills.
        </p>
      </div>
    </Container>
  );
};

export default About;
