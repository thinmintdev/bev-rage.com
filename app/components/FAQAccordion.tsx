'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h3>FREQUENTLY ASKED</h3>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question-button"
            onClick={() => toggleItem(i)}
            aria-expanded={openIndex === i}
          >
            <div className="faq-question-content">
              <p className="faq-number">{String(i + 1).padStart(3, '0')}</p>
              <p className="faq-question">{item.question}</p>
            </div>
            <span className={`faq-icon ${openIndex === i ? 'open' : ''}`}>
              +
            </span>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
