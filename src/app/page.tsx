'use client';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Educations from "./components/Educations/Educations";
import Experiences from "./components/Experiences/Experiences";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";
import { useReadProfileQuery } from "../../features/profile/profileApi";
import { useReadEducationsQuery } from "../../features/educations/educationApi";
import { useReadExpsQuery } from "../../features/experiences/experienceApi";
import { useReadBackendSkillsQuery } from "../../features/skills/skillsApi";
import { useReadFrontendSkillsQuery } from "../../features/skills/skillsApi";
import { useReadOtherSkillsQuery } from "../../features/skills/skillsApi";
import { useReadSocialQuery } from "../../features/footer/socialApi";
import WaitingModal from "./dashboard/WaitingModal";

const Home = () => {
  const { data: profile, isLoading: proLoading } = useReadProfileQuery();
  const { data: educations, isLoading: eduLoading } = useReadEducationsQuery();
  const { data: experiences, isLoading: expLoading } = useReadExpsQuery();
  const { data: backend, isLoading: backLoading } = useReadBackendSkillsQuery();
  const { data: frontend, isLoading: frontLoading } = useReadFrontendSkillsQuery();
  const { data: other, isLoading: otherLoading } = useReadOtherSkillsQuery();
  const { data: socials, isLoading: sociLoading } = useReadSocialQuery();

  const isDataLoading = proLoading || eduLoading || expLoading || backLoading || frontLoading || otherLoading || sociLoading;

  const educationRef = useRef<HTMLElement | null>(null);
  const ExperienceRef = useRef<HTMLElement | null>(null);
  const SkillRef = useRef<HTMLElement | null>(null);
  const ContactRef = useRef<HTMLElement | null>(null);

  const scrollToEducations = () => educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToExperiences = () => ExperienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToSkills = () => SkillRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToContact = () => ContactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (isDataLoading) return <WaitingModal />

  return (
    <main>
      <Header
        scrollToEducations={scrollToEducations}
        scrollToExperiences={scrollToExperiences}
        scrollToSkills={scrollToSkills}
        scrollToContact={scrollToContact}
      />
      <Profile profile={profile?.profile} />
      <Educations educations={educations} ref={educationRef} />
      <Experiences experiences={experiences} ref={ExperienceRef} />
      <Skills backend={backend} frontend={frontend} other={other} ref={SkillRef} />
      <Footer socials={socials} ref={ContactRef} />
    </main>
  )
}

export default Home;