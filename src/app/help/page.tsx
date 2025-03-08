import FaqsList from "components/components/faqs"

import { JSX } from "react";

export default function HelpCenter() : JSX.Element{

    const faqs = [
        {
          "id": "f1",
          "name": "Request a refund",
          "icon": "icons/refund-svg.svg"
        },
        {
          "id": "f2",
          "name": "Booking for Children",
          "icon": "icons/children-svg.svg"
        },
        {
          "id": "f3",
          "name": "Baggage",
          "icon": "icons/baggage-svg.svg"
        },
        {
          "id": "f4",
          "name": "Contact Us",
          "icon": "icons/contact-us-svg.svg"
        },
        {
            "id": "f1",
            "name": "Request a refund",
            "icon": "icons/refund-svg.svg"
          },
          {
            "id": "f2",
            "name": "Booking for Children",
            "icon": "icons/children-svg.svg"
          },
          {
            "id": "f3",
            "name": "Baggage",
            "icon": "icons/baggage-svg.svg"
          },
          {
            "id": "f4",
            "name": "Contact Us",
            "icon": "icons/contact-us-svg.svg"
          }]
      
    return (
        <section >
            <FaqsList faqs={faqs}/>
        </section>
        
    )
}

// middleware