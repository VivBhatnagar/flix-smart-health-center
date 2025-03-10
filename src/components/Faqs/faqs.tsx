

import { FaqType } from "@/common/interface";
import Card from "./card";

export default function FaqsList({ faqs }: { faqs: FaqType[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-4 p-6">
      {faqs.map((faq) => (
        <Card faq={faq} key={faq.id} />
      ))}
    </ul>
  );

  // return (
  //   <ul className="grid grid-cols-1 py-10 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-20">
  //     {faqs.map((faq) => (
  //       <Card key={faq.id} faq={faq} />
  //     ))}
  //   </ul>
  // );
}
