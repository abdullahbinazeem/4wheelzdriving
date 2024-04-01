"use client";

import React, { useState } from "react";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  getMonth,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
  isBefore,
  isSameYear,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Calendar = () => {
  const today = startOfToday();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">
          {format(firstDayOfMonth, "MMMM yyyy")}
        </p>
        <div className="flex items-center justify-evenly gap-6 sm:gap-12">
          <button
            disabled={
              isSameMonth(today, firstDayOfMonth) &&
              isSameYear(today, firstDayOfMonth)
            }
          >
            <ChevronLeftIcon
              className={`h-6 w-6 ${
                isSameMonth(today, firstDayOfMonth) &&
                isSameYear(today, firstDayOfMonth) &&
                "text-gray-400"
              }`}
              onClick={getPrevMonth}
            />
          </button>
          <ChevronRightIcon
            className="h-6 w-6 cursor-pointer"
            onClick={getNextMonth}
          />
        </div>
      </div>
      <hr className="my-6" />
      <div className="grid grid-cols-7 place-items-center gap-6 sm:gap-12">
        {days.map((day, idx) => {
          return (
            <div key={idx} className="font-semibold">
              {day}
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-7 place-items-center gap-6 sm:gap-12">
        {daysInMonth.map((day, idx) => {
          return (
            <div key={idx} className={colStartClasses[getDay(day)]}>
              <button
                onClick={() => {
                  console.log(format(day, "d/M/yy"));
                }}
                disabled={isBefore(day, today) || isToday(day)}
                className={`flex h-8 w-8  items-center justify-center rounded-full font-semibold   ${
                  !isBefore(day, today) ? "text-gray-900" : "text-gray-400"
                } ${!isToday(day) && !isBefore(day, today) && "hover:bg-blue-500 hover:text-white"} ${
                  isToday(day) && "bg-red-500 text-white"
                }`}
              >
                {format(day, "d")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
