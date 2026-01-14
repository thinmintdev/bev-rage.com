import Header from './components/Header';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollIndicator from './components/ScrollIndicator';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';

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
          title="Events Elevated with Exceptional Beverage Experiences."
          subtitle="Our years of expertise, passion for quality, and commitment to service ensure your event is unforgettable."
          ctaText="Learn more"
          ctaLink="#about"
          imageSrc="/stock/282179354-min.webp"
          buttonText="Contact Us"
          buttonLink="#contact"
        />

        {/* About Section */}
        <AboutSection
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
          ctaText="Our Services"
          ctaLink="#services"
          images={{
            small: '/event_pics/Rolex%20martini%20(Large)%20(1)%20(1).webp',
            large: '/event_pics/blood-orange%20(Large)%20(1).webp',
            medium: '/stock/527932711-min.webp',
          }}
        />

        {/* Services Section - 3x2 Grid Layout */}
        <ServicesSection
          sectionNumber="02"
          sectionLabel="services"
          headline='Specialty Drink Bars For All Tastes and Occasions.'
          bodyText={[
            'From custom cocktail bars to classic coffee, we provide',
            'a full service beverage experience.',
            'We offer custom touches to make your event unforgettable,',
            'Printed ripples, branded carts, printed products and more',
            'to elevate your event to the next level.',
          ]}
          ctaText="Event Gallery"
          ctaLink="#events"
          images={[
            '/stock/282179354-min.webp',
            '/stock/282429088-min.webp',
            '/stock/292993121-min.webp',
            '/stock/317418234-min.webp',
            '/stock/320649333-min.webp',
            '/stock/389047222-min.webp',
          ]}
        />

        {/* Events Section */}
        <EventsSection
          sectionNumber="03"
          sectionLabel="events"
          title="Spectacular Setups and Service for Every Occasion."
          subtitle="We pride ourselves on presentation and professionalism, ensuring everything looks as delicious as it tastes."
          ctaText="Schedule a Consultation"
          ctaLink="#about"
          images={{
            primary: '/event_pics/Pourover%20(Large).webp',
            secondary: '/event_pics/full%20view%20(Large)%20(1).webp',
          }}
          buttonText="Get in Touch"
          buttonLink="#contact"
        />

        {/* Contact Section */}
        <ContactSection
          sectionNumber="04"
          sectionLabel="contact"
          headline="We've got it from here."
          bodyText={[
            'Ready to elevate your next event with specialty drinks?',
            'Contact us to discuss your vision and let us create',
            'an unforgettable beverage experience for your guests.',
            'We look forward to working with you!',
          ]}
          email="events@bevrage.com"
          phone="+1 (301) 233-3161"
        />

      </HorizontalScroll>

      <ScrollIndicator sections={sections} />

      {/* Copyright - Bottom Right */}
      <div className="footer-copyright">
        <p>©2026 Bev-Rage</p>
      </div>
    </>
  );
}
