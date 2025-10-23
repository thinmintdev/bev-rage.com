import Header from './components/Header';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollIndicator from './components/ScrollIndicator';
import HeroSection from './components/HeroSection';
import SectionPatternB from './components/SectionPatternB';
import ContactSection from './components/ContactSection';

export default function Home() {
  const sections = [
    { number: '00', label: 'hero', name: 'Home' },
    { number: '01', label: 'about', name: 'About Us' },
    { number: '02', label: 'services', name: 'Our Services' },
    { number: '03', label: 'contact', name: 'Get in Touch' },
  ];

  return (
    <>
      <Header />

      <HorizontalScroll>
        {/* Hero Section */}
        <HeroSection
          title="Welcome to Bev Rage"
          subtitle="True hospitality is a gesture of love and thrives when people benefit from it."
          ctaText="Discover Our Story"
          ctaLink="#about"
        />

        {/* About Section - Pattern B (Text Left, Images Right) */}
        <SectionPatternB
          sectionNumber="01"
          sectionLabel="about"
          headline='Crafting exceptional experiences since 2024.'
          bodyText={[
            'We believe in creating memorable moments',
            'through thoughtful service and attention to detail.',
            'Our team is dedicated to excellence in',
            'everything we do, from the smallest gesture',
            'to the grandest celebration.',
          ]}
          ctaText="Our Story"
          ctaLink="#story"
        />

        {/* Services Section - Pattern B (Text Left, Images Right) */}
        <SectionPatternB
          sectionNumber="02"
          sectionLabel="services"
          headline="Tailored solutions for every occasion."
          bodyText={[
            'From intimate gatherings to large celebrations,',
            'we provide comprehensive services that exceed',
            'expectations. Our expertise spans event planning,',
            'catering, and venue management with a focus',
            'on creating unforgettable experiences.',
          ]}
          ctaText="View Services"
          ctaLink="#services"
        />

        {/* Contact/FAQ Section - Color Block Pattern */}
        <ContactSection
          ctaTitle="Time to make your dreams come true."
          ctaText="Get in Touch"
          ctaLink="#contact"
          address={['123 Main Street', 'City, State 12345', 'United States']}
          email="hello@bevrage.com"
          phone="+1 (555) 123-4567"
          faqItems={[
            { question: 'What services do you offer?', answer: 'We offer comprehensive event planning and catering services including custom drink bars, beverage catering, and event coordination for weddings, corporate events, and private celebrations.' },
            { question: 'How far in advance should I book?', answer: 'We recommend booking 3-6 months in advance for peak season events (May-October). For off-season dates, 2-3 months notice is typically sufficient.' },
            { question: 'What is your service area?', answer: 'We primarily serve the greater metropolitan area and surrounding regions within a 50-mile radius. Travel fees may apply for events outside our standard service area.' },
            { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely! We work closely with clients to accommodate all dietary needs including vegan, gluten-free, kosher, and other special requirements. Just let us know your needs when booking.' },
          ]}
        />
      </HorizontalScroll>

      <ScrollIndicator sections={sections} />

      {/* Copyright - Bottom Right */}
      <div className="footer-copyright">
        <p>©2025 Bev-Rage</p>
      </div>
    </>
  );
}
