import FaqsList from "@components/Faqs/faqs";
import { JSX } from "react";
import fs from "fs";
import path from "path";
import { FaqType } from "@common/Interface/faq";

export default function HelpCenter(): JSX.Element {
  const pathName = path.join(process.cwd(), "src/data", "available-faqs.json"); // Ensures the file is read from the correct path
  const jsonData = fs.readFileSync(pathName, "utf-8"); 
  const data: FaqType[] = JSON.parse(jsonData);

  return (
    <section className="flex flex-col justify-center items-center pt-4">
      <FaqsList faqs={data} />
    </section>
  );
}
