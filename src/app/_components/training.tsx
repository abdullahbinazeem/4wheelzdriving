import Image from "next/image";
import Container from "@/components/container";
import React from "react";
import { Play } from "lucide-react";

const Training = () => {
  return (
    <Container>
      <div className="py-40">
        <h1 className="inline-block text-3xl font-bold tracking-wide text-slate-900 lg:text-4xl ">
          1 on 1 TRAINING
        </h1>
        <div className="mt-16 flex flex-col gap-x-20 gap-y-8 lg:flex-row">
          <p className="text-pretty text-slate-600 ">
            Our qualified instructors provides high-quality driving lessons to
            amateurs as well as experienced drivers. We aim to teach all kinds
            of students from different backgrounds and experiences to ensure
            that they learn the essential skills and attitudes required to
            become excellent defensive drivers.
          </p>
          <p className=" text-pretty text-slate-600 ">
            At Sky Driving School, our instructors are trained to teach the
            students politely and professionally that can make the driving
            lessons efficient and appealing to the students. Every nuance of
            driving is covered in the driving training to prepare our students
            for different kinds of road situations in real life.
          </p>
        </div>
        <div className="mt-20 flex items-center justify-center gap-4 text-3xl font-bold text-primary md:mt-40 md:text-4xl">
          Videos Coming soon
          <Play size={72} className="aspect-square w-12 md:w-16 lg:w-20 " />
        </div>
      </div>
    </Container>
  );
};

export default Training;
