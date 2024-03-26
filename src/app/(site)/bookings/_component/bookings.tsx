"use client";

import { cn } from "@/lib/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import BookingNav from "./bookingNav";

enum STEPS {
  Service = 0,
  Reservation = 1,
  Details = 2,
}

type FormFields = {
  Category: string;
  Service: string;
  Price: string;
};

const Bookings = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

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

  let formContent = null;

  if (step == STEPS.Service) {
    formContent = <div>Service Step</div>;
  }

  if (step == STEPS.Reservation) {
    formContent = <div>Reserve a Seat</div>;
  }

  if (step == STEPS.Details) {
    formContent = <div>Details Step</div>;
  }

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-medium">Schedule Driving Lesson</h1>
      <BookingNav step={step} />
      <div>{formContent}</div>
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
