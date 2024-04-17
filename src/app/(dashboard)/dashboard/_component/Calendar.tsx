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
  isAfter,
  isSameDay,
  formatDate,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { AvailableDays } from "@prisma/client";
import getSlots from "@/lib/getSlots";

interface CalendarProps {
  scheduleDays: {
    id: string;
    dayOfWeek: number;
    active: boolean;
    openingTime: string;
    closingTime: string;
  }[];

  availableDays: {
    id: string;
    dateTime: Date;
    dayOfWeek: number;
    disabledTimes: any;
    disabled: boolean;
    appointments: {
      id: string;
      name: string;
      price: number;
      startTime: Date;
      appointmentLength: number;
      dayId: string;
      createdAt: Date;
    }[];
  }[];
}

type AvailabeDay = {
  id: string;
  dateTime: Date;
  dayOfWeek: number;
  disabledTimes: any;
  disabled: boolean;
  appointments: {
    id: string;
    name: string;
    price: number;
    startTime: Date;
    appointmentLength: number;
    dayId: string;
    createdAt: Date;
  }[];
};

const Calendar = ({ scheduleDays, availableDays }: CalendarProps) => {
  const [availableDay, setAvailableDay] = useState<AvailabeDay>();
  const [length, setLength] = useState(60);
  const [interval, setInterval] = useState(30);

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
    end:
      isSameMonth(
        firstDayOfMonth,
        availableDays[availableDays.length - 1].dateTime,
      ) ||
      (isAfter(
        endOfWeek(endOfMonth(firstDayOfMonth)),
        availableDays[availableDays.length - 1].dateTime,
      ) &&
        isSameYear(
          firstDayOfMonth,
          availableDays[availableDays.length - 1].dateTime,
        ))
        ? availableDays[availableDays.length - 1].dateTime
        : endOfWeek(endOfMonth(firstDayOfMonth)),
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
    <div className="pb-40">
      <div className="mt-5 ">
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
            <button
              disabled={
                isSameMonth(
                  firstDayOfMonth,
                  availableDays[availableDays.length - 1].dateTime,
                ) &&
                isSameYear(
                  firstDayOfMonth,
                  availableDays[availableDays.length - 1].dateTime,
                )
              }
            >
              <ChevronRightIcon
                className={`h-6 w-6 cursor-pointer 
              ${
                isSameMonth(
                  firstDayOfMonth,
                  availableDays[availableDays.length - 1].dateTime,
                ) &&
                isSameYear(
                  firstDayOfMonth,
                  availableDays[availableDays.length - 1].dateTime,
                ) &&
                "text-gray-400"
              }
              `}
                onClick={getNextMonth}
              />
            </button>
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
              <div
                key={idx}
                className={cn(
                  colStartClasses[getDay(day)],
                  "p-2",
                  !!availableDays.find((availableDay) => {
                    if (
                      isSameDay(day, availableDay.dateTime) &&
                      availableDay.disabled &&
                      !isToday(day) &&
                      !isBefore(day, today)
                    ) {
                      return availableDay;
                    }
                  })
                    ? "bg-red-200"
                    : "",
                )}
              >
                <button
                  onClick={() => {
                    setAvailableDay(
                      availableDays.find((availableDay) => {
                        if (isSameDay(day, availableDay.dateTime))
                          return availableDay;
                      }),
                    );
                  }}
                  disabled={
                    isBefore(day, today) ||
                    isToday(day) ||
                    !scheduleDays[getDay(day)].active
                  }
                  className={`flex h-8 w-8  items-center justify-center rounded-full font-semibold   ${
                    !isBefore(day, today) ? "text-gray-900" : "text-gray-400"
                  } ${!isToday(day) && !isBefore(day, today) && scheduleDays[getDay(day)].active && "hover:bg-blue-500 hover:text-white"} ${
                    isToday(day) && "bg-red-500 text-white"
                  } ${availableDay && isSameDay(day, availableDay.dateTime) && "bg-blue-500 text-white"}`}
                >
                  {format(day, "d")}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20">
        {availableDay && (
          <div className=" flex flex-col gap-12">
            <div>
              <h1 className="mb-5 text-2xl font-semibold">
                Bookings Avaliability:{" "}
                {formatDate(availableDay.dateTime, "EEEE, d MMMM")}
              </h1>
              <div className="mb-8 flex gap-8">
                <div>
                  <p>Length Set:</p>
                  <select
                    id="length"
                    name="length"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                  >
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes</option>
                    <option value={90}>90 Minutes</option>
                  </select>
                </div>
                <div>
                  <p>Interval Set:</p>
                  <select
                    id="interval"
                    name="interval"
                    value={interval}
                    onChange={(e) => setInterval(parseInt(e.target.value))}
                  >
                    <option value={15}>15 minute interval</option>
                    <option value={30}>30 minute interval</option>
                    <option value={45}>45 minute interval</option>
                    <option value={60}>60 minute interval</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-5">
                {getSlots(
                  availableDay.dateTime,
                  scheduleDays[availableDay?.dayOfWeek!].openingTime,
                  scheduleDays[availableDay?.dayOfWeek!].closingTime,
                  interval,
                  length,
                  availableDay.appointments.map((appointment) => {
                    return {
                      openingTime: appointment.startTime,
                      closingTime: add(appointment.startTime, {
                        minutes: appointment.appointmentLength,
                      }),
                    };
                  }),
                ).map((slot, i) => (
                  <div
                    onClick={() => {
                      console.log(slot);
                    }}
                    className="mx-5 cursor-pointer border border-black bg-slate-100 p-5 text-center transition-all hover:border-primary hover:bg-[#FFF9F4] "
                    key={i}
                  >
                    {formatDate(slot, "h:mm aaa")}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="mb-5 text-2xl font-semibold">
                Current Bookings:{" "}
                {formatDate(availableDay.dateTime, "EEEE, d MMMM")}
              </h1>
              <div>
                {availableDay.appointments.length ? (
                  availableDay.appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="rounded-lg bg-slate-100 py-6 pl-4"
                    >
                      <div className="flex items-center gap-8">
                        <h1 className="text-xl text-black">
                          {appointment.name}
                        </h1>
                        <div className="flex gap-2">
                          <p>
                            {formatDate(
                              add(appointment.startTime, { minutes: 720 }),
                              "h:mm aaa",
                            )}
                          </p>{" "}
                          -
                          <p>
                            {formatDate(
                              add(appointment.startTime, {
                                minutes: appointment.appointmentLength + 720,
                              }),
                              "h:mm aaa",
                            )}
                          </p>
                        </div>
                      </div>
                      <h1 className="mt-4 text-xl">${appointment.price}</h1>
                      <p className="mt-4 text-gray-500">
                        Booked on:{" "}
                        {formatDate(appointment.createdAt, "EEEE, d MMMM")}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-lg text-gray-600">
                    No Bookings on this date yet
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
