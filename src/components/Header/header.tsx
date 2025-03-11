import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="bg-primary h-[15vh] flex px-6">
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
      <div className="basis-1/3 flex justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white m-auto" aria-label="Help Center">Help Center</h1>
      </div>
    </header>
  );
}
