import Link from "next/link";
import { JSX } from "react";

export default function Button({ faqId, name }: { faqId: string, name:string }): JSX.Element {


  return (
    <Link
      className="bg-white border border-primary text-primary font-bold mt-4 py-2 px-4 rounded hover:bg-green-100 transition" aria-label={name}
      href={`faq/${faqId}`}
    >
      {name}
    </Link>
  );
}
