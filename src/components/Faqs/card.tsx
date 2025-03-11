import Image from "next/image";
import { JSX } from "react";
import { FaqType } from "@common/Interface/faq";
import Button from "@components/Faqs/Button";

export default function Card({ faq, faqsLength }: { faq: FaqType, faqsLength: number }): JSX.Element {
  const { id, name, icon } = faq;

  return (
    <li
      key={id}
      className={`py-5 text-center border-2 border-green-200 bg-white rounded-lg shadow-md p-6 flex flex-col items-center
        ${faqsLength <= 3 ? "w-[45%] md:w-[40%]" : "w-[70%] sm:w-[48%] md:w-[30%] lg:w-[25%] xl:w-[22%]"}`}
    >
      <div className="text-primary h-8 text-xl mb-2 relative">
        <Image
          className="w-8 h-8"
          src={icon}
          alt={name}
          width={32}
          height={32}
        />
      </div>

      <h3 className="text-xl font-semibold text-primary" aria-label={name}>
        {name}
      </h3>
      <Button faqId={id} name="Learn More" />
    </li>
  );
}
