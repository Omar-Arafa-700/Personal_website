import HomeShell from "./components/home/HomeShell";
import HomeHeader from "./components/home/HomeHeader";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <HomeShell>
      <HomeHeader />
      <main
        id="top"
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </HomeShell>
  );
}
