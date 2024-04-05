import prisma from "@/lib/db";
import { DayType } from "@/types";
import { add, eachDayOfInterval, getDay } from "date-fns";

export async function POST(request: Request) {
  const body = await request.json();
  const { days, toDate } = body;

  days.forEach(async (day: DayType, i: number) => {
    await prisma.scheduleDay.upsert({
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
        update: {},
        create: {
          dateTime: day,
          dayOfWeek: getDay(day),
        },
      });
    });
  }

  return Response.json({ message: "Updated succesfuly" });
}
