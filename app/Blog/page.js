"use client";

import React from "react";
import Link from "next/link";

const dummyData = [
  {
    title: "Blog One",
    description:
      "highlighting its features highlighting its features and goals. alpha beta zeta ",
    time: "March 15, 2022",
    link: "https://example.com/project-one",
  },
  {
    title: "Blog Two",
    description:
      "showcasing its unique aspects and advantages showcasing its unique aspects",
    time: "March 15, 2022",
    link: "https://example.com/project-two",
  },
  {
    title: "Blog Three",
    description:
      "focusing on its functionality and user experience showcasing its unique aspects",
    time: "March 15, 2022",
    link: "https://example.com/project-three",
  },
];

const Cards = ({ dummyData }) => {
  const cardElements = dummyData.map((data, index) => (
    <div
      key={index}
      className="flex flex-row justify-start gap-5 my-6 bg-background z-50 p-5 rounded-md w-full hover:bg-[#2E323D]"
    >
      <Link href={data.link}>
        <div className="flex flex-row justify-stretch items-center gap-3">
          <div className="flex flex-col text-left flex-wrap">
            <h1 className="text-xl font-medium hover:text-accent">
              {data.title}
            </h1>{" "}
            <p className="text-sm text-caption mt-1">{data.description}</p>
            <p className="text-xs text-caption  mt-3">{data.time}</p>
          </div>
          {/* <Link href={data.link} className="bg-cardbg p-2 rounded-md">
          <ArrowRight className="hover:text-accent" size={20} />
          </Link> */}
        </div>
      </Link>
    </div>
  ));

  return <div className="card-container">{cardElements}</div>;
};

const Blogs = () => {
  return (
    <div className="xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <div className="bg-cardbg p-10 rounded-lg text-center">
        <h1 className="text-3xl font-sembold">Blogs</h1>
        <p className="text-sm text-caption mt-4">
          Where I share my thoughts and insights on all things web development. As a passionate developer. 
        </p>
      </div>
      <div className="bg-cardbg flex flex-col gap-4 px-6 py-6 sm:p-10 rounded-lg text-center mt-7">
        <Cards dummyData={dummyData} />
      </div>
    </div>
  );
};

export default Blogs;
