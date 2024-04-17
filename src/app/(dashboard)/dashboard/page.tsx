import Container from "@/components/container";
import React from "react";

import prisma from "@/lib/db";

import Calendar from "./_component/Calendar";
import OpeningTimes from "./_component/OpeningTimes";

import { format } from "date-fns";

const page = async () => {
  const scheduleDays = await prisma.scheduleDay.findMany({
    orderBy: {
      dayOfWeek: "asc",
    },
  });

  const days = await prisma.availableDays.findMany({
    orderBy: {
      dateTime: "asc",
    },
    include: {
      appointments: {
        orderBy: {
          startTime: "asc",
        },
      },
    },
  });

  return (
    <Container className="grainy min-h-screen pt-20">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-2 flex gap-6 text-blue-400 underline">
        <p className="cursor-pointer">View Calendar</p>
        <OpeningTimes
          scheduledDays={scheduleDays}
          lastDay={days[days?.length - 1]?.dateTime}
        />
      </div>
      {days && (
        <p className="mt-10 text-primary underline">
          Calendar is updated till{" "}
          {format(days[days?.length - 1]?.dateTime, "do")} of{" "}
          {format(days[days.length - 1]?.dateTime, "MMMM yyyy")}
        </p>
      )}
      <Calendar scheduleDays={scheduleDays} availableDays={days} />
    </Container>
  );
};

export default page;

export const revalidate = 0;
