"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

enum STEPS {
  Service = 0,
  Reservation = 1,
  Details = 2,
}

const Bookings = () => {
  const [step, setStep] = useState(STEPS.Service);

  const onBack = () => {
    if (step != STEPS.Service) {
      setStep((value) => value - 1);
    }
  };

  const onNext = () => {
    if (step != STEPS.Details) {
      setStep((value) => value + 1);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-medium">Schedule Driving Lesson</h1>
      <div className="mt-8 flex w-full justify-between gap-2 ">
        <div className="flex-1">
          <p
            className={cn(
              "text-sm transition-all md:text-base",
              step == STEPS.Service ? "text-primary" : "text-black",
            )}
          >
            1. Service
          </p>
          <div
            className={cn(
              "mt-2 h-4 w-full rounded-l-xl transition-all",
              step == STEPS.Service ? "bg-primary" : "bg-slate-200",
            )}
          />
        </div>
        <div className="flex-1">
          <p
            className={cn(
              "text-sm transition-all md:text-base",
              step == STEPS.Reservation ? "text-primary" : "text-black",
            )}
          >
            2. Reservation
          </p>
          <div
            className={cn(
              "mt-2 h-4 w-full bg-primary transition-all",
              step == STEPS.Reservation ? "bg-primary" : "bg-slate-200",
            )}
          />
        </div>
        <div className="flex-1">
          <p
            className={cn(
              "text-sm transition-all md:text-base",
              step == STEPS.Details ? "text-primary" : "text-black",
            )}
          >
            3. Details
          </p>
          <div
            className={cn(
              "mt-2 h-4 w-full rounded-r-xl bg-primary transition-all",
              step == STEPS.Details ? "bg-primary" : "bg-slate-200",
            )}
          />
        </div>
      </div>
      <div className="m-auto mt-10 flex justify-center gap-20">
        <div
          className={cn(
            "cursor-pointer rounded-md  px-4 py-2 text-white",
            step == STEPS.Service
              ? "cursor-default bg-slate-600 opacity-80"
              : "bg-primary",
          )}
          onClick={onBack}
        >
          Back
        </div>
        <div
          className={cn(
            "cursor-pointer rounded-md  px-4 py-2 text-white",
            step == STEPS.Details
              ? "cursor-default bg-slate-600 opacity-80"
              : "bg-primary",
          )}
          onClick={onNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Bookings;
