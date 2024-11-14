"use client";

import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-cardbg p-10 rounded-t-lg text-center">
      <h1 className="text-2xl font-medium">Let's Create</h1>
      <h1 className="text-2xl font-medium mt-1 mb-6">something together!</h1>
      <Link
        href={"/Contact"}
        className="px-6 text-caption bg-background py-2 rounded-lg text-sm hover:text-accent"
      >
        Contact
      </Link>
    </div>
  );
};

export default Contact;
