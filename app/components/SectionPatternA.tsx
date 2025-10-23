interface SectionPatternAProps {
  sectionNumber: string;
  sectionLabel: string;
  headline: string;
  bodyText: string[];
  ctaText: string;
  ctaLink: string;
}

export default function SectionPatternA({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  ctaText,
  ctaLink,
}: SectionPatternAProps) {
  return (
    <section className="section content-section pattern-a">
      {/* 40% Image Column with Stepped Layout */}
      <div className="image-column">
        <div className="image-grid-stepped">
          <div className="image-placeholder stepped-large portrait">
            <span className="placeholder-text">Portrait<br/>Large</span>
          </div>
          <div className="image-placeholder stepped-medium portrait offset-right">
            <span className="placeholder-text">Portrait<br/>Medium</span>
          </div>
          <div className="image-placeholder stepped-small landscape offset-left">
            <span className="placeholder-text">Landscape Small</span>
          </div>
        </div>
      </div>

      {/* 60% Text Column */}
      <div className="text-column">
        <div className="content-wrapper">
          <p className="section-label">
            {sectionNumber} / {sectionLabel}
          </p>

          <h2 className="section-heading">
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="body-content">
            {bodyText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <a href={ctaLink} className="cta-link">
            {ctaText} →
          </a>
        </div>
      </div>
    </section>
  );
}
