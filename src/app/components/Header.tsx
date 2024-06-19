import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RtrvrAILogo from "../../../public/rtrvrai.svg";
import About from "./Elements/About";
import DataQueryComponent from "./Elements/DataQueryComponent";
import DataMarketPlaceComponent from "./Elements/DataMarketPlaceComponent";

export default function Header({ className }: { className?: string }) {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            onClick={() => setActiveComponent(null)}
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
        <Link legacyBehavior href="/about">
          <a className="hover:text-white text-lg">About</a>
        </Link>
        <Link legacyBehavior href="/build-datasets">
          <a className="hover:text-white text-lg">Build Datasets</a>
        </Link>
        <Link legacyBehavior href="/explore-data-marketplace">
          <a className="hover:text-white text-lg">Explore Data Marketplace</a>
        </Link>
      </nav>
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col space-y-4 absolute top-full left-0 z-10 w-full bg-gray-800 p-4">
          <Link legacyBehavior href="/about">
            <a className="hover:text-white text-lg block">About</a>
          </Link>
          <Link legacyBehavior href="/build-datasets">
            <a className="hover:text-white text-lg block">Build Datasets</a>
          </Link>
          <Link legacyBehavior href="/explore-data-marketplace">
            <a className="hover:text-white text-lg block">Explore Data Marketplace</a>
          </Link>
        </nav>
      )}
    </header>
  );
}
