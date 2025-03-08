import type { Faq } from "components/common/interface";
import Image from "next/image";
import LearnMore from "./learnMore";
import { JSX } from "react";

export default function Card({ faq }: { faq: Faq }):JSX.Element {
  const { id, name, icon } = faq;

  return (
    <li
      key={id}
      className="bg-white shadow-md rounded-lg p-5 text-center border border-green-500 hover:bg-green-100 transition"
    >
      <div className="text-green-500 h-4 text-xl mb-2 relative">
        <Image className="w-4 h-4" src={`/${icon}`} alt={name} fill />
      </div>

      <h3 className="text-xl font-semibold text-green-500">{name}</h3>
      <LearnMore faqName={name} />
    </li>
  );
}
