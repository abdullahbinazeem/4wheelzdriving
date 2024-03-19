import Container from "@/components/container";
import React from "react";

import Image from "next/image";
import { ArrowBigUpDash } from "lucide-react";

const topics = [
  "One-on-one and personalized driving lessons ",
  "Defensive driving emphasized",
  "Proper Turning Skills",
  "Affordable Prices",
];

const LearnerBanner = () => {
  return (
    <Container className="bg-primary">
      <div className="flex flex-col-reverse gap-20 py-16  text-white lg:flex-row">
        <div className="grid place-content-center lg:place-content-start">
          <div className="items-center gap-8 sm:flex">
            <h1 className="mb-2 text-2xl font-semibold sm:mb-0 md:text-3xl lg:text-4xl">
              Say Goodbye To The
            </h1>
            <Image
              src="/assets/icons/learnersticker.svg"
              alt="Learner Sticker"
              width={120}
              height={120}
              className="w-10 rounded-[8%] md:w-14 lg:w-16"
            />
          </div>
          <ul className="mt-12 flex flex-col gap-y-6">
            {topics.map((topic, i) => (
              <li
                key={i}
                className="flex items-center gap-4  font-light lg:text-lg"
              >
                <ArrowBigUpDash
                  size={40}
                  strokeWidth={1.5}
                  className="w-8 shrink-0 sm:w-10 "
                />
                <p className="overflow-hidden text-sm sm:text-base">{topic}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/assets/banner-car.jpg"
          alt="Banner Car"
          width={400}
          height={400}
          className="m-auto flex-1 object-scale-down"
        />
      </div>
    </Container>
  );
};

export default LearnerBanner;
