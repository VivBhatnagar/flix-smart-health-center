import Link from "next/link";

export default function LearnMore({ faqName }: { faqName: string }) {
  return (
    <Link
      className="bg-white border border-green-500 text-green-500 font-bold mt-4 py-2 px-4 rounded"
      href={`/faq/${faqName}`}
    >
      Learn More
    </Link>
  );
}
