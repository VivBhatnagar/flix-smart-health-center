"use client";

import { useState } from "react";
import { FaqType } from "@common/Interface/faq";
import Card from "./card";
import Search from "@common/Search/search";

export default function FaqsList({ faqs }: { faqs: FaqType[] }) {
  const [filteredFaqs, setFilteredFaqs] = useState<FaqType[]>(faqs);
  const originalFaqs = [...faqs];

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredFaqs(originalFaqs);
      return;
    }
    const filtered = originalFaqs.filter((faq) =>
      faq.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredFaqs(filtered);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <ul className="flex flex-wrap justify-center gap-4 p-6">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <Card faq={faq} key={faq.id} faqsLength={filteredFaqs.length} />
          ))
        ) : (
          <p className="text-center flex flex-col w-2xl m-auto mt-10 p-4 text-primary bg-white rounded border border-green-200" aria-label="No FAQs found">No FAQs found</p>
        )}
      </ul>
    </>
  );
}
