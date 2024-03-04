"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/container";

import { Menu } from "lucide-react";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Driving Lessons",
    url: "/",
  },
  {
    name: "Packages",
    url: "/",
  },
  {
    name: "About",
    url: "/",
  },
  {
    name: "Policy",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-4">
        <Image
          src="/assets/logo.jpg"
          alt="logo"
          className="w-36 xl:w-44"
          width={200}
          height={200}
        />
        <div className="hidden lg:flex gap-8 xl:gap-11">
          {navItems.map((item) => (
            <a
              className="text-gray-700 font-semibold xl:font-bold xl:text-lg"
              href={item.url}
            >
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="/"
          className="hidden lg:block bg-primary px-6 xl:px-10 py-3 rounded-md tracking-widest"
        >
          <p className="text-lg xl:text-xl text-white">Login</p>
        </a>
        <div
          className="lg:hidden block cursor-pointer"
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
