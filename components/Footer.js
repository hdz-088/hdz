"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-cardbg flex flex-col gap-4 p-10 rounded-t-lg mt-7 text-center xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <h1 className="text-accent text-xl font-medium">Harshdeep</h1>
      <div className="text-sm text-caption mt-3">
        <Link href={"/"} className="mx-3 hover:text-accent">
          Home
        </Link>
        <Link href={"/Projects"} className="mx-3 hover:text-accent">
          Projects
        </Link>
        {/* <Link href={"/Blog"} className="mx-3 hover:text-accent">
          Blog
        </Link> */}
        <Link href={"/Contact"} className="mx-3 hover:text-accent">
          Contact
        </Link>
        <Link
          href={"https://hdz-088.github.io/resume/"}
          className="mx-3 hover:text-accent"
          target="_blank"
        >
          Resume
        </Link>
      </div>
      <hr className="text-caption opacity-20" />
      <p className="text-sm text-caption mt-3 font-['JetBrains Mono'] font-semibold">
        Made By <font color="#de6012">HDz</font>
      </p>
    </div>
  );
};

export default Footer;
