import prisma from "@/lib/db";
import { DayType } from "@/types";
import {
  add,
  eachDayOfInterval,
  getDay,
  isAfter,
  isSameDay,
  sub,
} from "date-fns";

export async function POST(request: Request) {
  const body = await request.json();
  const { days, toDate } = body;

  const response = days.forEach(async (day: DayType, i: number) => {
    return await prisma.scheduleDay.upsert({
      where: { dayOfWeek: i },
      update: {
        active: day.active,
        openingTime: day.openingTime,
        closingTime: day.closingTime,
      },
      create: {
        dayOfWeek: i,
        active: day.active,
        openingTime: day.openingTime,
        closingTime: day.closingTime,
      },
    });
  });

  const dates: Date[] = eachDayOfInterval({
    start: add(new Date(), { days: 1 }),
    end: toDate,
  });

  if (dates) {
    dates.forEach(async (day) => {
      await prisma.availableDays.upsert({
        where: { dateTime: day },
        update: {
          dateTime: day,
          disabled: !days[getDay(day)].active,
        },
        create: {
          dateTime: day,
          disabled: !days[getDay(day)].active,
          dayOfWeek: getDay(day),
        },
      });
    });
  }

  const lastDays = await prisma.availableDays.findMany({
    orderBy: {
      dateTime: "desc",
    },
  });

  if (
    !isSameDay(lastDays[0].dateTime, toDate) &&
    !isAfter(toDate, lastDays[0].dateTime)
  ) {
    const removeDates: Date[] = eachDayOfInterval({
      start: add(toDate, { days: 1 }),
      end: lastDays[0].dateTime,
    });

    if (removeDates) {
      removeDates.forEach(async (day, i) => {
        await prisma.availableDays.deleteMany({ where: { dateTime: day } });
      });
    }
  } else {
    console.log("same day");
  }

  return Response.json({ response });
}
