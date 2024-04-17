import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

const footerItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Driving Lessons",
    url: "/lessons",
  },
  {
    name: "Packages",
    url: "/packages",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/",
  },
];

const Footer = () => {
  return (
    <Container className="mt-40 pb-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-between gap-y-8 lg:flex-row">
          <Image
            src="/assets/logo.jpg"
            alt="logo"
            className="w-24 xl:w-32"
            width={176}
            height={63.25}
          />
          <div className="xl:gap-81 flex gap-6">
            {footerItems.map((item) => (
              <Link
                key={item.name}
                className="text-sm text-slate-500 transition-all hover:text-slate-900 sm:text-base"
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-400" />
        <div className="m-auto text-center text-sm font-light text-slate-400 sm:text-base">
          Copyright © 2024 4 Wheel Driving. All Rights Reserved.
          <br />
          <Link
            href="https://xaama.tech/developments"
            className="underline transition-all hover:text-black"
          >
            Built By Xamaa Technlogies Ltd™
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
