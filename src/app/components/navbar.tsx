"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/container";

import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
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

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-6">
        <Image
          src="/assets/logo.jpg"
          alt="logo"
          className="w-36 xl:w-44"
          width={200}
          height={200}
        />
        <div className="hidden gap-8 lg:flex xl:gap-11">
          {navItems.map((item) => (
            <Link
              className="font-semibold text-gray-800 after:block after:h-[2px] after:w-[100%] after:scale-0 after:bg-primary after:transition-all hover:after:scale-110 xl:text-lg xl:font-bold"
              href={item.url}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/login"
          className="hidden rounded-md bg-primary px-6 py-3 tracking-widest transition-all hover:scale-110 lg:block xl:px-8"
        >
          <p className="text-lg text-white ">Login</p>
        </Link>
        <div
          className="block cursor-pointer lg:hidden"
          onClick={() => {
            console.log("click");
          }}
        >
          <Menu className="text-primary" size={42} />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
