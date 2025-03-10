import { JSX } from "react";
import { FaqDetailType } from "../common/interface";

export function FaqDetail({
  faqDetail,
}: {
  faqDetail: FaqDetailType;
}): JSX.Element {
  return (
    <div className="flex w-2xl m-auto mt-10 items-stretch">
      <h1>{faqDetail.title}</h1>
      <p>{faqDetail.body}</p>
    </div>
  );
}
