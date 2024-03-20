"use client";

import Container from "@/components/container";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

import Image from "next/image";

type Carousel = {
  title: string;
  description: string;
  reviewer: string;
  url: string;
};

const carouselItems: Carousel[] = [
  {
    title: "An Amazing service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
    reviewer: "John Carter",
    url: "https://karundrivingschool.ca/wp-content/uploads/2022/08/Untitled-1.webp",
  },
  {
    title: "Helpul Instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
    reviewer: "Muhammad Laden",
    url: "https://s3-media0.fl.yelpcdn.com/bphoto/8o9DLCQIJtYVHPSDOWLpkA/1000s.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <Container className="relative">
      <div className="min-h-[80vh]  py-40 lg:flex-row">
        <h1 className="inline-block text-3xl font-bold tracking-wide  text-slate-900  lg:text-4xl">
          What Our Students Say
        </h1>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="mt-6 text-pretty text-slate-600 md:w-[50%] md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero
          </p>
          <div className="m-auto mt-10 flex gap-x-10 md:m-0 md:gap-x-5">
            <div
              className={cn(
                "cursor-pointer rounded-full border-2 p-2 transition-all hover:scale-110",
                index > 0
                  ? "border-primary bg-primary text-white"
                  : "hover:scale-100",
              )}
              onClick={() => {
                if (index > 0) setIndex(index - 1);
              }}
            >
              <ChevronLeft
                strokeWidth={1.5}
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </div>
            <div
              className={cn(
                "cursor-pointer rounded-full border-2 p-2 transition-all hover:scale-110",
                index < carouselItems.length - 1
                  ? "border-primary bg-primary text-white"
                  : "hover:scale-100",
              )}
              onClick={() => {
                if (index < carouselItems.length - 1) setIndex(index + 1);
              }}
            >
              <ChevronRight
                strokeWidth={1.5}
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </div>
          </div>
        </div>
        <div className="mt-10  overflow-hidden rounded-3xl  sm:mx-12 lg:mx-20 ">
          <div
            className={cn(`flex  transition-all  duration-500`)}
            style={{
              transform: `translate(${index * -100}%)`,
            }}
          >
            {carouselItems.map((item, i) => (
              <div
                key={i}
                className="flex min-w-full flex-col justify-between gap-x-12 bg-[#FFFDFB] md:flex-row"
              >
                <div className="relative aspect-[6/5] w-full bg-[#FFC48D] md:basis-[45%] ">
                  <Image
                    fill
                    alt="review"
                    src={item.url}
                    className="object-cover"
                  />
                </div>
                <div className="px-4 pb-6 pt-8 sm:px-8 sm:pb-12 sm:pt-20 md:basis-[55%] lg:px-12 lg:pb-20 lg:pt-32">
                  <h1 className="text-lg font-semibold text-slate-800 sm:text-xl lg:text-2xl">
                    {item.title}
                  </h1>
                  <p className="mt-4  text-sm font-light text-slate-700 sm:text-base lg:text-lg">
                    {item.description}
                  </p>
                  <p className="mt-6 font-medium text-slate-800 sm:mt-12 sm:text-lg lg:text-xl">
                    {item.reviewer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
