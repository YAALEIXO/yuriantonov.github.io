import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import WhyMeSection from "@/components/WhyMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <WhyMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
