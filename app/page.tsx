import Header from './components/Header';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollIndicator from './components/ScrollIndicator';
import HeroSection from './components/HeroSection';
import SectionPatternB from './components/SectionPatternB';
import ContactPatternB from './components/ContactPatternB';
import ContactSectionB from './components/ContactSectionB';

export default function Home() {
  const sections = [
    { number: '00', label: 'Welcome', name: 'Home' },
    { number: '01', label: 'Our Mission', name: 'About Us' },
    { number: '02', label: 'Section02', name: 'Section02' },
    { number: '03', label: 'Our Mission', name: 'About Us 2' },
    { number: '04', label: 'Get In Touch', name: 'Contact' },
  ];

  return (
    <>
      <Header sections={sections} />

      <HorizontalScroll>
        {/* Hero Section */}
        <HeroSection
          title="BevRage"
          subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="Learn more"
          ctaLink="#about"
          imageSrc="/stock/opt/282179354-min.jpeg"
          buttonText="Get Started"
          buttonLink="#contact"
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
          images={{
            small: '/stock/opt/320649333-min.jpeg',
            large: '/stock/opt/317418234-min.jpeg',
            medium: '/stock/opt/527932711-min.jpeg',
          }}
        />

        {/* Section02 - Pattern B (Text Left, Images Right) */}
        <SectionPatternB
          sectionNumber="02"
          sectionLabel="Section02"
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
          images={{
            small: '/stock/opt/320649333-min.jpeg',
            large: '/stock/opt/317418234-min.jpeg',
            medium: '/stock/opt/527932711-min.jpeg',
          }}
        />

        {/* Hero Section 2 */}
        <HeroSection
          title="BevRage"
          subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="Learn more"
          ctaLink="#about"
          imageSrc="/stock/opt/282179354-min.jpeg"
          buttonText="Get Started"
          buttonLink="#contact"
        />

        {/* Contact Section B - SectionPatternB Layout with Contact Content */}
        <ContactSectionB
          sectionNumber="03"
          sectionLabel="contact"
          headline="Let's discuss your event. Send us a message."
          email="events@bevrage.com"
          phone="+1 (301) 233-3161"
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
