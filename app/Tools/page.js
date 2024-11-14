import React from "react";

export default function Home() {
  return (
    <div className="xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
            <div className="bg-cardbg p-10 rounded-lg text-center">
        <h1 className="text-3xl font-semibold">Tools</h1>
        <p className="text-sm text-caption mt-4">
          The tools and technologies I use to bring my projects to life.
        </p>
      </div>
      <div className="bg-cardbg flex flex-col gap-4 px-6 py-6 sm:p-10 rounded-lg text-center mt-7">
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
    </div>
  );
}
