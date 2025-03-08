

import Image from "next/image";
import LearnMore from "components/components/learnMore";
import { Faq } from "components/common/interface";
import Card from "./card";



export default function FaqsList({ faqs }: { faqs: Faq[] }) {
  // return (
  //   <ul className="flex flex-wrap items-center justify-center gap-2">
  //     {faqs.map((faq) => (
  //       <Card faq={faq} key={faq.id} />
  //     ))}
  //   </ul>
  // );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {faqs.map((faq) => (
        <Card key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
