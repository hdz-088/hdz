"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "react-feather";

const projectData = [
  {
    title: "SOUNotes",
    description:
      "A study material website for my college. More than 10k+ page views each month.",
    imagePath: "/sounotes.png",
    link: "https://sounotes.vercel.app/",
  },
  {
    title: "TimeBoxxing",
    description:
      "A simple web-based tool that allows users to create, edit, and export time blocks. The tool also allows users to delete the last added task and export the created time block as an image.",
    imagePath: "/timeboxxing.png",
    link: "https://hdz-088.github.io/TimeBoxing/",
  },
  {
    title: "SoundVoyage",
    description:
      "SoundVoyage: an online no-nonsense music player. Part of BCA College Group Project.",
    imagePath: "/soundvoyage.png",
    link: "https://hdz-088.github.io/SoundVoyage/",
  },
];

const Cards = ({ projectData }) => {
  const cardElements = projectData.map((data, index) => (
    <div
      key={index}
      className="flex md:flex-row justify-start gap-5 my-6 bg-background z-50 p-5 rounded-md w-full hover:bg-[#2E323D] md:text-base flex-col items-center"
    >
      <Image src={data.imagePath} alt={data.title} width={70} height={70} />
      <div className="flex md:flex-row justify-stretch items-center gap-3 flex-col">
        <div className="flex flex-col text-left flex-wrap">
          <h1 className="text-xl font-medium">{data.title}</h1>
          <p className="text-sm text-caption">{data.description}</p>
        </div>
        <Link href={data.link} className="bg-cardbg p-2 rounded-md">
          <ArrowRight className="hover:text-accent" size={20} />
        </Link>
      </div>
    </div>
  ));

  return <div className="card-container">{cardElements}</div>;
};

const Profile = () => {
  return (
    <div className="bg-cardbg flex flex-col gap-4 px-6 py-6 sm:p-10 rounded-lg my-7 text-center">
      <h1 className="text-2xl font-medium text-left text-accent">Projects</h1>
      <Cards projectData={projectData} />
    </div>
  );
};

export default Profile;
