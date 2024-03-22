import Image from "next/image";
import Container from "@/components/container";
import React from "react";
import { Locate, Mail, Map, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <Container className="relative">
      <div className="flex flex-col gap-x-20 gap-y-20 py-28 lg:flex-row">
        <div className="flex-1 basis-1">
          <h2 className="text-lg tracking-wide  text-primary  lg:text-xl">
            Get in touch
          </h2>
          <h1 className="inline-block text-3xl font-bold tracking-wide  text-slate-900  lg:text-4xl">
            Contact Us
          </h1>
          <p className="mt-6 text-pretty text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
            adipiscing tincidunt interdum tellus du.
          </p>
          <div className="mt-10 flex flex-col gap-8 text-slate-500">
            <div className="flex items-center gap-4">
              <Mail />
              <p>4wheelz@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone />
              <p>(123)-456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <Map />
              <p>
                794 Mcallister St <br /> San Francisco, 94102
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex-1 basis-1  rounded-3xl bg-[#FFFBF6]">
          <form
            action="https://formsubmit.co/abdullahbinazeem06@gmail.com"
            method="POST"
            className="px-8 py-10"
          >
            <div className="mb-6 flex w-full flex-col  items-start gap-x-6 md:flex-row">
              <div className="w-full flex-1">
                <h2 className="mb-2 w-full font-medium ">
                  Name{" "}
                  <span className="text-2xl font-bold text-red-500">*</span>
                </h2>
                <input
                  className="focus:shadow-outline box-border w-full rounded-lg p-3 text-sm text-gray-900 focus:outline-none"
                  name="first name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full flex-1">
                <h2 className="mb-2 font-medium ">
                  Email{" "}
                  <span className="text-2xl font-bold text-red-500">*</span>
                </h2>
                <input
                  className="focus:shadow-outline box-border w-full rounded-lg p-3 text-sm text-gray-900 focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                type="hidden"
                name="_next"
                value="http://xaama.tech/developments"
              ></input>
              <input
                type="hidden"
                name="_autoresponse"
                value="Your online form was recieved by Xamaa Technologies. We will be in touch shortly!"
              ></input>
            </div>
            <div className="mt-4 flex w-full grow flex-col self-stretch md:mt-0">
              <h2 className="mb-2 font-medium ">
                Message
                <span className="text-2xl font-bold text-red-500">*</span>
              </h2>
              <textarea
                name="message"
                placeholder="Message"
                className="focus:shadow-outline h-full max-h-[300px] min-h-[100px] w-full rounded-lg p-3 text-sm text-gray-900 focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="my-6 ">
              <button
                className="focus:shadow-outline  font-medoum rounded-lg bg-primary px-5 py-3 uppercase tracking-wide 
                      text-gray-100 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
