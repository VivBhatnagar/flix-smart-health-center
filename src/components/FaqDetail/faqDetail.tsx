import { JSX } from "react";
import { FaqDetailType } from "../../common/Interface/faq";

export function FaqDetail({
  faqDetail,
}: {
  faqDetail: FaqDetailType ;
}): JSX.Element {
  return (
    <div className="flex flex-col w-2xl m-auto mt-10 p-4 text-primary items-stretch bg-white rounded border border-green-200">
      <h1 aria-label={`FAQ Title : ${faqDetail?.title}`}>FAQ Title : {faqDetail?.title}</h1>
      <p aria-label="Description">Description : {faqDetail?.body}</p>
    </div>
  );
}
