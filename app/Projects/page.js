import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const dummyData = [
  {
    title: "Project One",
    description:
      "highlighting its features highlighting its features and goals. alpha beta zeta ",
    imagePath: "/skipper.png",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description:
      "showcasing its unique aspects and advantages showcasing its unique aspects",
    imagePath: "/skipper.png",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description:
      "focusing on its functionality and user experience showcasing its unique aspects",
    imagePath: "/skipper.png",
    link: "https://example.com/project-three",
  },
  {
    title: "Project Four",
    description:
      "focusing on its functionality and user experience showcasing its unique aspects",
    imagePath: "/skipper.png",
    link: "https://example.com/project-three",
  },
  {
    title: "Project Five",
    description:
      "focusing on its functionality and user experience showcasing its unique aspects",
    imagePath: "/skipper.png",
    link: "https://example.com/project-three",
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
