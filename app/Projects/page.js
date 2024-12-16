import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const dummyData = [
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
    title: "PM Modi's Speech Analysis",
    description:
      "Speech analysis of Indian PM Narendra Modi given during Independence Day of 2024",
    imagePath: "/skipper.png",
    link: "https://github.com/hdz-088/PM-Modi-s-Speech",
  },
  {
    title: "Python Mini Projects",
    description:
      "A GitHub repository that contains various mini projects of Python",
    imagePath: "/skipper.png",
    link: "https://github.com/hdz-088/Python-Mini-Projects",
  },
  {
    title: "SoundVoyage",
    description:
      "SoundVoyage: an online no-nonsense music player. Part of BCA College Group Project.",
    imagePath: "/soundvoyage.png",
    link: "https://hdz-088.github.io/SoundVoyage/",
  },
  {
    title: "HomePage",
    description:
      "Browser Start Page with Bookmarks, Resources, Personal Sites and Quick Launchers ",
    imagePath: "/skipper.png",
    link: "https://hdz-088.github.io/Homepage/",
  },
  {
    title: "Java Mini Projects",
    description:
      "A GitHub repository that contains various mini projects of Java",
    imagePath: "/skipper.png",
    link: "https://github.com/hdz-088/Java-Mini-Projects",
  },
  {
    title: "StatPy",
    description: "Python script to find Mean, Median and Mode (Basic Version)",
    imagePath: "/skipper.png",
    link: "https://github.com/hdz-088/StatPy",
  },
];

const Cards = ({ dummyData }) => {
  const cardElements = dummyData.map((data, index) => (
    <div
      key={index}
      className="flex md:flex-row justify-start gap-5 my-6 bg-background z-50 p-5 rounded-md w-full hover:bg-[#2E323D] md:text-base flex-col items-center"
    >
      <Image src={data.imagePath} alt={data.title} width={70} height={70} />
      <div className="flex flex-col justify-stretch items-center gap-3 sm:flex-row">
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

export default function Home() {
  return (
    <div className="xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <div className="bg-cardbg p-10 rounded-lg text-center">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-sm text-caption mt-4">
          Where I showcase my latest & greatest web development works.
        </p>
      </div>
      <div className="bg-cardbg flex flex-col gap-4 px-6 py-6 sm:p-10 rounded-lg mt-7 text-center">
        <h1 className="text-2xl font-medium text-left text-accent">Projects</h1>
        <Cards dummyData={dummyData} />
      </div>
    </div>
  );
}
