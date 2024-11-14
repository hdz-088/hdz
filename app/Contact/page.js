import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <div className="bg-cardbg p-10 rounded-lg text-center">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-sm text-caption mt-4 sm:px-28 leading-5">
          Wether you are interested in working together on a new project, have
          questions about my services or just want to say hello, I&apos;d love
          to hear from you
        </p>
      </div>
      <div class="bg-cardbg p-6 rounded-lg mt-7 sm:px-20 py-10 px-8">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="730106c8-5e5d-4a4e-bf3f-47891a75cafe"
          ></input>
          <div class="mb-6">
            <label class="block text-sm text-caption" for="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              class="mt-2 block w-full p-2 rounded-lg text-sm bg-[#363941] focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div class="mb-6">
            <label class="block text-sm text-caption" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your@email.com"
              required
              class="mt-2 block w-full p-2 rounded-lg text-sm bg-[#363941] focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div class="mb-6">
            <label class="block text-sm text-caption" for="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message..."
              required
              class="mt-2 block w-full p-2 rounded-lg text-sm bg-[#363941] focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-[#262A33] text-caption font-semibold py-2 rounded-lg hover:text-accent transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
