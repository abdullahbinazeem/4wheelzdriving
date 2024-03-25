import Footer from "@/app/_components/footer";
import Container from "@/components/container";
import SecondaryHeader from "@/components/secondaryHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <SecondaryHeader title={`Packages`} />
      <Container>Driving Lessons</Container>
      <Footer />
    </div>
  );
};

export default page;
