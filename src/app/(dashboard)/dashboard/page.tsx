import Container from "@/components/container";
import React from "react";

import Calendar from "./_component/Calendar";
import OpeningTimes from "./_component/OpeningTimes";

const page = () => {
  return (
    <Container className="grainy min-h-screen pt-20">
      <h1 className="text-2xl font-bold">Dashboard -</h1>
      <div className="mt-2 flex gap-6 text-blue-400 underline">
        <p className="cursor-pointer">View Calendar</p>
        <OpeningTimes />
      </div>
      <Calendar />
    </Container>
  );
};

export default page;
