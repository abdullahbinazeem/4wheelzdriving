import Footer from "@/app/_components/footer";
import Container from "@/components/container";
import SecondaryHeader from "@/components/secondaryHeader";
import Link from "next/link";
import React, { useState } from "react";
import Bookings from "./_component/bookings";

const page = () => {
  return (
    <div>
      <SecondaryHeader title={`Bookings`} />
      <Container>
        <p className="mt-8 font-light text-slate-500 md:text-lg">
          * Note these are for booking individual lessons or for scheduling your
          next lesson in your paid package. If you are looking for our package
          we recommend to look at our Packages Section{" "}
          <Link className="text-primary underline" href="packages">
            here.
          </Link>
        </p>
        <Bookings />
      </Container>
      <Footer />
    </div>
  );
};

export default page;
