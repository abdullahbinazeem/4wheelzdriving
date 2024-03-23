import ContactForm from "@/app/_components/contactform";
import Footer from "@/app/_components/footer";
import Container from "@/components/container";
import SecondaryHeader from "@/components/secondaryHeader";
import { Play } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <SecondaryHeader title="About Us" />
      <Container>
        <div className="mt-20 flex flex-col items-center gap-x-16 gap-y-20 py-20 lg:flex-row lg:py-32">
          <div className="basis-1/3 text-center">
            <div className="inline-block rounded-full bg-gray-100 p-6">
              <Play className="h-10 w-10 text-primary " />
            </div>
          </div>
          <div className="basis-2/3">
            <h1 className="text-2xl font-semibold tracking-wide text-primary  lg:text-3xl">
              A dedicated Driving School <br className="hidden lg:block" /> to
              improve your driving skills
            </h1>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-500 md:text-base md:leading-relaxed">
              Horizon Driving School is fully licensed and certified by the
              Insurance Corporation of British Columbia (ICBC). We are committed
              to provide our students with a quality, and safe driving
              experience. Horizon Driving School is dedicated to producing safe
              and knowledgeable drivers. We take pride in having professional,
              calm, friendly and patient instructors.
            </p>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-x-16 gap-y-20 py-20  lg:flex-row lg:py-32">
          <div className="basis-1/2">
            <h1 className="text-2xl font-semibold tracking-wide text-primary  lg:text-3xl">
              Meet your instructor
            </h1>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-500 md:text-base md:leading-relaxed">
              Yussif is an ICBC certified driving instructor and has a Bachelor
              of Art Degree in Homeland Security and Political Science from
              Virginia Commonwealth University (USA). Yussif has worked with the
              Department of Homeland Security under Transportation Security
              Agency (WASHINGTON DC) by protecting the general public and the
              travelling citizens. Yussif is passionate about helping people
              achieve their goals. He has worked with the Child and Youth
              Services of Canada. Yussif speaks Spanish, read and write Arabic
              and speak five Ghanaian languages. He has travelled throughout
              England, Spain, Holland, Nigeria, Togo, Benin and Morocco. Yussif
              is a dual citizen of both Ghana and United States and also a
              permanent resident of Canada.
            </p>
          </div>
          <div className="aspect-video w-full basis-1/2 bg-primary"></div>
        </div>
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
};

export default page;
