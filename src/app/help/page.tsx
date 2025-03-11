import FaqsList from "@components/Faqs/faqs";
import { JSX } from "react";
import type { FaqType } from "@common/Interface/faq";
import data from "@/data/available-faqs.json";

export default function HelpCenter(): JSX.Element {
  const faqData: FaqType[] = data;

  return (
    <section className="flex flex-col justify-center items-center pt-4">
      <FaqsList faqs={faqData} />
    </section>
  );
}