import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Folder } from "react-feather";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blog";

export default function Home() {
  return (
    <div className="xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <Profile />
      <Projects />
      {/* <Blogs /> */}
      <Tools />
      <Contact />
    </div>
  );
}
