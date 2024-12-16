"use client";

import React from "react";
import Link from "next/link";
import { Home, Folder, Tool, Edit, Mail, FileText } from "react-feather";

const Navbar = () => {
  return (
    <nav className="bg-cardbg flex flex-row gap-10 py-8 h-14 mb-7 items-center justify-center rounded-b-lg xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <Link href={"/"} className="hover:text-accent">
        <Home strokeWidth={1.5} />
      </Link>

      <Link href={"/Projects"} className="hover:text-accent">
        <Folder strokeWidth={1.5} />
      </Link>

      <Link href={"/Tools"} className="hover:text-accent">
        <Tool strokeWidth={1.5} />
      </Link>

      {/* <Link href={"/Blog"} className="hover:text-accent">
        <Edit strokeWidth={1.5} />
      </Link> */}

      <Link href={"/Contact"} className="hover:text-accent">
        <Mail strokeWidth={1.5} />
      </Link>

      <Link
        href={"https://hdz-088.github.io/resume/"}
        target="_blank"
        className="hover:text-accent"
      >
        <FileText strokeWidth={1.5} />
      </Link>
    </nav>
  );
};

export default Navbar;
