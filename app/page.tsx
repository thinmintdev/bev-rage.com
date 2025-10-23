import Header from './components/Header';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollIndicator from './components/ScrollIndicator';
import HeroSection from './components/HeroSection';
import SectionPatternB from './components/SectionPatternB';
import ContactSection from './components/ContactSection';

export default function Home() {
  const sections = [
    { number: '00', label: 'Welcome', name: 'Home' },
    { number: '01', label: 'Our Mission', name: 'About Us' },
    { number: '02', label: 'What We Offer', name: 'Our Services' },
    { number: '03', label: 'Get In Touch', name: 'Contact' },
  ];

  return (
    <>
      <Header sections={sections} />

      <HorizontalScroll>
        {/* Hero Section */}
        <HeroSection
          title="Welcome to Bev Rage"
          subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="About Bev-Rage"
          ctaLink="#about"
        />

        {/* About Section - Pattern B (Text Left, Images Right) */}
        <SectionPatternB
          sectionNumber="01"
          sectionLabel="about"
          headline='Crafting exceptional experiences for 25 years.'
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
          headline="Specialty drink services tailored to your event needs."
          bodyText={[
            'Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          ]}
          ctaText="View Services"
          ctaLink="#services"
        />

        {/* Contact/FAQ Section - Color Block Pattern */}
        <ContactSection
          ctaTitle="Have questions? Ready to Book?"
          ctaText="Get in Touch"
          ctaLink="#contact"
          email="events@bevrage.com"
          phone="+1 (301) 233-3161"
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
