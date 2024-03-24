import Footer from "@/app/_components/footer";
import Container from "@/components/container";
import SecondaryHeader from "@/components/secondaryHeader";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const terms = [
  "Horizon Driving School is providing service of driving lessons under BC Motor Vehicle Laws and with qualified driving instructions. These services provided by Horizon driving school do not include Road test that I shall be taking at any stage of these training",
  "I am PHYSICALLY and MENTALLY capable to undertake the driving lessons, and that I have a valid and unexpired driver's license for driving in BC Canada.",
  "No passenger is allowed in the car during the lesson unless authorized by the instructor ahead of time",
  "For road tests, all students must Bring in 2 pieces of valid government-issued identification.",
  "Any remaining fees owed to the driving school MUST be paid prior to the road test.",
];

const faqs = [
  {
    question: "What is your Cancellation Policy?",
    answer:
      "TWENTY FOUR HOURS CANCELLATION NOTICE IS REQUIRED. ANY CANCELLATION NOTICE LESS THAN 24 HOURS FROM THE DATE AND TIME OF YOUR APPOINTMENT WILL REQUIRE A $50 FEE. FOR CANCELED ROAD TEST, STUDENTS MUST INFORM ICBC WITHIN 48 HOURS TO AVOID ANY ICBC CHARGES.",
  },
  {
    question: "Can I rent a car for my road test?",
    answer:
      "Yes, we do provide car for the road test. Car for the road test, and warm-up, Pick-up and drop off. 2 hours in total. You must take a prior lesson before able to book our car for the road test.",
  },
  {
    question: "Where can I pay?",
    answer:
      "You can pay our instructor cash in person or use payment methods at this site when you order online.",
  },
  {
    question: "Can you tell me if i'll pass my road test?",
    answer:
      "Our instructors would be happy to advise you of your current strengths and skills as well as any habits that may require additional practice prior to testing.",
  },
];

const page = () => {
  return (
    <div>
      <SecondaryHeader title="School Policies" />
      <Container>
        <div className="mt-20">
          <h2 className="text-sm font-semibold text-primary sm:text-base md:text-balance md:text-lg">
            Standards and obligations of Horizon Driving School under the BC
            Motor Vehicle Act Division 27.06 As a student driver of horizon
            driving school, I have read and agreed to the following terms and
            conditions:
          </h2>
          <ul className="ml-4 mt-8 flex flex-col gap-6">
            {terms.map((item, i) => (
              <li key={i}>
                <p className="text-pretty text-xs leading-relaxed text-slate-600 md:text-base">
                  <span className="mr-1 text-black">{i + 1}.</span> {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20 py-20 lg:py-32">
          <h2 className="text-4xl font-semibold  text-primary ">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="my-4 rounded-xl border-2 p-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="data-[state=open]:text-primary  md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default page;
