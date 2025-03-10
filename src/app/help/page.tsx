import FaqsList from "@components/Faqs/faqs";
import { JSX } from "react";
import fs from "fs";
import path from "path";
import { FaqType } from "@common/interface";

export default function HelpCenter(): JSX.Element {
  const pathName = path.join(process.cwd(), "src/data", "available-faqs.json"); // Ensure correct path
  const jsonData = fs.readFileSync(pathName, "utf-8"); 
  const data: FaqType[] = JSON.parse(jsonData);

  return (
    <section>
      <FaqsList faqs={data} />
    </section>
  );
}

// middleware
