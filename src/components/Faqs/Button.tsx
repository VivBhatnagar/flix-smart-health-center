'use client';

import Link from "next/link";
import { useState } from "react";

export default function Button({ faqId, name }: { faqId: string, name:string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const isContactUs = faqId === '6';  // TODO : Can be Replaced with more specific identifier

    if (isContactUs) {
        return (
            <button
                className="bg-white border border-green-500 text-green-500 font-bold mt-4 py-2 px-4 rounded"
                onClick={() => setIsModalOpen(true) }>{name}</button>
        );
    }

  return (
    <Link
      className="bg-white border border-green-500 text-green-500 font-bold mt-4 py-2 px-4 rounded hover:bg-green-100 transition" aria-label={name}
      href={`faq/${faqId}`}
    >
      {name}
    </Link>
  );
}
