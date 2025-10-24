import Header from './components/Header';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollIndicator from './components/ScrollIndicator';
import HeroSection from './components/HeroSection';
import SectionPatternB from './components/SectionPatternB';
import ContactPatternB from './components/ContactPatternB';
import ContactSectionB from './components/ContactSectionB';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  const sections = [
    { number: '00', label: 'Welcome', name: 'Home' },
    { number: '01', label: 'Our Mission', name: 'About Us' },
    { number: '02', label: 'Specialty Drink Bars', name: 'Services' },
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
          imageSrc="/stock/282179354-min.webp"
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
            small: '/stock/320649333-min.webp',
            large: '/stock/317418234-min.webp',
            medium: '/stock/527932711-min.webp',
          }}
        />

        {/* Services Section - 3x2 Grid Layout */}
        <ServicesSection
          sectionNumber="02"
          sectionLabel="services"
          headline='Specialty drink services tailored to your event needs.'
          bodyText={[
            'From custom cocktail bars to beverage catering,',
            'we bring exceptional drink experiences to your events.',
            'Our expert mixologists craft memorable moments',
            'for weddings, corporate events, and celebrations.',
          ]}
          ctaText="View Services"
          ctaLink="#services"
          images={[
            '/stock/282179354-min.webp',
            '/stock/282429088-min.webp',
            '/stock/292993121-min.webp',
            '/stock/317418234-min.webp',
            '/stock/320649333-min.webp',
            '/stock/389047222-min.webp',
          ]}
        />

        {/* Hero Section 2 */}
        <HeroSection
          title="BevRage"
          subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="Learn more"
          ctaLink="#about"
          imageSrc="/stock/282179354-min.webp"
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
