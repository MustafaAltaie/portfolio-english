'use client';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Educations from "./components/Educations/Educations";
import Experiences from "./components/Experiences/Experiences";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

const Home = () => {
  const educationRef = useRef<HTMLElement | null>(null);
  const ExperienceRef = useRef<HTMLElement | null>(null);
  const SkillRef = useRef<HTMLElement | null>(null);
  const ContactRef = useRef<HTMLElement | null>(null);

  const scrollToEducations = () => educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToExperiences = () => ExperienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToSkills = () => SkillRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToContact = () => ContactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <main>
      <Header
        scrollToEducations={scrollToEducations}
        scrollToExperiences={scrollToExperiences}
        scrollToSkills={scrollToSkills}
        scrollToContact={scrollToContact}
      />
      <Profile />
      <Educations ref={educationRef} />
      <Experiences ref={ExperienceRef} />
      <Skills ref={SkillRef} />
      <Footer ref={ContactRef} />
    </main>
  )
}

export default Home;