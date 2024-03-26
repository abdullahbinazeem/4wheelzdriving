import { cn } from "@/lib/utils";
import React from "react";

enum STEPS {
  Service = 0,
  Reservation = 1,
  Details = 2,
}

type Props = {
  step: number;
};

const BookingNav = ({ step }: Props) => {
  return (
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
  );
};

export default BookingNav;
