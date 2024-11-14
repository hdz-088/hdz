"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { ArrowRight } from "react-feather";

const Profile = () => {
  return (
    <div className="bg-cardbg flex flex-col gap-4 px-6 py-6 sm:p-10 rounded-lg my-7 text-center">
      <h1 className="text-2xl font-medium text-left text-accent">
        Tools & Tech
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <img src="https://skillicons.dev/icons?i=apple" width={50} />
        <img src="https://skillicons.dev/icons?i=windows" width={50} />
        <img src="https://skillicons.dev/icons?i=linux" width={50} />
        <img src="https://skillicons.dev/icons?i=obsidian" width={50} />
        <img src="https://skillicons.dev/icons?i=postman" width={50} />
        <img src="https://skillicons.dev/icons?i=sublime" width={50} />
        <img src="https://skillicons.dev/icons?i=vscode" width={50} />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <img src="https://skillicons.dev/icons?i=html" width={50} />
        <img src="https://skillicons.dev/icons?i=css" width={50} />
        <img src="https://skillicons.dev/icons?i=js" width={50} />
        <img src="https://skillicons.dev/icons?i=git" width={50} />
        <img src="https://skillicons.dev/icons?i=github" width={50} />
        <img src="https://skillicons.dev/icons?i=cpp" width={50} />
        <img src="https://skillicons.dev/icons?i=java" width={50} />
        <img src="https://skillicons.dev/icons?i=md" width={50} />
        <img src="https://skillicons.dev/icons?i=py" width={50} />
        <img src="https://skillicons.dev/icons?i=figma" width={50} />
        <img src="https://skillicons.dev/icons?i=nodejs" width={50} />
        <img src="https://skillicons.dev/icons?i=pnpm" width={50} />
        <img src="https://skillicons.dev/icons?i=express" width={50} />
        <img src="https://skillicons.dev/icons?i=react" width={50} />
        <img src="https://skillicons.dev/icons?i=nextjs" width={50} />
        <img src="https://skillicons.dev/icons?i=tailwind" width={50} />
        <img src="https://skillicons.dev/icons?i=mongodb" width={50} />
      </div>
    </div>
  );
};

export default Profile;
