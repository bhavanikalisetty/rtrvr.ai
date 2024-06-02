"use client";

import About from "../components/Elements/About";
import Header from "../components/Header";


export default function AboutPage() {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-800 p-2 mx-auto max-w-full">
        <Header className="my-5" />

        <About />

    </div>
    );
}
