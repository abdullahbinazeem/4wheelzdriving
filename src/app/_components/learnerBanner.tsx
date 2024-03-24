import Container from "@/components/container";
import React from "react";

import Image from "next/image";
import { ArrowBigUpDash } from "lucide-react";
import Link from "next/link";

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
          <div className="flex items-center gap-4 md:gap-8">
            <h1 className="text-xl font-semibold sm:mb-0 sm:text-2xl md:text-3xl lg:text-4xl">
              Say Goodbye To The
            </h1>
            <Image
              src="/assets/icons/learnersticker.svg"
              alt="Learner Sticker"
              width={120}
              height={120}
              className="w-8 rounded-[8%] md:w-12 lg:w-14"
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
            <Link
              href="/packages"
              className="ml-2 mt-4 text-lg underline transition-all hover:translate-x-[12.5%] hover:scale-125 md:text-xl"
            >
              Book Now
            </Link>
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
