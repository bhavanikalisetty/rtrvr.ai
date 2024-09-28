import { useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import RtrvrAILogo from "../../../public/rtrvrai.svg";

export default function Header({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>rtrvr.ai</title>
      </Head>

      <header
      className={`relative flex items-center justify-between text-gray-200 text-2xl ${className}`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={RtrvrAILogo}
            alt="rtrvr.ai"
            width="230"
            height="50"
            className="ml-3 cursor-pointer"
          />
        </Link>
        <button
          className="lg:hidden text-2xl focus:outline-none ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      <nav className="hidden lg:flex space-x-4 pr-4">
        <Link href="/team" className="hover:text-white text-lg">
          Team
        </Link>
        <Link href="/contact" className="hover:text-white text-lg">
          Contact
        </Link>
      </nav>
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col space-y-4 absolute top-full left-0 z-10 w-full bg-gray-800 p-4">
          <Link href="/team" className="hover:text-white text-lg block">
            Team
          </Link>
          <Link href="/contact" className="hover:text-white text-lg block">
            Contact
          </Link>
        </nav>
      )}
    </header>
    </>
  );
}
