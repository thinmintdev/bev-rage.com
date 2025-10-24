import Header from './components/Header';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollIndicator from './components/ScrollIndicator';
import HeroSection from './components/HeroSection';
import ContentHeroSection from './components/ContentHeroSection';
import SectionPatternB from './components/SectionPatternB';
import ContactPatternB from './components/ContactPatternB';
import ContactSectionB from './components/ContactSectionB';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  const sections = [
    { number: '00', label: 'Home', name: 'Home' },
    { number: '01', label: 'About', name: 'About Us' },
    { number: '02', label: 'Drink Bars', name: 'Services' },
    { number: '03', label: 'Events', name: 'Events' },
    { number: '04', label: 'Contact Us', name: 'Contact' },
  ];

  return (
    <>
      <Header sections={sections} />

      <HorizontalScroll>
        {/* Hero Section */}
        <HeroSection
          title="Beverage Experiences for Any Occasion."
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
          headline='25 Years of Delicious Drinks and Unforgettable Events.'
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
          headline='Specialty Drink Bars Designed Around Your Event.'
          bodyText={[
            'From custom cocktail bars to classic coffee,',
            'we provide a full service beverage experience.',
            'Ripples, Branded Carts, and more - a custom fit',
            'for each wedding, corporate event, and celebration.',
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

        {/* Events Section - Content Hero Style */}
        <ContentHeroSection
          sectionNumber="03"
          sectionLabel="events"
          title="We Take Coffee Breaks Too... Seriously."
          subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="Learn more"
          ctaLink="#about"
          imageSrc="/stock/282179354-min.webp"
          buttonText="Roasting Info"
          buttonLink="#contact"
        />

        {/* Contact Section B - SectionPatternB Layout with Contact Content */}
        <ContactSectionB
          sectionNumber="04"
          sectionLabel="contact"
          headline="We've got it from here, Enjoy your party."
          bodyText={[
            'Ready to elevate your next event with specialty drinks?',
            'Contact us to discuss your vision and let us create',
            'an unforgettable beverage experience for your guests.',
          ]}
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
