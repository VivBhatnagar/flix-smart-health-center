import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./search";

export default function Header(): JSX.Element {
  return (
    <header className="bg-[#97d700] h-[15vh] flex">
      <Link className="basis-1/3 px-4 py-2" href="/">
        <Image
          className="w-auto h-auto"
          src="https://cdn-cf.cms.flixbus.com/drupal-assets/logos/flixbus.png"
          alt="Flixbus logo"
          width={180}
          height={38}
          priority
        />
      </Link>
      <div className="basis-2/3 pt-2 pb-6">
        <h1 className="text-3xl font-bold text-white m-auto">Help Center</h1>
        <div>
          <Search />
        </div>
      </div>
    </header>
  );
}
