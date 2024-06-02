import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RtrvrAILogo from "../../../public/rtrvrai.svg";
import About from "./Elements/About";
import DataQueryComponent from "./Elements/DataQueryComponent";
import DataMarketPlaceComponent from "./Elements/DataMarketPlaceComponent";

export default function Header({ className }: { className?: string }) {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <header
        className={`flex items-center justify-between text-gray-200 text-2xl ${className}`}
      >
         <Link href="/">
          <Image
            src={RtrvrAILogo}
            alt="rtrvrai-logo"
            width="230"
            height="50"
            className="ml-3 cursor-pointer"
            onClick={() => setActiveComponent(null)}
          />
        </Link>
        <nav className="flex space-x-4 pr-4">
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
      </header>
      {/* {activeComponent === "about" && <About />}
      {activeComponent === "build-datasets" && <DataQueryComponent />}
      {activeComponent === "explore-data-marketplace" && <DataMarketPlaceComponent />} */}
    </>
  );
}