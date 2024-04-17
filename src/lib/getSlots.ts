import { add, sub } from "date-fns";

export default function getSlots(
  date: Date,
  startingTime: String,
  endingTime: String,
  interval: number,
  length: number,
  occupiedTimes?: {
    openingTime: Date;
    closingTime: Date;
  }[],
) {
  console.log(occupiedTimes);
  let startingDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    parseInt(startingTime.split(":")[0]!),
    parseInt(startingTime.split(":")[1]!),
  );

  let endingDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    parseInt(endingTime.split(":")[0]!),
    parseInt(endingTime.split(":")[1]!),
  );

  const slots: Date[] = [];

  if (!occupiedTimes?.length) {
    while (startingDate <= sub(endingDate, { minutes: length })) {
      slots.push(startingDate);
      startingDate = add(startingDate, {
        minutes: interval,
      });
    }

    return slots;
  }

  while (startingDate <= sub(endingDate, { minutes: length })) {
    if (!isInArray(occupiedTimes, startingDate, length)) {
      slots.push(startingDate);
    } else {
      console.log("caught");
    }
    startingDate = add(startingDate, {
      minutes: interval,
    });
  }

  return slots;
}

function isInArray(
  array: {
    openingTime: Date;
    closingTime: Date;
  }[],
  value: Date,
  length: number,
) {
  return !!array.find((item) => {
    return (
      sub(item.openingTime, { minutes: length }) < value &&
      item.closingTime > value
    );
  });
}
