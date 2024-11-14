"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, GitHub, Instagram, AtSign } from "react-feather";

const Profile = () => {
  return (
    <div className="bg-cardbg flex flex-col gap-2 p-10 items-center justify-center rounded-lg text-center w-full">
      <Image
        src="/skipper.png"
        alt="Profile"
        width={130}
        height={130}
        className="border-solid border-2 border-white rounded-full"
      />
      <p className="text-caption text-sm">@hdz_088</p>
      <h1 className="text-3xl font-medium">Harshdeepsinh Zala</h1>
      <div className="flex flex-row gap-6 my-4 items-center justify-center text-accent">
        <Link href="https://github.com/hdz-088/" target="_blank">
          <GitHub strokeWidth={1.5} height={18} />
        </Link>
        <Link href="https://www.linkedin.com/in/hdz088" target="_blank">
          <Linkedin strokeWidth={1.5} height={18} />
        </Link>
        <Link href="https://www.Instagram.com/hdz_088/" target="_blank">
          <Instagram strokeWidth={1.5} height={18} />
        </Link>
        <Link href="mailto:hdz088@outlook.com" target="_blank">
          <AtSign strokeWidth={1.5} height={18} />
        </Link>
      </div>
      <p className="text-sm text-caption">Hi, Im Harshdeep, web developer</p>
      <p className="text-sm text-caption">
        Eager to step into the ever-changing
      </p>
      <p className="text-sm text-caption">world of technology</p>
    </div>
  );
};

export default Profile;
