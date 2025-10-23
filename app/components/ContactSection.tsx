interface ContactSectionProps {
  ctaTitle: string;
  ctaText: string;
  ctaLink: string;
  address: string[];
  email: string;
  phone: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export default function ContactSection({
  ctaTitle,
  ctaText,
  ctaLink,
  address,
  email,
  phone,
  faqItems,
}: ContactSectionProps) {
  return (
    <section className="section footer-section">
      {/* 40% CTA Block (Burgundy) */}
      <div className="footer-cta">
        <div className="content-wrapper">
          <h2 className="footer-cta-title">{ctaTitle}</h2>
          <a href={ctaLink} className="cta-link light">
            {ctaText} →
          </a>
        </div>
      </div>

      {/* 60% Info Block (Beige) */}
      <div className="footer-info">
        <div className="contact-section">
          <h3>ADDRESS</h3>
          {address.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="contact-section">
          <h3>CONTACTS</h3>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>

        {faqItems && faqItems.length > 0 && (
          <div className="faq-section">
            <h3>FREQUENTLY ASKED</h3>
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <p className="faq-number">{String(i + 1).padStart(3, '0')}</p>
                <p className="faq-question">{item.question}</p>
              </div>
            ))}
          </div>
        )}

        <div className="footer-legal">
          <p>©2025 Your Company Name</p>
        </div>
      </div>
    </section>
  );
}
