'use client';

import { use, useEffect, useState } from "react";
import type {FaqDetailType} from "@common/interface";
import { FaqDetail } from "@components/faqDetail";
import { getFaqById } from "@lib/utils";
import { useRouter } from "next/navigation";

export default function FaqDetailsPage({params}: {params: Promise<{faqId: string}>}) {
    const {faqId} = use(params);
    const router = useRouter();
    const [faqData,setFaqData] = useState<FaqDetailType>({id:'', userId: 0, title: '', body: ''});
    
    const getFaqDetails = async(faqId:string) => {
        const faqData = await getFaqById(faqId)
        setFaqData(faqData);
    }
    
    useEffect(() => {
        getFaqDetails(faqId)
    }, [faqId]);

    // if(!faqData.id) return <p className="flex justify-center items-center">Loading...</p>;

    return (
       <>
            <button
                className="bg-white border-green-200 text-green-500 px-4 py-2 rounded m-4 cursor-pointer hover:bg-green-100"
                onClick={() => router.back()}
            >
                ⬅ Back
            </button>
         {faqData.id && (<section>
         <FaqDetail key={faqData.id} faqDetail={faqData} />
         </section>)
        }
        </>)
}