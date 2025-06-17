'use client';

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Educations from "./components/Educations/Educations";
import Experiences from "./components/Experiences/Experiences";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

const Home = () => {

  return (
    <main>
      <Header />
      <Profile />
      <Educations />
      <Experiences />
      <Skills />
      <Footer />
    </main>
  )
}

export default Home;