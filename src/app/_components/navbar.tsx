"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/container";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: `Driving Lessons`,
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
    url: "/policy",
  },
];

const Navbar = () => {
  const [toggleBar, setToggleBar] = useState(false);

  return (
    <div className="relative">
      <div
        className={cn(
          "absolute left-0  top-0 z-50 block h-screen w-[50%] min-w-[300px] translate-x-[-101%] bg-primary transition-all duration-1000 lg:hidden",
          toggleBar ? "translate-x-0" : "",
        )}
      >
        <div className="mt-10 flex flex-col gap-8 p-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className="text-lg font-medium text-white transition-all hover:translate-x-[12.5%] hover:scale-125 xl:font-semibold"
              href={item.url}
              onClick={() => {
                setToggleBar(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "absolute left-0 top-0 z-40 block h-screen w-full bg-black transition-all duration-1000 lg:hidden",
          toggleBar ? "block opacity-80" : "hidden opacity-0",
        )}
      />
      <Container>
        <div className="relative flex items-center justify-between py-6">
          <Link href={"/"}>
            <Image
              src="/assets/logo.jpg"
              alt="logo"
              className="w-36 xl:w-44"
              width={176}
              height={63.25}
            />
          </Link>
          <div className="hidden gap-8 lg:flex xl:gap-11">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="whitespace-pre-wrap  font-medium text-slate-800 after:block after:h-[2px] after:w-[100%] after:scale-0 after:bg-primary after:transition-all hover:after:scale-110 xl:text-lg xl:font-semibold"
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* <Link
          href="/login"
          className="hidden rounded-md bg-primary px-6 py-3 tracking-widest transition-all hover:scale-110 lg:block xl:px-8"
        >
          <p className="text-lg text-white ">Login</p>
        </Link> */}
          <div
            className="block cursor-pointer lg:hidden"
            onClick={() => {
              console.log("click");
            }}
          >
            {toggleBar ? (
              <div>
                <X
                  className="relative z-[100] text-white"
                  size={42}
                  strokeWidth={1.5}
                  onClick={() => {
                    setToggleBar(!toggleBar);
                  }}
                />
              </div>
            ) : (
              <div>
                <Menu
                  className="relative z-[100] text-primary"
                  size={42}
                  strokeWidth={1.5}
                  onClick={() => {
                    setToggleBar(!toggleBar);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
