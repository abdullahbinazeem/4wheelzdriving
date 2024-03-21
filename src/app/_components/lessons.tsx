import Image from "next/image";
import Container from "@/components/container";
import React from "react";
import Link from "next/link";

const Lessons = () => {
  return (
    <Container className="relative">
      <div className="flex  flex-col  gap-x-20 gap-y-20 py-28 lg:flex-row">
        <div className="flex-1 basis-3/6  overflow-hidden">
          <h1 className="inline-block text-3xl font-bold tracking-wide text-primary  lg:text-4xl">
            Exceptional Driving Lessons
          </h1>
          <p className="mb-10 mt-6 text-pretty text-slate-600 ">
            We provide instruction in a range of driving skills. Whether you’re
            an existing driver looking to enhance your skills and boost your
            confidence or a complete beginner starting from scratch, our
            outstanding driving programs are tailored to meet your needs. If you
            have any questions, feel free to reach out to us anytime using our
            contact page. We’re here to assist you on your journey to becoming a
            safe and confident driver.
          </p>
          <div className="mb-4 inline-block rounded-sm bg-primary p-3 transition-all  hover:translate-x-[5%] hover:scale-110">
            <Link
              href={"/policy"}
              className="  font-medium tracking-wider text-white"
            >
              Driving School Policies
            </Link>
          </div>
        </div>
        <div className="relative aspect-video flex-1 basis-4/6  bg-gray-500">
          <Image
            src="/assets/lesson-diagram.jpg"
            alt="Lesson Diagram"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default Lessons;
