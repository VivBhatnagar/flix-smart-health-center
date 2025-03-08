
export default function FaqDetailsPage(params:{ faqName: string }) {
    
    return (
        <div>
            <p>{JSON.stringify(params.faqName)}</p>            
            <h1>FAQ Details of {params.faqName}</h1>
        </div>
    );
}